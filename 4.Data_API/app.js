const express = require('express');
const app = express();
app.use(express.json())

let basket = {
    banana: {
        amount: 1,
        price: 10,
        origin: "Brazil"
    },
    peach: {
        amount: 5,
        price: 5,
        origin: "China"
    }
};

app.get("/basket", (req, res) => {
    res.send(basket);
});

app.get("/basket/:id", (req, res) => {
    const fruit = req.params.id;
    if(basket[fruit] === undefined){
        res.status(405).send("fruit: " + fruit + " doesn't exist");
    } else {
        res.send(basket[fruit]);
    }
});

app.post("/basket", (req, res) => {
    basket = {...basket, ...req.body};
    res.send(basket);
});

app.post("/basket/:id", (req, res) => {
    const fruit = req.params.id;
    const info = req.body;
    basket[fruit] = info;
    res.send(basket);
});

app.patch("/basket", (req, res) => {
    const changes = {...req.body};
    const fruits = Object.keys(changes);
    const hasAllFruits = fruits.every(key => key in basket);
    if(!hasAllFruits){  
        res.status(405).send("You attempted to patch a fruit that doesn't exist")
    } else {
        basket = changes;
        res.send(basket);
    }
});

app.patch("/basket/:id", (req, res) => {
    const fruit = req.params.id;
    const info = req.body;
    if(!(fruit in basket)){
        res.status(405).send("fruit: " + fruit + " doesn't exist");
    } else {
        basket[fruit] = info;
        res.send(basket[fruit]);
    }
});

app.delete("/basket", (req, res) => {
    basket = { };
    res.send(basket);
});

app.delete("/basket/:id", (req, res) => {
    const fruit = req.params.id;
    if(!(fruit in basket)){
        res.status(405).send("fruit: " + fruit + " doesn't exist");
    } else {
        delete basket[fruit];
        res.send(basket);
    }
});

app.listen(8080, () => console.log("listening on http://localhost:8080/"));

// -------------------------------------------

// app.get("/search", (req, res) => {
//     // console.log(req.query);
//     res.send(req.query);
// });

// app.get("/telegram/:message/:name", (req, res) => {
//     const message = req.params.name + ", "  + req.params.message ;
//     res.send({message: message});
// });
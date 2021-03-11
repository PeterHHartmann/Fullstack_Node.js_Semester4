const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/welcome.html");
});

app.get("/pizza", (req, res) => {
    res.sendFile(__dirname + "/public/pizzapage.html");
});

app.get("/whiskey", (req, res) => {
    res.send({barkeep: "Here ya go, pal."});
});

app.get("/pub", (req, res) => {
    res.redirect("/whiskey");
});

app.get("/pub", (req, res) => {
    if (Number(req.query.money) > 4){
        res.redirect("/whiskey");
    } else {
        res.send({doorman: "you don't have enough money, get the hell out of here"});
    }
});

app.listen(port, (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("listening on http://localhost:" + port + "/");
    }
});
const express = require('express');
const app = express();
app.use(express.json());

let animeNames = [
    {
        id: 1,
        title: "Attack on Titan",
        weirdness: 6.8
    },
    {
        id: 2,
        title: "One Punch Man",
        protagonist: "Saitama"
    }
]

let AUTOINCREMENT = animeNames.length;

app.get("/anime_names", (req, res) => {
    res.send({anime_names: animeNames});
});

app.get("/anime_names/:id", (req, res) => {
    const animeNameId = Number(req.params.id);
    const foundAnimeName = animeNames.find(e => e.id === animeNameId);
    res.send({foundAnimeName: foundAnimeName});
});

app.post("/anime_names", (req, res) => {
    const newAnimeName = req.body;
    newAnimeName.id = ++AUTOINCREMENT;
    animeNames.push(newAnimeName);
    res.send({ data: newAnimeName});
});

app.patch("/anime_names/:id", (req, res) => {
    console.log(req.body);
    animeNames = animeNames.map(animeName => {
        if(animeName.id === Number(req.params.id)){
            animeName = {...animeName, ...req.body, id: animeName.id};
        }
        return animeName;
    });
    console.log(animeNames);
    res.send({});
});

app.delete("/anime_names/:id", (req, res) => {
    const query = Number(req.params.id);
    animeNames = animeNames.filter(animeName => animeName.id !== query);
    res.send({ });
});

app.listen(8080, (error) => {
    if(error){
        console.log(error);
    }
    console.log("listening on http://localhost:8080/");
});
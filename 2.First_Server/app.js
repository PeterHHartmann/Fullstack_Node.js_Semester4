const express = require("express");
const app = express();

const users = {
    peter: {
        age: 25,
        country: "Denmark"
    },
    john: {
        age: 66,
        country: "USA"
    },
    anne: {
        age: 45,
        country: "Great Britain"
    }
};

app.get("/", (req, res) => {
    res.send({ message: "First call to /" })
});


app.get("/user", (req, res) => {
    res.send(users);
});

app.get("/user/:name", (req, res) => {
    res.send(users[req.params.name]);
});

app.listen(8080);
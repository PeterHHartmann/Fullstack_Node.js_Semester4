const express = require("express");
const app = express();

const users = {
    user1: {
        name: "Peter",
        age: 25,
        country: "Denmark"
    },
    user2: {
        name: "John",
        age: 66,
        country: "USA"
    },
    user3: {
        name: "Anne",
        age: 45,
        country: "Great Britain"
    }
};

app.get("/", (req, res) => {
    res.send({ message: "First call to /" })
});

app.get("/user1", (req, res) => {
    res.send(users.user1)
});

app.get("/user2", (req, res) => {
    res.send(users.user2)
});

app.get("/user3", (req, res) => {
    res.send(users.user3)
});

app.listen(8080);
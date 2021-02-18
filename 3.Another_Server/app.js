const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

app.get("/me", (req, res) => {
    const myInfo = {
        firstname: "Peter",
        lastname: "Hartmann",
        age: 25,
        country: "Denmark"
    };
    res.send(myInfo);
});

app.listen(8080);
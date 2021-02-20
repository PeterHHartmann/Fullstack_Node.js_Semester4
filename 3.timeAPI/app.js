const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

app.get("/time", (req, res) => {
    const date = new Date();
    res.send({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        milliseconds: date.getMilliseconds(), 
    });
});

app.get("/day", (req, res) => {
    const date = new Date();
    res.send({
        day: date.getDate(),
        dayOfWeek: date.toString().split(" ")[0],
    });
});

app.get("/month", (req, res) => {
    const date = new Date();
    res.send({
        month: date.getMonth(), 
        monthOfYear: date.toString().split(" ")[1],
    });
});

app.listen(8080, () => console.log("listening on http://localhost:8080/"));;
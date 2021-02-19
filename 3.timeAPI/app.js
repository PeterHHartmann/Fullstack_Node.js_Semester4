const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

app.get("/time", (req, res) => {
    const getTime = (date) => {
        return {
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds(),
            milliseconds: date.getMilliseconds(), 
        }
    }
    res.send(getTime(new Date()));
});

app.get("/day", (req, res) => {
    const getDay = (date) => {
        const day = date.getDay();
        const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return {
            day: day,
            dayOfWeek: daysOfWeek[day]
        }
    }
    res.send(getDay(new Date()));
});

app.get("/month", (req, res) => {
    const getMonth = (date) => {
        const month = date.getMonth();
        const monthsOfYear = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        return {
            month: month, 
            monthOfYear: monthsOfYear[month]
        }
    }
    res.send(getMonth(new Date()));
});

app.listen(8080);
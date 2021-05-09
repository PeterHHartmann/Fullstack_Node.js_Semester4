const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.json());

const fs = require('fs');
const header = fs.readFileSync(__dirname + '/public/header/header.html', "utf-8");
const footer = fs.readFileSync(__dirname + '/public/footer/footer.html', "utf-8");
const frontpage = fs.readFileSync(__dirname + '/public/frontpage/frontpage.html', "utf-8");
const projects = fs.readFileSync(__dirname + '/public/projects/projects.html', "utf-8");
const contacts = fs.readFileSync(__dirname + '/public/contacts/contacts.html', "utf-8");

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/frontpage/frontpage.html");
    res.send(header + frontpage + footer);
});

app.get("/projects", (req, res) => {
    res.send(header + projects + footer);
});

app.get("/contacts", (req, res) => {
    res.send(header + contacts + footer);
});

const server = app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Server is running on port " + server.address().port);
    }
});
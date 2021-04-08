const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const fetch = require('node-fetch');
app.get("/proxy", (req, res) => {
    fetch('https://google.com/')
        .then(response => response.text())
        .then(text => res.send(text));
});

app.listen(port, (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("listening on http://localhost:" + port + "/");
    }
});

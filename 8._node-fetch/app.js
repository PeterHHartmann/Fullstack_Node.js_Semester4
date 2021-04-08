const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8080;

app.get("/proxy", (req, res) => {
    fetch('https://google.com/')
        .then(res => res.textConverted())
        .then(body => res.send(body));
});

app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Server is running on port " + PORT);
    }
});

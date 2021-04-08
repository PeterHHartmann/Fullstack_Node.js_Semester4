const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

const server = app.listen(PORT, (error) => {
    if(error){
        console.log(error);
    } else {
        console.log("Server is running on port " + server.address().port);
    }
});
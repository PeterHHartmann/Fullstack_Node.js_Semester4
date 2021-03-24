const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/public/about/about.html");
});

app.get("/datatypes", (req, res) => {
    res.sendFile(__dirname + "/public/data_types/data_types.html");
});

app.get("/nodepackagemanager", (req, res) => {
    res.sendFile(__dirname + "/public/node_package_manager/node_package_manager.html");
});

app.get("/nodemon", (req, res) => {
    res.sendFile(__dirname + "/public/nodemon/nodemon.html");
});

app.get("/express_guide", (req, res) => {
    res.sendFile(__dirname + "/public/express_guide/express_guide.html");
});

app.listen(8080, () => console.log("listening on http://localhost:8080/"));
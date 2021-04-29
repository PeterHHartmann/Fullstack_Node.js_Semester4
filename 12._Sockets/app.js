const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const server = require("http").createServer(app);

const io = require('socket.io')(server);

io.on("connection", (socket) => {
    // console.log("A socket connected with id" + socket.id);

    socket.on("colorChanged", (data) => {
        io.emit("changeBackgroundToThisColor", data);
    });

});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/colors.html");
});

server.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('listening on http://localhost:' + PORT + '/');
});
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs");
})

io.on("connection", (socket) => {
    console.log(socket.id)
    socket.on("message", (data) => {
        console.log(data);
        socket.broadcast.emit("message", data);
    });
})


server.listen(3000, () => console.log("server up on http://localhost:3000"));

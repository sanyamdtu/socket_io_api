var express = require("express"),
  socketio = require("socket.io"),
  http = require("http"),
  app = express(),
  server = http.createServer(app),
  io = socketio(server);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
///main socket thing

app.get("/", (req, res) => {
  res.send("{welcome to the api}");
});
//server started
server.listen(5000 || process.env.PORT, () => console.log("server started"));

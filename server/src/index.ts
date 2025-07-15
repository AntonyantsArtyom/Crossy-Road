import express from "express";
import http from "http";
import { Server } from "socket.io";
import { PlayerSocket } from "./sockets/player.socket";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
  PlayerSocket(io, socket);
});

server.listen(3000, () => {
  console.log("Server is listening at http://localhost:3000");
});

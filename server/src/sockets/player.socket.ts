import { Server, Socket } from "socket.io";

export const PlayerSocket = (io: Server, socket: Socket) => {
  socket.on("position", (data) => {
    const payload = {
      id: socket.id,
      x: data.x,
      y: data.y,
      rotation: data.rotation,
    };

    socket.broadcast.emit("playerPosition", payload);
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    socket.broadcast.emit("playerDisconnected", { id: socket.id });
  });
};

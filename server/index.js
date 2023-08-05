const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const chatRoutes = require("./routes/chatRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const { Server } = require("socket.io");
const cors = require("cors");
const Message = require("./models/MessageModel.js");

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api/chats", chatRoutes);
app.use("/api/auth", authRouter);

const Connection = async () => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected db"))
    .catch((err) => console.log(err));
};

const server = app.listen(process.env.PORT, () => {
  console.log("8080 portunda dinliyor");
  Connection();
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const dates = new Date();
let formatDate = dates.toLocaleDateString("tr-TR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

io.on("connection", (socket) => {
  console.log(`Socket ${socket.id} connected`);
  socket.on("sendMessage", (message) => {
    console.log("message giden", message);
    io.emit("message", message);
    Message.create({
      message: message.message,
      users: [message.from, message.to],
      sender: message.from,
      createDate: formatDate,
    });
  });
  // socket.on("disconnect", () => {
  //   console.log("socket disconnect");
  // });
});

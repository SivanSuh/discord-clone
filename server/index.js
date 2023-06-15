const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const cookieParser = require("cookie-parser");
dotenv.config();

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(cookieParser());

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connnected DB");
  } catch (err) {
    console.log(err);
  }
};

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.listen(process.env.PORT, () => {
  console.log("8080 portunda dinliyor");
  Connection();
});

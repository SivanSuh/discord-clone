const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();

app.use(cors());
// mongoose.set("strictQuery", true);
app.use(express.json());
// app.use(cookieParser());

//app.use("/api/user", userRouter);
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

app.listen(process.env.PORT, () => {
  console.log("8080 portunda dinliyor");
  Connection();
});

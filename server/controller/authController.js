const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, same) => {
        if (same) {
          res.status(200).send(user);
        }
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
const allUser = async (req, res) => {
  try {
    const getUser = await UserModel.find();
    res.send(getUser);
  } catch (err) {
    console.log(err);
  }
};
const logout = (req, res) => {};

const register = async (req, res) => {
  try {
    const { email, userName, password, confirmPassword } = req.body;
    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "bu emaile sahip bir kullanıcı mevcut" });
    }
    if (password !== confirmPassword) {
      return res.status(404).json({ message: "Şifreler eşleşmiyor" });
    }

    const hash = await bcrypt.hash(req.body.password, 10);

    const newUser = new UserModel({
      email,
      userName,
      password: hash,
    });
    await newUser.save();
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send("Something went error");
  }
};

module.exports = {
  login,
  logout,
  register,
  allUser,
};

const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ userName: req.body.userName });
    if (!user) return res.status(404).send("User not found");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("Wrong Password or usernamae");

    const token = jwt.sign({
      id: user._id,
    });

    const { password, ...info } = user._doc;
    res.status(200).send(info);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
const logout = (req, res) => {};
const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new userModel({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User Createed");
  } catch (error) {
    res.status(500).send("Something went error");
  }
};

module.exports = {
  login,
  logout,
  register,
};

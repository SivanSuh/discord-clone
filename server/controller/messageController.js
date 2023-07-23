const Message = require("../models/MessageModel.js");

const getMessages = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    const messages = await Message.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessage = messages.map((msg) => {
      console.log("server msg", msg);
      return {
        fromSelf: msg.sender.toString(),
        message: msg.message,
        createData: msg.createdAt,
        users: msg.users,
      };
    });

    res.json(projectedMessage);
  } catch (error) {
    next(error);
  }
};

const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Message.create({
      message: message,
      users: [from, to],
      sender: from,
    });

    if (data) return res.send(data);
    else return res.json({ msg: "failed message" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMessages,
  addMessage,
};

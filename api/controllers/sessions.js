const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/users");

const sessionsRouter = express.Router();

sessionsRouter.post("/login", async (req, res) => {
  const currentUser = await User.findOne({
    username: req.body.username,
  }).exec();
  res.status(200).json(currentUser);
});

sessionsRouter.delete("/logout", (req, res) => {
  req.session.destroy();
  res.status(200).json();
});

module.exports = sessionsRouter;

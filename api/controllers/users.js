const express = require("express");

const bcrypt = require("bcrypt");

const usersRouter = express.Router();
const User = require("../models/users.js");

//Post
usersRouter.post("/", async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const users = await User.create(req.body);
  res.status(200).json(users);
});

module.exports = usersRouter;

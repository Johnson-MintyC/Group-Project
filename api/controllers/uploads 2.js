const express = require("express");

const uploadRouter = express.Router();

const upload = require("../middlewares/upload");

uploadRouter.post("/", upload.single("photo"), async (req, res) => {
  //   console.log("/upload route");
  //   console.log("file", req.file);
  //   console.log("body", req.body);
  //   req.body.image = req.file.path;
  //   console.log("body2", req.body);
  res.status(200).json(req.file);
});

module.exports = uploadRouter;

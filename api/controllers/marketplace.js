const express = require("express");

const marketplaceRouter = express.Router();
// const Marketplace = require("../models/marketplace.js");

//Index
marketplaceRouter.get("/", (req, res) => {
  res.send("Whatever");
});

module.exports = marketplaceRouter;

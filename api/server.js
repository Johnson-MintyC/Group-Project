///////////////////////////////
//  Dependencies
///////////////////////////////

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;
const dbURL = process.env.MONGODB_URL;

const marketplaceController = require("./controllers/marketplace.js");

//////////////////////////
//  Middlewares
//////////////////////////

const whitelist = ["http://localhost:3500"];
app.use(
  cors({
    origin: (origin, cb) => {
      if (whitelist.indexOf(origin) !== -1) {
        cb(null, true);
      } else {
        cb(new Error());
      }
    },
  })
);

// convert HTML forms to js objects
app.use(express.json());

/////////////////////
//  Controllers
/////////////////////
app.use("/marketplace", marketplaceController);

/////////////////////
//  Listeners & DB
/////////////////////
mongoose.connect(dbURL, () => {
  console.log("Connected to market db");
});

app.listen(PORT, () => {
  console.log("Listening on", PORT);
});

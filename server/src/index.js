// create express app
const express = require("express");
const app = express();
app.use(express.json());

const config = require("./config/settings.js");

// import routes
const solves = require("./api/routers/solves");
app.use("/solves", solves);

// setup mongodb
const mongoose = require("mongoose");
const mongo_host = config.mongo.host;
const mongo_port = config.mongo.port;
const mongo_db = config.mongo.db;
const mongo_url = "mongodb://" + mongo_host + ":" + mongo_port + "/" + mongo_db;
mongoose.set("strictQuery", true);
mongoose.connect(
  mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Connected to database ${mongo_db} at port ${mongo_port}`);
    }
  }
);

const port = config.port;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// handling process killing
process.on("exit", () => {
  console.log("exiting...");
  process.exit();
});

process.on("SIGINT", () => {
  console.log("exiting...");
  process.exit();
});

// create express app
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const config = require("./config/settings.js");

// import routes
const solves = require("./api/routers/solves");
app.use("/solves", solves);

// setup mongodb
const mongoose = require("mongoose");
const mongo_url = config.db_url;
mongoose.set("strictQuery", true);
mongoose.connect(
  mongo_url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Connected to MongoDB database`);
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

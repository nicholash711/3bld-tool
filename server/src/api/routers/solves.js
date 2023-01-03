const express = require("express");
let router = express.Router();

let solves = [];

router
  .post("/", (req, res) => {
    solves.push(req.body);
    res.send({ message: "received request" });
  })
  .get("/", (req, res) => {
    res.send({ solves: solves });
  });

module.exports = router;

const express = require("express");
let router = express.Router();

const Solve = require("../models/index").Solve;

router
  .post("/", (req, res) => {
    const solve = new Solve(req.body);
    console.log(solve);
    solve.save();
    res.send({ message: "solve saved to database" });
  })
  .get("/", async (req, res) => {
    let solves = await Solve.find();
    console.log(solves);
    res.send({ solves: solves });
  });

module.exports = router;

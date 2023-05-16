const express = require("express");
let router = express.Router();

const Solve = require("../models/index").Solve;

router
  .post("/", (req, res) => {
    const solve = new Solve(req.body);
    solve.save();

    res.send({ message: "solve saved to database" });
  })
  .get("/", async (req, res) => {
    let solves = await Solve.find();

    res.send({ solves: solves });
  })
  .delete("/:id", async (req, res) => {
    let id = req.params.id;
    await Solve.deleteOne({ _id: id });
    res.send({ solves: await Solve.find() });
  });

module.exports = router;

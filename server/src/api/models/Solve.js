const mongoose = require("mongoose");

const solveSchema = new mongoose.Schema({
  scramble: String,
  time: Number,
});

module.exports = mongoose.model("Solve", solveSchema);

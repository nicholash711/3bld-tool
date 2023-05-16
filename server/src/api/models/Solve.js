const mongoose = require("mongoose");

const solveSchema = new mongoose.Schema({
  scramble: {
    type: String,
    immutable: true,
  },
  time: Number,
  dateSolved: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

module.exports = mongoose.model("Solve", solveSchema);

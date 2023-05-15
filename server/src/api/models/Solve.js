const mongoose = require("mongoose");

const solveSchema = new mongoose.Schema({
  scramble: {
    type: String,
    immutable: true,
  },
  time: Number,
});

module.exports = mongoose.model("Solve", solveSchema);

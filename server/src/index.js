// load dotenv
require("dotenv").config();

// create express app
const express = require("express");
const app = express();
app.use(express.json());

app.get("/get", (req, res) => {
  res.json({ message: "This is a change" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

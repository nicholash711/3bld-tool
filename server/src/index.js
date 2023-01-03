// load dotenv
require("dotenv").config();

// create express app
const express = require("express");
const app = express();
app.use(express.json());
const requestID = require("express-request-id");
app.use(requestID);

// import routes
const solves = require("./api/routers/solves");
app.use("/solves", solves);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

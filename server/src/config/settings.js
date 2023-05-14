// require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  db_url: process.env.MONGODB_URL || "mongodb://localhost:27017",
};

module.exports = config;

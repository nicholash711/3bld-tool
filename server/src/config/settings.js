require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  mongo: {
    host: process.env.MONGOHOST,
    port: process.env.MONGOPORT,
    db: process.env.MONGODB,
  },
};

module.exports = config;

require("dotenv").config();

const config = {
  port: process.env.PORT || 4444,
  mongo: {
    host: process.env.MONGOHOST,
    port: process.env.MONGOPORT,
    db: process.env.MONGODB,
  },
};

module.exports = config;

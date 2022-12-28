import { randomScramblefromEvent } from "cubing";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ scramble: randomScramblefromEvent("333bf") });
});

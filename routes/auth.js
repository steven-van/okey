const express = require("express");
const router = express.Router();

const crypto = require("crypto");

router.post("/login", () => {
  const params = req.body;

  var email = params.email.toLowerCase();
  var pwd = params.password;

  const hashed = crypto
    .createHash("sha256")
    .update(email + ":" + pwd)
    .digest("hex");
});

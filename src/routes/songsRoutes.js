const express = require("express");
const { testQueue } = require("../controllers/songsController");

const router = express.Router();

router.get("/", async (req, res) => {
  await testQueue();
  res.send("Test");
});

module.exports = router;

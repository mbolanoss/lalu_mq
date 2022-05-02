const express = require("express");
const { enqueueSong } = require("../controllers/songsController");

const songsRouter = express.Router();

songsRouter.post("/", async (req, res) => {
  try {
    if (!req.files) {
      res.status(400).send({
        message: "No file found in the request",
      });
    } else {
      enqueueSong(req.files.song);

      res.sendStatus(200);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = { songsRouter };

const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const _ = require("lodash");

const app = express();

//Load middleware

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

const { songsRouter } = require("./routes/songsRoutes");
app.use("/songs", songsRouter);

const PORT = 3000;

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);

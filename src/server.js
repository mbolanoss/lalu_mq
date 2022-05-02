const express = require("express");
const app = express();

const songsRouter = require("./routes/songs");
app.use("/songs", songsRouter);

const PORT = 3000;

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);

const express = require("express");

const app = express();

const postRouter = require("./routes/posts");

app.use(express.json());

app.use("/api/posts", postRouter);

app.listen(8800, () => {
  console.log("connected");
});

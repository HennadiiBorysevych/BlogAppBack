const express = require("express");

const app = express();

const postRouter = require("./routes/posts");
const authRouter = require("./routes/posts");
const userRouter = require("./routes/users");

app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
  console.log("connected");
});

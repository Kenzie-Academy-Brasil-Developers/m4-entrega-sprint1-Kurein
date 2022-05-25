import express from "express";

import userRouter from "./routes/users.routes";

const app = express();
const port = 3333;

app.use(express.json());

app.use("", userRouter);

app.listen(port, () => {
  console.log(`app running, using port ${port}`);
});

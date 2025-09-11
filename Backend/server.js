import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth",AuthRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import express from "express";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import cors from "cors";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

const supabase = createClient(process.env.DATABASE_URL,process.env.DATABASE_KEY);

async function testConnection() {
  try {
    const { error } = await supabase.from("Posts").select("*").limit(1);

    if (error) {
      console.error("Supabase connection failed:", error.message);
    } else {
      console.log("Supabase connected!");
    }
  } catch (err) {
    console.error("Unexpected error while connecting:", err.message);
  }
}

testConnection();

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth",AuthRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

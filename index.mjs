import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/dist", express.static("dist"));
app.use("/", express.static("public"));

app.listen(port, () => console.log(`Listening`));

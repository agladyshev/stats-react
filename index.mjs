import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { fetchAccounts } from "./mongo.mjs";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/dist", express.static("dist"));
app.use("/", express.static("public"));

const getAccounts = function(req, res, next) {
  fetchAccounts()
    .then(accounts => {
      res.accounts = accounts;
      next();
    })
    .catch(error => console.log(error));
};

app.get("/getAccounts", getAccounts, function(req, res, next) {
  res.send(res.accounts);
});

app.listen(port, () => console.log(`Listening`));

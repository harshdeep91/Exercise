import Express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config'
// import dotenv from 'dotenv';
const app = Express();
app.use(cors());
// dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=process.env.PORT || 5000;
const URL = process.env.URL;
console.log(URL);
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
app.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
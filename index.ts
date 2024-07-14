import express, { Request, Response } from "express";
import connectToDatabase from "./database/connect";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors(corsOptions));

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`SERVER RUNNING IN PORT: ${PORT}`);
    });
  } catch (error) {
    console.log("error", error);
  }
};

startServer();

app.get("/", (req: Request, res: Response) => {
  res.send(`connected to port ${PORT}`);
});

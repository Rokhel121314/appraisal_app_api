import express, { NextFunction, Request, Response } from "express";
import connectToDatabase from "./database/connect";
import dotenv from "dotenv";
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ROUTES
import userRouter from "./routes/userRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: ["https://appraisal-app-ui.vercel.app", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(userRouter);

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
  res.send(`SERVER IS NOW RUNNING`);
});

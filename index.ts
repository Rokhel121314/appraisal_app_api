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
  credentials: true,
  origin: ["https://appraisal-app-ui.vercel.app", "http://localhost:3000"],
  optionSuccessStatus: 200,
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

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send(`SERVER IS NOW RUNNING`);
});

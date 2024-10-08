import express, { Request, Response } from "express";
import connectToDatabase from "./database/connect";
import dotenv from "dotenv";
const cors = require("cors");
const cookieParser = require("cookie-parser");

// ROUTES
import userRouter from "./routes/userRoutes";
import gallagherEntityRouter from "./routes/gallagherEntityRoutes";
import gallagherSiteRouter from "./routes/gallagherSiteRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(
  cors({
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: [
      "https://www.spallcprocessingportal.com",
      "http://localhost:5173",
      // "https://appraisals-app-ui.vercel.app",
    ], // whatever ports you used in frontend
  })
);
app.use(cookieParser());

app.use(userRouter);
app.use(gallagherEntityRouter);
app.use(gallagherSiteRouter);

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

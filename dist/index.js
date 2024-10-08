"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./database/connect"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors = require("cors");
const cookieParser = require("cookie-parser");
// ROUTES
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const gallagherEntityRoutes_1 = __importDefault(require("./routes/gallagherEntityRoutes"));
const gallagherSiteRoutes_1 = __importDefault(require("./routes/gallagherSiteRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb" }));
app.use(cors({
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    origin: [
        "https://www.spallcprocessingportal.com",
        "http://localhost:5173",
        // "https://appraisals-app-ui.vercel.app",
    ], // whatever ports you used in frontend
}));
app.use(cookieParser());
app.use(userRoutes_1.default);
app.use(gallagherEntityRoutes_1.default);
app.use(gallagherSiteRoutes_1.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.default)();
        app.listen(PORT, () => {
            console.log(`SERVER RUNNING IN PORT: ${PORT}`);
        });
    }
    catch (error) {
        console.log("error", error);
    }
});
startServer();
app.get("/", (req, res) => {
    res.send(`SERVER IS NOW RUNNING`);
});

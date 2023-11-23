import express from "express";
const app = express();
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import route from "./routes/index.js";
import initMongoDB from "./database/init.mongodb.js";
import CheckConnect from "./helpers/checkConnect.mongodb.js";

// init middleware
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));

// init db
initMongoDB;
// CheckConnect.checkOverLoad();
// init routes
route(app);
// init handle error

export default app;

import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import * as fs from "fs";
import * as path from "path";
import cors from "cors";
import { establishConnection } from "./config/dbConfig.js";
import { recordController } from "./controllers/records.controller.js";

const app = express();

app.use(bodyParser.json());

// Setup CORS
app.use(cors());

//Setup Helmet
app.use(helmet());

const __dirname = path.resolve();
// Logger
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "logs.log"), {
      flags: "a",
    }),
  })
);

// Creation of database connection
establishConnection();

// Routing
app.use("/api/v1", recordController);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at PORT ${process.env.PORT || 3000}`);
});

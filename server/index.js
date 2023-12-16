import express from "express";
import db from "./db.js";
import models from "./models/models.js";
import cors from "cors";
import { config } from "dotenv";
import path, { dirname as currentDirname } from "path";
import { fileURLToPath } from "url";
import router from "./routes/index.js";
import fileUpload from "express-fileupload";
import errorHandler from "./middleware/errorHandlingMiddleware.js";
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = currentDirname(__filename);

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);

// Error handling, last middleware
app.use(errorHandler);

const start = async () => {
  try {
    await db.authenticate();
    await db.sync();
    app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
  } catch (e) {
    console.log(e.message);
  }
};

start();

import express from 'express';
import db from './db.js';
import models from './models/models.js';
import cors from 'cors';
import { config } from 'dotenv';
import router from './routes/index.js';
config();

const PORT = process.env.PORT

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router)

const start = async () => {
    try {
        await db.authenticate();
        await db.sync();
        app.listen(PORT, () => console.log(`Server started on post ${PORT}`));
    } catch(e) {
        console.log(e.message);
    };
};

start();
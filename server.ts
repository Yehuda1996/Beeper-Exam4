import express, {Application} from 'express';
import beeperRouter from './routes/beeper.js';
import dotenv from 'dotenv';

dotenv.config()

const PORT: number | string = process.env.Port || 3000;

const app: Application = express();

app.use(express.json());

app.use('/api', beeperRouter);
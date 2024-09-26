import express from 'express';
import beeperRouter from './routes/beeper.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.Port || 3000;
const app = express();
app.use(express.json());
app.use('/api', beeperRouter);

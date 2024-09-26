import express from 'express';
import beeperRouter from './routes/beeper.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.Port || 3001;
const app = express();
app.use(express.json());
app.use('/api', beeperRouter);
app.listen(PORT, () => {
    console.log(`Server is on and running on port ${PORT}`);
});

import express, {Application} from 'express';
import beeperRouter from './routes/beeper.js';
import dotenv from 'dotenv';

dotenv.config()

const PORT: number | string = process.env.Port || 3001;

const app: Application = express();

app.use(express.json());

app.use('/api', beeperRouter);

app.listen(PORT, () => {
    console.log(`Server is on and running on port ${PORT}`);
})
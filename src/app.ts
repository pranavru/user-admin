import express, { Application } from 'express';
import cors from 'cors';
import { setRoutes } from './routes';
import connectDB from './config/db';
import dotenv from 'dotenv';

// Load environment variables from the appropriate .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const app: Application = express();
const PORT = process.env.PORT || 8000;

connectDB();

const allowedOrigins = ['https://user-admin-snowy.vercel.app', 'http://localhost:3000'];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
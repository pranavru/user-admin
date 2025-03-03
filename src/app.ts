import express, { Application } from 'express';
import { setRoutes } from './routes';
import connectDB from './config/db';
import dotenv from 'dotenv';

// Load environment variables from the appropriate .env file
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

const app: Application = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
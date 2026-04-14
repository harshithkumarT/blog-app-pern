import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js'
import pool from './config/db.js'

dotenv.config();
const app = express();
const port = process.env.PORT|| 3000;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.get('/',(req ,res) => {
    res.send("Backend is running successfully");
})

app.listen(port,()=> {
    console.log(`server started on port ${port}`);
});
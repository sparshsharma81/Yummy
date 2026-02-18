import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRoute from './Routes/auth.js';   


dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', authRoute);

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Auth Service is running on  ${Port}`);
  connectDb();
});


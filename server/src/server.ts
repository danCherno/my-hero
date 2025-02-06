import express from 'express'
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'; 
import 'dotenv/config';
import cors from 'cors';

const app = express()
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

//DB
const dbUrl = process.env.DB_URL;
const database = 'my-hero';

//connection
mongoose.connect(`${dbUrl}/${database}`).then(()=>{
    console.info("DB connected")
}).catch((err)=>{
    console.error(err)
});

//routes
import usersRouter from './routes/users/userRoutes';
app.use("/api/users", usersRouter);
import heroesRouter from './routes/heroes/heroRoutes';
app.use("/api/heroes", heroesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
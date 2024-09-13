import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import mongoose from "mongoose";
import {router} from "./routes/authRoutes.js";
const authRoute = router
const app = express()
dotenv.config();
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use('/api',authRoute)
mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("Connection is successful")
}).catch((e)=>console.log(e,"There is error"))
app.listen(PORT,()=>{
    console.log(`Server Started at port ${PORT}`)
})
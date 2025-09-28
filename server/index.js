import express from 'express'
// import { connectDB } from './config/db.js'
import postRouter from './routes/posts.js'
import authRouter from './routes/auth.js'
// import db from './config/db.js'
// import dotenv from 'dotenv'
// dotenv.config()


const app = express()

app.use(express.json())


app.use('/api/posts',postRouter)
app.use('/api/auth',authRouter)


app.listen(8000,()=>{
    console.log("connected..");
    
})
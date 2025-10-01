import express from 'express'
// import { connectDB } from './config/db.js'
import postRouter from './routes/posts.js'
import authRouter from './routes/auth.js'
import cors from "cors"
import cookieParser from 'cookie-parser'



const app = express()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))

app.use(express.json())
app.use(cookieParser())


app.use('/api/posts',postRouter)
app.use('/api/auth',authRouter)


app.get('/',(req,res)=>{
    res.send("helloworld")
})

app.listen(8000,()=>{
    console.log("connected..");
    
})
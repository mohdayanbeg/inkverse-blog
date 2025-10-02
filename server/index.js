import express from 'express'
import postRouter from './routes/posts.js'
import authRouter from './routes/auth.js'
import cors from "cors"
import cookieParser from 'cookie-parser'
import multer from "multer";



const app = express()

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true,
}))

app.use(express.json())
app.use(cookieParser())


app.use('/api/posts',postRouter)
app.use('/api/auth',authRouter)

const storage=multer.diskStorage({
    destination: (req,res,cb)=>{
        cb(null, '../client/public')
    },
    filename: (req,res,cb)=>{
        cb(null, Date.now()+res.originalname)
    }
})


const upload = multer({storage})
app.post('/api/upload',upload.single('file'),(req,res)=>{
    const file= req.file;
    res.status(200).json(file.filename)
})
app.listen(8000,()=>{
    console.log("connected..");
    
})

import bcrypt from "bcrypt"
import { pool } from "../config/db.js";
import jwt from "jsonwebtoken";

export const register = async (req,res)=>{
    try {
       const checkUserQuery = 'SELECT * FROM users WHERE email=? OR username=?';
    const {email, username, password}=req.body;
    const [data] = await pool.query(checkUserQuery,[email,username])
    if (data.length>0) {
        return res.status(409).json({ message: "User already exists!"})}
    else{
        const hashedPassword = await bcrypt.hash(password,10);
        const insertUserQuery = 'INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)';
        await pool.query(insertUserQuery,[username,email,hashedPassword])
        return res.status(201).json({ message: "User has been created successfully." })
    } 
    } catch (error) {
       return res.status(500).send(error)
    }


    
}

export const login = async (req,res)=>{
    try {
        const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
        const {username, password}=req.body;
        const [data] = await pool.query(checkUserQuery,[username])
        if (data.length==0) {
        return res.status(401).json({ message: "No User Found!",})}

        const verifyPassword = await bcrypt.compare(password,data[0].password)

        if(!verifyPassword){return res.status(401).json({message:"Invalid Credentials"})}
        
        const token =jwt.sign({id:data[0].id},process.env.JWT_SECRET,{expiresIn:'7d'})

        res.cookie('token',token,{
            httpOnly:true,
            maxAge: 7*24*60*60*1000,
            secure:true,
            sameSite:'none',
        })

        const {password: hashedPassword, ...safeuser}=data[0]

        return res.status(200).json(safeuser)
    } catch (error) {
         return res.status(401).json({ error:error.message})}
    }


export const logout = async (req,res)=>{

}


import bcrypt from "bcrypt"
import { pool } from "../config/db.js";

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
       return res.status(401).send(error)
    }


    
}

export const login = async (req,res)=>{
    try {
        const checkUserQuery = 'SELECT * FROM users WHERE username = ?';
        const {username, password}=req.body;
        const [data] = await pool.query(checkUserQuery,[username])
        if (data.length==0) {
        return res.status(401).json({ message: "No User Found!",})}

        return res.json({data: data[0].password,})

        // const verifyPassword = await bcrypt(password,)
    } catch (error) {
         return res.status(401).json({ error: error,})}
    }


export const logout = async (req,res)=>{

}

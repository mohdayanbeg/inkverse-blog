import {db} from "../config/db.js";
import bcrypt from "bcryptjs"

export const register = async (req,res)=>{
    const q= 'SELECT * FROM users WHERE email=? OR username=?'
    const {email, username, password}=req.body();
    await db.query(q,[email,username], async (err,data)=>{
        if(data) return res.status(401).json("user already exist!");
        if(err) return res.status(401).json(err);
        
        const hashedPassword= await bcrypt.hash(password,10)
    })


    
}

export const login = async (req,res)=>{
    
}


export const logout = async (req,res)=>{

}
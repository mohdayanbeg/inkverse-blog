import mysql from "mysql2/promise"

// export const connectDB = async ()=>{
//     try{
//      await mysql.createConnection({
//     host:  process.env.DB_HOST|| "localhost",
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASSWORD || "Mo@24092003",
//     database: process.env.DB_NAME || "inkverseblogs",
// })
// console.log('database connected');
//     } catch{
//         console.log('database connection error')
//     }
// }

export const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
})

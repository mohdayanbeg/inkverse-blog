
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";

export const getPosts = async (req, res) => {
  try {
    
    const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  const [posts] = await pool.query(q, [req.query.cat])
    return res.status(201).json(posts);
    
  } catch (error) {
    return res.status(500 ).json({error:error.message})
  }
};

export const getPost = async (req, res) => {
  try {
    const q =
    "SELECT p.id, `username`, `title`, `description`, `content`, p.image, u.profileImg AS userImg, `cat`,`created_at` FROM users u JOIN posts p ON u.id = p.user_id WHERE p.id = ? ";

  const [data]=await pool.query(q, [req.params.id])

    return res.status(200).json(data[0]);
  } catch (error) {
     return res.status(500).json(error);
  }}

export const addPost = async (req, res) => {
  try {
    const token = req.cookies.token;
  if (!token) return res.status(401).json("Not authenticated!");

  const verified=jwt.verify(token,process.env.JWT_SECRET)
    if (!verified) {return res.status(403).json("Token is not valid!");}
    const q =
      "INSERT INTO posts(`title`, `description`, `image`, `cat`,`user_id`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.image,
      req.body.cat,
      userInfo.id,
    ];

    await pool.query(q, [values])
      return res.json("Post has been created.");
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deletePost = async (req, res) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return res.status(401).json({ message: "Not authenticated: Missing token." });
        }
        
        const verified = jwt.verify(token, process.env.JWT_SECRET); 
        
        const postId = req.params.id;
        
        const q = "DELETE FROM posts WHERE `id` = ? AND `user_id` = ?";

        const [result] = await pool.query(q, [postId, verified.id]);
        
        if (result.affectedRows === 0) {
            return res.status(403).json({ message: "You are not authorized to delete this post." });
        }

        return res.status(200).json({ message: "Post has been successfully deleted." });
        
    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Token is invalid or expired." });
        }
        
        return res.status(500).json({ 
            message: "Internal server error during deletion.",
            error: error.message 
        });
    }
};
export const updatePost = async (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

  //   const postId = req.params.id;
  //   const q =
  //     "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `uid` = ?";

  //   const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

  //   db.query(q, [...values, postId, userInfo.id], (err, data) => {
  //     if (err) return res.status(500).json(err);
  //     return res.json("Post has been updated.");
  //   });
  // });
  try {
    const token = req.cookies.token;
  if (!token) return res.status(401).json("Not authenticated!");

  const verified=jwt.verify(token,process.env.JWT_SECRET)
    if (!verified) {return res.status(403).json("Token is not valid!");}
    const q =
      "INSERT INTO posts(`title`, `description`, `image`, `cat`,`user_id`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.image,
      req.body.cat,
      userInfo.id,
    ];

    await pool.query(q, [values])
      return res.json("Post has been created.");
  } catch (error) {
    return res.status(500).json(error);
  }

};
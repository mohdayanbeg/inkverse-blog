import express, { Router } from 'express'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller.js';


const postRouter = express.Router();

postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
// postRouter.post("/", addPost);
postRouter.delete("/:id", deletePost);
// postRouter.put("/:id", updatePost);

export default postRouter;
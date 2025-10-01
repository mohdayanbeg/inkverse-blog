import express, { postRouter } from 'express'
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller';


const postRouter = express.postRouter();

postRouter.get("/", getPosts);
postRouter.get("/:id", getPost);
postRouter.post("/", addPost);
postRouter.delete("/:id", deletePost);
postRouter.put("/:id", updatePost);

export default postRouter;
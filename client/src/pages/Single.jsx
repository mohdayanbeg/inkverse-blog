import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import { serverUri } from '../App';
import moment from 'moment'


const Single = () => {
    const {currentUser}= useContext(AuthContext)
  const [post,setPost]=useState({})
  const [posts,setPosts]=useState([])
  const location = useLocation()
  const postId=location.pathname.split('/')[2]
  const navigate=useNavigate()
  
  const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};


  
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
          const res= await axios.get(`${serverUri}/api/posts`)
          
          const postRes = await axios.get(`${serverUri}/api/posts/${postId}`)
          
        setPosts(res.data)
        setPost(postRes.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData()
  },[postId])


    
const handleDelete = async () => {
    try {
        console.log(postId);
        
        await axios.delete(`${serverUri}/api/posts/${postId}`,{withCredentials:true})
        navigate('/')
    } catch (error) {
        console.log(error);
        
    }
    
}


    return (
        <div>
            <Navbar />

            <div className="single flex flex-col lg:flex-row gap-8 lg:gap-12 p-4 lg:p-12 max-w-7xl mx-auto">

                <div className="content flex-grow lg:w-3/4 flex flex-col gap-6">

                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-72 md:h-[300px] object-cover rounded-lg shadow-md"
                    />

                    <div className="user flex items-center gap-3 text-sm">
                        {post.userImg && (
                            <img
                                src={post.userImg}
                                alt={post.username}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        )}

                        <div className="info">
                            <span className="font-bold text-gray-800">{post.username}</span>
                            <p className="text-xs text-gray-500">Posted {moment(post.created_at).fromNow()}</p>
                        </div>
                        
                        {(currentUser.username == post.username) && (
                            <div className="edit flex gap-2 ml-auto text-teal-600">
                                <Link to={`/write?edit=2`} state={post}>
                                    <CiEdit className="w-6 h-6 cursor-pointer hover:text-teal-400 transition" />
                                </Link>
                                <MdDelete onClick={handleDelete} className="w-6 h-6 cursor-pointer hover:text-red-500 transition" />
                            </div>
                        )}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                        {post.title}
                    </h1>

                    <div className="text-justify leading-loose text-lg">
                        <p className='text-black font-semibold text-sm mb-2'>Description: <span className="text-gray-700 font-light text-sm tracking-tight" >{post.description}</span></p>
                        
                        <p className="mb-4 text-black">{getText(post.content)}</p>
                    </div>

                </div>

                <div className=" hidden lg:block lg:w-1/4  flex-col gap-6 pt-0 lg:pt-8">

                    <h1 className="text-xl font-bold text-gray-700 mb-4">Other posts you may like:</h1>

                    {posts.map((relatedPost) => (
                        
                        
                        relatedPost.id!=postId && relatedPost.cat==post.cat &&
                            (<div className="post flex flex-col gap-2 mb-6" key={relatedPost.id}>
                            <img
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-full h-40 object-cover rounded-lg"
                            />

                            <h2 className="text-sm font-semibold text-gray-800 leading-snug hover:text-teal-600 transition">
                                <Link to={`/post/${relatedPost.id}`}>{relatedPost.title}</Link>
                            </h2>

                            <button
                                className="w-full px-3 py-1 border border-teal-500 text-teal-500 text-xs cursor-pointer rounded hover:bg-teal-100 hover:text-black transition duration-300"
                                onClick={()=>{navigate(`/post/${relatedPost.id}`)}}
                            >
                                Read More
                            </button>
                        </div>)
                    ))
                    }
                </div>
            </div>

            <div className="lg:hidden w-full px-4 mb-8">
                <h1 className="text-xl font-bold text-gray-700 mb-4 pl-4 border-l-4 border-teal-500">More From Inkverse</h1>

                <div className="flex overflow-x-scroll gap-4 pb-4 -mx-4 px-4 snap-x">
                    {posts.map((relatedPost) => (
                        relatedPost.id!=postId && relatedPost.cat==post.cat &&(<div
                            className="post flex-shrink-0 w-64 snap-center bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden"
                            key={relatedPost.id}
                        >
                            <img
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-full h-32 object-cover"
                            />
                            <div className="p-3 flex flex-col gap-2">
                                <h2 className="text-base font-semibold text-gray-800 leading-tight hover:text-teal-600 transition">
                                    <Link to={`/post/${relatedPost.id}`}>{relatedPost.title}</Link>
                                </h2>
                                <button
                                    className=" mt-1 px-3 py-1 text-xs border border-teal-500 text-teal-500 cursor-pointer rounded
                                           hover:bg-teal-100 hover:text-black transition duration-300"
                                           onClick={()=>{navigate(`/post/${relatedPost.id}`)}}
                                >
                                    View Post
                                </button>
                            </div>
                        </div>)
                    ))}
                </div>
            </div> 

            <Footer />
        </div>
    );
};

export default Single;
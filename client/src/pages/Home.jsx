import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { serverUri } from '../App';


const Home = () => {

  const [posts,setPosts]=useState([])
  const navigate = useNavigate()
  const location = useLocation()
  const cat = location.search
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const res = await axios.get(`${serverUri}/api/posts${cat}`)
        setPosts(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData()
  },[cat])



  return (
    <>
      <Navbar />

      <div className="p-4 md:px-10 lg:px-20 overflow-hidden">

        <div className="flex flex-col mt-12 md:mt-[50px] gap-20 md:gap-[150px] mb-30">

          {posts.map((post, index) => (

            <div
              className={`flex flex-col gap-8 md:gap-24 lg:gap-[100px] 
                          ${(index % 2 === 0) ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              key={post.id}
            >

              <div className="img relative flex-2-basis-0 w-full h-[400px]">
                  {post.image && <div className={`hidden lg:block absolute h-full w-full bg-teal-200 top-7 ${(index % 2 === 0) ? 'right-7' : 'left-7'}`}>
                </div>}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full max-h-[400px] h-full object-contain bg-white relative  text-black"
                  />
                  
              </div>

              <div className="content flex flex-col justify-between flex-3-basis-0 w-full">
                <Link className="link no-underline text-inherit" to={`/post/${post.id}`}>
                  <h1 className="text-4xl text-black sm:text-5xl lg:text-[48px] font-bold mb-4">
                    {post.title}
                  </h1>
                <p className="text-lg text-black mb-6">{post.description}</p>

                <button className="w-max px-5 py-2.5 border border-teal-500 bg-white text-teal-500 cursor-pointer 
                                 hover:border-white hover:bg-teal-100 hover:text-black 
                                 transition duration-300 ease-in-out">
                  Read More
                </button>
                </Link>

              </div>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
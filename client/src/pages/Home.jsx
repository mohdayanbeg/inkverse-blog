import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { serverUri } from '../App';

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};

const Home = () => {

  const [posts,setPosts]=useState([])
  const location = useLocation()
  const cat = location.search
  useEffect(()=>{
    const fetchData=async ()=>{
      try {
        const res = await axios.get(`${serverUri}/api/posts${cat}`)
        console.log(res.data);
        setPosts(res.data)
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchData()
  },[cat])


  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 4,
  //     title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //     desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //     img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];

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
                    className="w-full max-h-[400px] h-full object-cover relative text-black"
                  />
                  
              </div>

              <div className="content flex flex-col justify-between flex-3-basis-0 w-full">
                <Link className="link no-underline text-inherit" to={`/post/${post.id}`}>
                  <h1 className="text-4xl text-black sm:text-5xl lg:text-[48px] font-bold mb-4">
                    {post.title}
                  </h1>
                </Link>

                <p className="text-lg text-black mb-6">{getText(post.description)}</p>

                <button className="w-max px-5 py-2.5 border border-teal-500 bg-white text-teal-500 cursor-pointer 
                                 hover:border-white hover:bg-teal-100 hover:text-black 
                                 transition duration-300 ease-in-out">
                  Read More
                </button>
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
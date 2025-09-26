import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
const Single = () => {
    const post = {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
    return (
        <div>
            <Navbar />
            

            <div className="single flex flex-col lg:flex-row gap-8 lg:gap-[50px] p-4 lg:p-12 max-w-7xl mx-auto">
      
      <div className="content flex-5-basis-0 flex flex-col gap-8 md:gap-8">
        
        <img 
          src={post?.img ? `../upload/${post.img}` : 'placeholder.jpg'} 
          alt={post?.title} 
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
            <p className="text-xs text-gray-500">Posted {/*{moment(post.date).fromNow()}*/}</p>
          </div>
          
            <div className="edit flex gap-1.5 ml-auto">
              <Link to={`/write?edit=2`} state={post}>
                <CiEdit className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
              </Link>
              <MdDelete className="w-5 h-5 cursor-pointer hover:opacity-80 transition"/>
              
            </div>
        </div>

        <h1 className="text-3xl md:text-[42px] font-extrabold text-gray-800 leading-tight">
          {post.title}
        </h1>
        
        <div className="text-justify leading-relaxed text-gray-700">
            <p className="mb-4">
                This is where the main body of the blog post would go.
            </p>
        </div>
        
      </div>
      
      <div className="menu flex-2-basis-0">
        {/* <Menu cat={post.cat}/> */}
      </div>
    </div>




            <Footer />
        </div>
    )
}

export default Single
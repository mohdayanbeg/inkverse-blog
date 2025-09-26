import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const getText = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent;
};

const Single = () => {
  // Mock Data (Data remains UNCHANGED as requested)
  const post = {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    userImg: "https://via.placeholder.com/150",
    username: "JaneDoe",
  };
  const currentUser = { username: "JaneDoe" }; 
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  const handleDelete = () => console.log('Delete clicked');


  return (
    <div>
      <Navbar />

      {/* --- MAIN PAGE CONTAINER --- */}
      <div className="single flex flex-col lg:flex-row gap-8 lg:gap-12 p-4 lg:p-12 max-w-7xl mx-auto">
      
        {/* --- 1. POST CONTENT AREA (~75% on large screens) --- */}
        <div className="content flex-grow lg:w-3/4 flex flex-col gap-6">
          
          {/* Featured Image */}
          <img 
            src={post.img} 
            alt={post.title} 
            className="w-full h-72 md:h-[300px] object-cover rounded-lg shadow-md" 
          />
          
          {/* User Info Block */}
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
            
            {/* Edit/Delete Icons (Pushed to the far right using ml-auto) */}
            {currentUser.username === post.username && (
              <div className="edit flex gap-2 ml-auto text-teal-600">
                <Link to={`/write?edit=2`} state={post}>
                  <CiEdit className="w-6 h-6 cursor-pointer hover:text-teal-400 transition" />
                </Link>
                <MdDelete onClick={handleDelete} className="w-6 h-6 cursor-pointer hover:text-red-500 transition"/>
              </div>
            )}
          </div>

          {/* Post Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            {post.title}
          </h1>
          
          {/* Post Body Content */}
          <div className="text-justify leading-loose text-lg text-gray-700">
              <p className="mb-4">{post.desc}</p>
              <p className="mb-4">This is where the main body of the blog post would go. We need to ensure the text is justified and line-height is comfortable for reading.</p>
          </div>
          
        </div>
        
        {/* --- 2. DESKTOP SIDEBAR MENU (Fixed width, ~25% on large screens) --- */}
        <div className="menu hidden lg:block lg:w-1/4 flex flex-col gap-6 pt-0 lg:pt-8">
            
            <h1 className="text-xl font-bold text-gray-700 mb-4">Other posts you may like:</h1>

            {posts.map((relatedPost) => (
                <div className="post flex flex-col gap-2 mb-6" key={relatedPost.id}>
                    <img 
                        src={relatedPost.img}
                        alt={relatedPost.title}
                        // Reduced image height for compact sidebar card
                        className="w-full h-24 object-cover rounded-lg" 
                    />
                    
                    <h2 className="text-sm font-semibold text-gray-800 leading-snug hover:text-teal-600 transition">
                        <Link to={`/post/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h2>

                    <button 
                        // Button remains w-full for clean alignment in the sidebar
                        className="w-full px-3 py-1 border border-teal-500 text-teal-500 text-xs cursor-pointer rounded
                                   hover:bg-teal-100 hover:text-black transition duration-300"
                    >
                        Read More
                    </button>
                </div>
            ))}
        </div>
      </div>
      
      {/* --- 3. MOBILE MENU CAROUSEL (Renders ONLY on small screens, outside the main container) --- */}
      <div className="lg:hidden w-full px-4 mb-8">
            <h1 className="text-xl font-bold text-gray-700 mb-4 pl-4 border-l-4 border-teal-500">More From Inkverse</h1>
            
            {/* Horizontal Scrollable Container */}
            <div className="flex overflow-x-scroll gap-4 pb-4 -mx-4 px-4 snap-x">
                {posts.map((relatedPost) => (
                    <div 
                        className="post flex-shrink-0 w-64 snap-center bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden" 
                        key={relatedPost.id}
                    >
                        <img 
                            src={relatedPost.img}
                            alt={relatedPost.title}
                            className="w-full h-32 object-cover"
                        />
                        <div className="p-3 flex flex-col gap-2">
                            <h2 className="text-base font-semibold text-gray-800 leading-tight hover:text-teal-600 transition">
                                <Link to={`/post/${relatedPost.id}`}>{relatedPost.title}</Link>
                            </h2>
                            <button 
                                className="w-full mt-1 px-3 py-1 text-xs border border-teal-500 text-teal-500 cursor-pointer rounded
                                           hover:bg-teal-100 hover:text-black transition duration-300"
                            >
                                View Post
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      <Footer />
    </div>
  );
};

export default Single;
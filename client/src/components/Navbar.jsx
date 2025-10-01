import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
const Navbar = () => {
  
  const {currentUser,logout}= useContext(AuthContext)

  return (
    <div className="flex items-center justify-between p-4 px-6 md:px-10 bg-white border-b border-gray-200 shadow-sm font-sans">
      <div className="flex items-center gap-3">
        
        <div className='relative flex items-center'>
          <div className='absolute w-20 h-12 rounded-full  top-1/2 bg-teal-200 left-1/2 rotate-160 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-70'></div> 
          <div className="relative z-10">
             <Link to="/" className="text-2xl font-script text-teal-700 font-bold">InkVerse</Link>
             <p className="text-xs text-gray-500 tracking-wide mt-[-2px]">WRITE & DISCOVER</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
        <div className="hidden md:flex items-center gap-5 uppercase text-xs tracking-wider">
          <Link to="/category/art" className="hover:text-teal-600 transition-colors">Art</Link>
          <Link to="/category/science" className="hover:text-teal-600 transition-colors">Science</Link>
          <Link to="/category/technology" className="hover:text-teal-600 transition-colors">Technology</Link>
          <Link to="/category/cinema" className="hover:text-teal-600 transition-colors">Cinema</Link>
          <Link to="/category/design" className="hover:text-teal-600 transition-colors">Design</Link>
          <Link to="/category/food" className="hover:text-teal-600 transition-colors">Food</Link>
        </div>
        <div className="flex items-center gap-4">
          
              <span className="font-bold text-teal-700 hidden sm:block">{currentUser?.username}</span>
              {currentUser ? (
            <span className="font-semibold cursor-pointer" onClick={logout}>Logout</span>
          ) : (
            <Link className="font-semibold" to="/login">
              Login
            </Link>
          )}

              <Link to="/write" className="w-13 h-13 rounded-full bg-teal-200 flex items-center justify-center text-sm font-semibold text-teal-800 hover:bg-transparent border-2 border-teal-200 transition-colors cursor-pointer hover:font-medium">
                Write
              </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
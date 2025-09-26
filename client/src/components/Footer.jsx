import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=" w-full mt-20 flex flex-col md:flex-row items-start md:items-center 
                  justify-start md:justify-between 
                  py-6 px-6 md:px-10 
                  bg-teal-200 border-t border-gray-200 
                  shadow-[0_-5px_10px_-5px_rgba(0,0,0,0.3)] font-sans"> 

      <div className="flex items-center gap-3">
        <div className='relative flex items-center'>
          <div className='absolute w-20 h-12 rounded-full top-1/2 bg-white left-1/2 rotate-160 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-70'></div>
          <div className="relative z-10">
            <Link to="/" className="text-2xl font-script text-teal-700 font-bold">InkVerse</Link>
            <p className="text-xs text-gray-500 tracking-wide mt-[-2px]">WRITE & DISCOVER</p>
          </div>
        </div>
      </div>
      <div className='max-w-lg mt-6 md:mt-0'> 
        <p className='text-gray-700 text-sm italic'>
            Inkverse is a curated space exploring the craft of modern web development, design systems, and software architecture. Read, learn, and create.
        </p>
      </div>

    </div>
  )
}

export default Footer
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Login Attempt:");
        console.log("Email:", mail);
        console.log("Password:", password);
        
    }

    return (
        <div className="hero min-h-screen bg-green-100 w-screen">
            <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center w-[90%] max-w-5xl py-8 lg:py-12 gap-8 lg:gap-10">
                
                <div className="text-center flex flex-col justify-center items-center lg:w-1/2 text-teal-700 p-4">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-3 sm:mb-4">Welcome Back!</h1>
                    <p className="lg:w-full text-base sm:text-lg max-w-md lg:max-w-none">
                        Welcome to the Community! Whether you're here to share your latest insights or discover new ideas, log in to personalize your experience.
                    </p>
                </div>
                <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl text-black">
                    
                    <form onSubmit={handleSubmit} className="card-body p-8 sm:p-10 space-y-4">
                        <label className="form-control w-full">
                            <input 
                                value={mail} 
                                type="email" 
                                className="input bg-transparent border-b-2 border-b-black w-full focus:outline-none focus:border-teal-500" 
                                placeholder="Email" 
                                onChange={(e) => setMail(e.target.value)}
                                required 
                            />
                        </label>
                        <div className='relative w-full'>
                            <input 
                                value={password} 
                                type={showPassword ? "text" : "password"}
                                className="input bg-transparent border-b-2 border-b-black w-full pr-10 focus:outline-none focus:border-teal-500" 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <span 
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-teal-600' 
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </span>
                        </div>
                        
                        <div className='flex justify-end pt-1'>
                            <a href="/forgot-password" className="link link-hover text-sm text-teal-600 hover:text-teal-700">
                                Forgot password?
                            </a>
                        </div>
                        <button type="submit" className="btn bg-teal-600 text-white hover:bg-teal-700 w-full mt-4 py-3 rounded-lg font-semibold transition-colors">
                            Log In
                        </button>
                        <p className='self-center text-center pt-4 text-sm'>
                            Don't have an account? 
                            <span 
                                className='text-cyan-600 font-semibold cursor-pointer hover:underline ml-1' 
                                onClick={() => navigate('/register')} 
                            >
                                Signup
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
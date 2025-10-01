import axios from 'axios';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { serverUri } from '../App';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState(null)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${serverUri}/api/auth/login`, { username, password }, { withCredentials: true })


            setUsername('')
            setPassword('')


        } catch (error) {
            console.log(error);
            setErr(error.response.data.message)
            setUsername('')
            setPassword('')

        }

    }

    return (
        <div className="hero min-h-screen bg-green-200 w-screen">
            <div className=" hero-content flex-col lg:flex-row-reverse justify-center items-center w-[90%] max-w-5xl py-8 lg:py-12 gap-8 lg:gap-10">

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
                                value={username}
                                type="text"
                                className="input bg-transparent border-b-2 border-b-black w-full focus:outline-none focus:border-teal-500"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </label>
                        <div className='relative w-full'>
                            <span
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-gray-500 hover:text-teal-600'
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </span>
                            <input
                                value={password}
                                type={showPassword ? "text" : "password"}
                                className="input bg-transparent border-b-2 border-b-black w-full pr-10 focus:outline-none focus:border-teal-500"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className='flex justify-end pt-1'>
                            <a href="/forgot-password" className="link link-hover text-sm text-teal-600 hover:text-teal-700">
                                Forgot password?
                            </a>
                        </div>
                        <button type="submit" className="btn bg-teal-600 text-white hover:bg-teal-700 w-full mt-4 py-3 rounded-lg font-semibold transition-colors">
                            Log In
                        </button>

                        {err && <p className={`self-center text-center pt-4 font-semibold text-red-500`}>
                            {err}
                        </p>}

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
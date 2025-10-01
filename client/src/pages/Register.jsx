import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { serverUri } from '../App';

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [err,setErr]=useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${serverUri}/api/auth/register`,{username,email,password},{withCredentials:true})

            setUsername('')
            setEmail('')
            setPassword('')

            
        } catch (error) {
            setErr(error.response.data.message)
            
            setUsername('')
            setEmail('')
            setPassword('')
            
        }
        
    }

    return (
        <div className="hero min-h-screen bg-green-200 w-screen">
            <div className="hero-content flex-col justify-center items-center w-[90%] max-w-4xl gap-10">
                
                
                <div className="text-center text-teal-700">
                    <h1 className="text-5xl font-bold">Join the Community!</h1>
                    <p className='mt-4 max-w-md text-lg text-teal-800/80'>
                        Unlock the full potential of our platform. Sign up to save your favorite articles, track authors, and publish your own work.
                    </p>
                </div>
                
              
                <div className="card w-full max-w-md bg-white shadow-2xl text-black p-8 sm:p-10">
                    
                 
                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                        <input 
                            value={username} 
                            type="text" 
                            className="input bg-transparent border-b-2 border-b-black w-full focus:outline-none focus:border-teal-500" 
                            placeholder="Username" 
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                        />
                        
                        <input 
                            value={email} 
                            type="email" 
                            className="input bg-transparent border-b-2 border-b-black w-full focus:outline-none focus:border-teal-500" 
                            placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />

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
                                className='absolute right-3 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-gray-500 hover:text-teal-600' 
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </span>
                        </div>
                        
                        <button type="submit" className="btn bg-teal-600 text-white hover:bg-teal-700 w-full mt-4 py-3 rounded-lg font-semibold transition-colors" >
                            Sign Up
                        </button>
                    </form>

                    {err && <p className={`self-center text-center pt-4 font-semibold text-red-500`}>
                        {err}
                    </p>}
                    

                    <p className='self-center text-center pt-4 text-sm'>
                        Already have an account? 
                        <span 
                            className='text-teal-600 font-semibold cursor-pointer hover:underline ml-1' 
                            onClick={() => navigate('/login')} 
                        >
                            Log In
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
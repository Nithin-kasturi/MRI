import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { TypeAnimation } from 'react-type-animation';
import { useLogin } from '../../hooks/useLogin';
export const Login = () => {
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const {login,loading}=useLogin();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!userName || !password){
            toast.error("All fields are required");
            return;
        }
        await login(userName,password);
    }
  return (
    
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='flex items-center justify-center font-semibold text-blue-400'>
                <TypeAnimation
                sequence={[
                    "Brain tumor Detector.",
                    1000,
                    'We provide accurate results.',
                    1000,  
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
                />
            </div>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            
                
            <h1 className='text-3xl font-semibold text-center'>Login-
                <span className='text-blue-500'>ADMIN</span>
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>User Name</span>
                    </label>
                    <input type='text' placeholder='Enter Username' 
                    value={userName}
                    onChange={(e)=>setUserName(e.target.value)}
                    className='w-full input input-bordered h-10'/>
                </div>
                <div>   
                    <label className='label p-2'>
                        <span className='text-base label-text'>Password</span>
                    </label>
                    <input type='password' placeholder='Enter Password' 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className='w-full input input-bordered h-10'/>
                </div>
                <div className='mt-4'>
                    <button className="btn btn-neutral btn-sm mt-2 w-full hover:bg-white hover:text-black">
                        {loading?<span className='loading loading-spinner'></span>:"Login"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

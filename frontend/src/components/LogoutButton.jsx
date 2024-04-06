import React from 'react'
import { useAuthContext } from '../context/AuthContext';

export const LogoutButton = () => {
    const {setAuthUser}=useAuthContext();
    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem("admin");
        setAuthUser(null);
    }
  return (
    <div className='mt-6 w-full'>
        <button 
        onClick={handleLogout}
        className='w-full bg-white text-red-500 p-4 text-xl rounded-full hover:bg-red-300 hover:text-white
        font-bold font-serif'>Logout</button>
    </div>
  )
}

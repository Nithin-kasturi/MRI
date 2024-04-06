import React from 'react'
import brain from './brain.jpg';
import {useNavigate} from 'react-router-dom'
export const GenerateReport = () => {
    const navigate=useNavigate();
    const handleGenerateReport=(e)=>{
        e.preventDefault();
        navigate('/generate');
    }
  return (
    <div className='flex flex-col'>
        <img src={brain} alt='Brain' className='rounded-3xl'/>
        <button className='mt-6 bg-black text-white p-4 text-xl rounded-full hover:bg-white hover:text-black font-bold font-serif'
        onClick={handleGenerateReport}
        >Generate Report</button>
    </div>
  )
}

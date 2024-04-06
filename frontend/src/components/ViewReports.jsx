import React from 'react'
import report from './report.jpg';
import {useNavigate} from 'react-router-dom'
export const ViewReports = () => {
  const navigate=useNavigate();
  const handlleViewReport=(e)=>{
        e.preventDefault();
        navigate('/view');
  }
  return (
    <div className='flex flex-col'>
        <img src={report} alt='Report' className='rounded-3xl'/>
        <button 
        onClick={handlleViewReport}
        className='mt-6 bg-black text-white p-4 text-xl rounded-full hover:bg-white hover:text-black font-bold font-serif'>View Reports</button>
    </div>
  )
}

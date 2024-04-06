import React from 'react'
import report from './report.jpg';
export const ViewReports = () => {
  return (
    <div className='flex flex-col'>
        <img src={report} alt='Report' className='rounded-3xl'/>
        <button className='mt-6 bg-black text-white p-4 text-xl rounded-full hover:bg-white hover:text-black font-bold font-serif'>View Reports</button>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useGetReports } from '../../hooks/useGetReports';

export const View = () => {
    const [records,setRecords]=useState([]);
    const fetchRecords=async()=>{
        const res=await fetch('/api/users/fetch',{
            method:"GET",
            headers:{"Content-Type":"application/json"},
        });
        const data=await res.json();
        setRecords(data.records);
    }
    useEffect(()=>{
        fetchRecords();
    },[])
  return (
    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Age
                </th>
                <th scope="col" class="px-6 py-3">
                    Gender
                </th>
                <th scope="col" class="px-6 py-3">
                    Tumor Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Time
                </th>
            </tr>
        </thead>
        <tbody>
        {
                records && records.map((record,index)=>(
                    <>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       {record.name}
                    </th>
                    <td class="px-6 py-4">
                        {record.age}
                    </td>
                    <td class="px-6 py-4">
                        {record.gender}
                    </td>
                    <td class="px-6 py-4">
                        {record.predictedClass}
                    </td>
                    <td class="px-6 py-4">
                        {record.createdAt}
                    </td>
                </tr>
                </>
                ))
            }
           
        </tbody>
    </table>
</div>

  )
}

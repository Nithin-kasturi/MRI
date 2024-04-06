import { useState } from "react";

export const useGetReports=()=>{
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);
    const getReports=async()=>{
        try {
            setLoading(true);
            const res=await fetch('/api/users/fetch',{
                method:"GET",
                headers:{"Content-Type":"application/json"},
            });
            const data=await res.json();
            console.log(data.records);
            setData(data.records);
        } catch (error) {
            toast.error(error);
        }
        finally{
            setLoading(false);
        }
        return data;
    }
    return {loading,getReports}
}
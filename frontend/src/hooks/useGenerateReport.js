import { useState } from "react"
import toast from 'react-hot-toast'
export const useGenerateReport=()=>{
    const [loading,setLoading]=useState(false);
    const sendReport=async({name,age,gender,image,showImage,predictedClass})=>{
        try {
            if(!handleInputErrors({name,age,gender,showImage,predictedClass})){
                return;
            }
            const res=await fetch('/api/users/insert',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({name,age,gender,showImage,predictedClass})
            })
            const data=await res.json();
            alert(data.message);
            window.location.reload();
        } 
        catch (error) {
            toast.error(error);
        }
        finally{
            setLoading(false);
        }
        
}
return {loading,sendReport}    

    
}
const handleInputErrors=({name,age,gender,showImage,predictedClass})=>{
    if(!name || !age || !gender || !showImage || !predictedClass){
        toast.error("All fields are required");
        return false;
    }
    return true;
}
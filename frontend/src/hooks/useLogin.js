import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from "../context/AuthContext";
export const useLogin=()=>{
    const [loading,setLoading]=useState(false);
    const {setAuthUser}=useAuthContext();
    const login=async(username,password)=>{
        try {
            setLoading(true);
            if(username=="Jayanth" && password=="Jayanth"){
                localStorage.setItem("admin",JSON.stringify(username));
                setAuthUser(username);
            }
            else{
                toast.error("Invalid username or password");
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
        finally{
            setLoading(false);
        }
        
    }
    return {login,loading};
}
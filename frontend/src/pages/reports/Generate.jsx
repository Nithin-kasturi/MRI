import React, { useState } from 'react'
import {TypeAnimation} from 'react-type-animation'
import  axios from 'axios';
import toast from 'react-hot-toast';
import { useGenerateReport } from '../../hooks/useGenerateReport';

export const Generate = () => {
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [gender,setGender]=useState("");
  const [image,setImage]=useState(null);
  const [showImage,setShowImage]=useState(null);
  const [predictedClass,setPredictedClass]=useState("");
  const {loading,sendReport}=useGenerateReport();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    await sendReport({name,age,gender,showImage,predictedClass});
  }
  const handleImage=(e)=>{
    e.preventDefault();
    setImage(e.target.files[0]);
    setShowImage(URL.createObjectURL(e.target.files[0]));
  }
  const handlePredict=async(e)=>{
    e.preventDefault();
    console.log("Image link is here",image);
    const formData = new FormData();
    formData.append('image', image);
    try {
      const res=await axios.post('http://localhost:5000/predict',formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setPredictedClass(res.data.predictedClass);
    } catch (error) {
      console.log("Error at Generat.jsx",error);
      toast.error({error:"Internal error"});
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-bold'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <div className='flex items-center justify-center text-black'>
          {
            predictedClass ? 
            <h1 className='text-2xl font-bold text-black'>Tumor Status : <span className='text-red-700'>{predictedClass}</span></h1>
            :(
              <TypeAnimation
                sequence={[
                    "Report Generator.",
                    1000,
                    'Fill below details.',
                    1000,  
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
                />
            )
          }
          
          </div>
          <div>
          <form onSubmit={handleSubmit}>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Name</span>
                    </label>
                    <input type='text' placeholder='Enter Name' 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className='w-full input input-bordered h-10'/>
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text'>Age</span>
                    </label>
                    <input type='number' placeholder='Enter Age' 
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    className='w-full input input-bordered h-10'/>
                </div>
                <div>   
                    <label className='label p-2'>
                        <span className='text-base label-text'>Gender</span>
                    </label>
                    <div className='flex justify-between'>
                        <div >
                            <input type='radio' name='gender' value='Male' 
                            onChange={e=>setGender(e.target.value)}/> Male
                        </div>
                        <div>
                          <input type='radio' name='gender' value='Female' onChange={e=>setGender(e.target.value)}/> Female
                        </div>
                    </div>
                    <div>
                      <label className='label p-2'>
                          <span className='text-base label-text'>Upload image</span>
                      </label>
                      <input type='file'
                      onChange={handleImage}
                      />
                    </div>
                    
                  {
                    image && (<div className='mt-4 flex items-center justify-center'>
                        <img src={showImage} className='w-[225px] h-[225px] rounded-2xl'/>
                    </div>)
                  }
                </div>
                <div className='mt-5'>
                  <button 
                  onClick={handlePredict}
                  className='p-3 rounded-xl w-full text-white bg-black hover:bg-white hover:text-black'>Predict</button>
                </div>
                <div className='mt-5'>
                  <button type='submit' className='p-3 rounded-xl w-full text-white bg-black hover:bg-white hover:text-black'>Upload to Database</button>
                </div>
                
            </form>
          </div>
      </div>
    </div>
  )
}

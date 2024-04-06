import React, { useState } from 'react'
import {TypeAnimation} from 'react-type-animation'
export const Generate = () => {
  const [name,setName]=useState("");
  const [age,setAge]=useState(0);
  const [gender,setGender]=useState("");
  const [image,setImage]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
    console.log(image);
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto font-bold'>
      <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <div className='flex items-center justify-center'>
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
                      onChange={e=>setImage(URL.createObjectURL(e.target.files[0]))}
                      />
                    </div>
                    
                  {
                    image && (<div className='mt-4'>
                        <img src={image} className='w-full h-[250px] rounded-2xl'/>
                    </div>)
                  }
                </div>
                <div className='mt-5'>
                  <button className='p-3 rounded-xl w-full text-white bg-black hover:bg-white hover:text-black'>Predict</button>
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

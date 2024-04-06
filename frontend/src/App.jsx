import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route,Navigate} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Generate } from './pages/reports/Generate'
import { View } from './pages/reports/View'
function App() {
  const {authUser}=useAuthContext();
  return(
    <div className='h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={authUser? <Home/> :<Navigate to={'/login'}/>}/>
        <Route path='/login' element={authUser? <Navigate to={'/'}/>:<Login/>}/>
        <Route path='/generate' element={<Generate/>} />
        <Route path='/view' element={<View/>}/>
      </Routes>
      <Toaster/>
    </div>
    )
}

export default App

import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Single from './pages/Single'
import Write from './pages/Write'
import Error from './pages/Error'
import { AuthContext } from './context/authContext'

export const serverUri="http://localhost:8000"

const App = () => {
  const {currentUser}=useContext(AuthContext)
  
  return (
<>
    <Routes>
      <Route path='/' element={currentUser?<Home/>:<Login/>} />
      <Route path='/home' element={currentUser?<Home/>:<Login/>} />
      <Route path='/login' element={currentUser?<Login/>:<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/post/:id' element={currentUser?<Single/>:<Login/>} />
      <Route path='/write' element={currentUser?<Write/>:<Login/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
</>
  )
}

export default App
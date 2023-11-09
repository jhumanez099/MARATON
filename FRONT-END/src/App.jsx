import React from 'react'
import Admin from './Pages/Admin/Admin'
import Users from "./Pages/Users/Users"
import Login from "./Pages/Auth_Login/Login"
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/Admin/' element={<Admin/>}/>
          <Route path='/Users/' element={<Users/>}/>
          <Route path='/Login/' element={<Login/>}/>
          
        </Routes>
        
        </BrowserRouter>

  )
}

export default App

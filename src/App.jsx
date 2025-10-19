import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import JobApply from './components/JobApply/JobApply'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/JobApply' element={<JobApply/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

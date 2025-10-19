import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Signup = () => {
    const[name,setName] = useState()
    const[email,setEmail] = useState()
    const[password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Signin',{name, email, password })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    
    <div className='container'>
        <div className="header">
            <h2>Signup Form</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="inputs">
            <div className="input">
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
                <input type="email" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input">
                <input type="confirmpassword" placeholder='Confirm Password' />
            </div>
            
        </div>
        <div className="forget-password">
            <a href="#">Forget Password?</a>
        </div>
        <div className="submit-container">
            <div className="submit">
                <Link to='/Login'><button>Signup</button></Link>
            </div>
            <p>Already have a account <Link to="/Login">Login</Link></p>
        </div>
        </form>
      
    </div>

  )
}

export default Signup

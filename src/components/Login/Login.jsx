import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/Login',{ email, password })
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    
    <div className='container'>
        <div className="header">
            <h2>Login Form</h2>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="inputs">
            <div className="input">
                <input type="email" placeholder='Email Id' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input">
                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
        <div className="forget-password">
            <a href="#">Forget Password?</a>
        </div>
        <div className="submit-container">
            <div className="submit">
                <Link to='/'><button>Login</button></Link>
            </div>
            <p>Doesn't have a account <Link to="/Signup">Signup</Link></p>
        </div>
</form>
    </div>
  )
}

export default Login

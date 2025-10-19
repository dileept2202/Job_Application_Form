import React from 'react';
import './JobApply.css';

const JobApply = () => {
    const[name,setName] = useState()
    const[dob,setDob] = useState()
    const[number,setNumber] = useState()
    const[email,setEmail] = useState()
    const[address,setAddress] = useState()
    const[city,setCity] = useState()
    const[addi,setAddi] = useState()
    const[resume,setResume] = useState()



    return (
    <div className='conta'>
            <div className="header">
                <h2>Job Application Form</h2>
            </div>
            <div className="inputs">
            <div className="input">
                <h5>Full Name:</h5>
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input">
                <h5>Date Of Birth:</h5>
                <input type="date" placeholder='Date of Birth' onChange={(e) => setDob(e.target.value)} />
            </div>
            <div className="input">
                <h5>Mobile Number:</h5>
                <input type="number" placeholder='Mobile Number' onChange={(e) => setNumber(e.target.values)} />
            </div>
            <div className="input">
                <h5>Email Id:</h5>
                <input type="email" placeholder='Email Id' onChange={(e) => setEmail(e.target.values)} />
            </div>
            <div className="input">
                <h5>Address:</h5>
                <input type="address" placeholder='Address' onChange={(e) => setAddress(e.target.values)} />
            </div>
            <div className="input">
                <h5>City:</h5>
                <input type="location" placeholder='City' onChange={(e) => setCity(e.target.values)}/>
            </div>
            <div className="input">
                <h5>Additional Information (if any):</h5>
                <input type="text" classname="Add" placeholder='Additional Information' onChange={(e) => setAddi(e.target.values)} />
            </div>
            <div className="input">
                <h5>Upload your Resume:</h5>
                <input type="file" placeholder='Resume' onChange = {(e) => setResume(e.target.value)} />
            </div>
        </div>
        
    </div>
  )
}

export default JobApply

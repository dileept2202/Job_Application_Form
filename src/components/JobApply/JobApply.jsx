import React from 'react';
import './JobApply.css';

const JobApply = () => {
  return (
    <div className='conta'>
            <div className="header">
                <h2>Job Application Form</h2>
            </div>
            <div className="inputs">
            <div className="input">
                <h5>Full Name:</h5>
                <input type="text" placeholder='Name' />
            </div>
            <div className="input">
                <h5>Date Of Birth:</h5>
                <input type="date" placeholder='Date of Birth' />
            </div>
            <div className="input">
                <h5>Mobile Number:</h5>
                <input type="number" placeholder='Mobile Number' />
            </div>
            <div className="input">
                <h5>Email Id:</h5>
                <input type="email" placeholder='Email Id' />
            </div>
            <div className="input">
                <h5>Address:</h5>
                <input type="address" placeholder='Address' />
            </div>
            <div className="input">
                <h5>City:</h5>
                <input type="location" placeholder='City' />
            </div>
            <div className="input">
                <h5>Additional Information (if any):</h5>
                <input type="text" classname="Add" placeholder='Additional Information' />
            </div>
            <div className="input">
                <h5>Upload your Resume:</h5>
                <input type="file" placeholder='Resume' />
            </div>
        </div>
        
    </div>
  )
}

export default JobApply

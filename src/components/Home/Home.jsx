import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import carosal1 from '../../assets/carosal1.png';
import carosal2 from '../../assets/carosal2.jpg';
import carosal3 from '../../assets/carosal3.jpg';

const Home = () => {

  
  return (
    <div className='nav'>
      <div className="navbar">
        <h2 className='title'>Jobly</h2>
        <div className="nav-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <Link to='/Login'><FaUser className='loginicon' /></Link>
        </div>
      </div>

      <div className="caros">
        <Carousel controls={false} data-interval="3000" indicators={false} fade >
          <Carousel.Item>
            <img src={carosal1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carosal2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={carosal3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        <div className="carousel-overlay">
          <h1>Find Your Dream Job with Jobly</h1>
          <Link to="/JobApply" className="apply-btn">Apply Now</Link>
        </div>
      </div>

      <div className="aboutus" id="about">
        <h2>About Us</h2>
        <p>
          <strong>Jobly</strong> is an innovative job-matching and recruitment platform founded by <strong>Dileep T</strong>, 
          who serves as the Founder and CEO. The vision behind Jobly is to bridge the gap between skilled job seekers and 
          forward-thinking employers through technology-driven solutions and a user-friendly experience.
        </p>
        <p>
          Under Dileep’s leadership, Jobly was created with a mission to redefine the way people discover career opportunities. 
          The platform focuses on transparency, accessibility, and personalized recommendations, helping candidates find the right 
          jobs that align with their skills, goals, and passions — while empowering companies to discover top talent efficiently.
        </p>
        <p>
          What sets Jobly apart is its commitment to innovation and trust. The platform integrates AI-based job recommendations, 
          real-time communication, and smart analytics to ensure both employers and employees get the most out of their hiring journey.
        </p>
        <p>
          Driven by Dileep’s passion for technology and people, Jobly continues to evolve into a next-generation career ecosystem — 
          where finding a job isn’t just about applying, but about belonging.
        </p>
      </div>

      <footer id="contact" className="footer">
        <h3>Contact Us</h3>
        <p>Email: <a href="mailto:support@jobly.com">support@jobly.com</a></p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Madurai, Tamil Nadu, India</p>
        <p className="copyright">© 2025 Jobly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;

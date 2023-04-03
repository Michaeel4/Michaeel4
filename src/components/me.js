import './me.css';




import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from './lenort1.jpg';
const Me = ({ setActiveLink }) => {
    
    return (

        <div className="me">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hi, i am Michael Lenort</h1>

        <h1>I currently study Computer Science at the University of Salzburg</h1>
        <br></br>
        <br></br>

        <br></br>

        <h2>I love everything about IT related topics. My personal biggest interests are embedded systems
        ,backend and frontend development, compilers, operating systems as well as software engineering.
        I love to solve problems and work on a proper solution. 

        I like to be outside and do sports and enjoy traveling.

        My main programming languages are JavaScript, C++, C, Java and Python</h2>

        <br></br>
        <br></br>
        <br></br>

        <h1><a href="#" onClick={() => setActiveLink("Contact")}>Contact Me | </a><a href="#" onClick={() => setActiveLink("Projects")}>Projects</a></h1>
        <h1></h1>

        

       

     
        </div>
        
    );
  }




  export default Me;
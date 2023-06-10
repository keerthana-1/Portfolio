import React from 'react';
import './App.css';
import dp from './images/dp1.jpeg';
import git from './images/github.png';
import linkedin from './images/linkedin.png';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <div className="Header">
            <img src={dp}></img>
            <h2>Lakshmi Keerthana Aravapalli</h2>
            <p>keerthanalakshmi01@gmail.com</p>
            <br/>
            <nav>
                <ul type='none'>
                    <li><a href="#">Introduction</a></li>
                    <br/>
                    <li><a href="#">About</a></li><br/>
                    <li><a href="#">Skills</a></li><br/>
                    <li><a href="#">Timeline</a></li><br/>
                    <li><a href="https://drive.google.com/file/d/1Udcj_UTptN6GZMY7lIwM6fYVBersJm5b/view">CV</a></li><br/>
                    <li><Link to="./Contact">Contact</Link></li>

                </ul>
            </nav>
            <br/>
            <br/>
            <span>
                <a href="https://www.linkedin.com/in/lakshmi-keerthana-aravapalli"><img id="linkedin" src={linkedin}></img></a>
                <a href="https://github.com/keerthana-1"><img id="git" src={git}></img></a>
                
            </span>
        </div>
    )
}

export default Header;
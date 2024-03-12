import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    
    return(
        <NavBar expand="lg">
            <Container>
                <NavBar.Brand href="#home">
                    <img src={''} alt="logo"></img>    
                </NavBar.Brand> 
                <NavBar.Toggle aria-controls="basic-navbar-nav">
                  <span class="navbar-toggle-icon"></span>  
                </NavBar.Toggle>
                <NavBar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>  
                        <Nav.Link href="#skills">Skills</Nav.Link> 
                        <Nav.Link href="#projects">Projects</Nav.Link>   
                    </Nav>    
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={} alt=""></img></a>
                            <a href="#"><img src={} alt=""></img></a>
                            <a href="#"><img src={} alt=""></img></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </NavBar.Collapse>   
            </Container>    
        </NavBar>
    )
}
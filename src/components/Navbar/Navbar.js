import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { Navbar, Container,Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import MHP from '../../Pages/MHP';

const Navbars = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  useEffect(() => {
    // Check if token is found in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "You will be logged out",
      icon: "warning",
      buttons: ["Cancel", "Logout"],
      dangerMode: true,
    }).then((willLogout) => {
      if (willLogout) {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        swal("Logged out!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <Navbar expand="lg">
        <Container className="main-container">
          <Navbar.Brand href="#home">
          <img className="logo" src={'https://imagizer.imageshack.com/img924/1631/IxfKHq.png'} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="Basic-Navbar">
            <Nav className="Nav-links">
              <NavLink to="/home" className="active">Home</NavLink>
              <NavLink to="/team">Team</NavLink>
              <NavLink href="http://localhost:8000/blogs/all-blogs/">Blog</NavLink>
              <NavLink to="/contact">Contact us</NavLink>
              <NavLink to="/explore">Explore</NavLink>
              <NavLink href="#blog" id="search-icon">Search <FontAwesomeIcon id="s-icon" icon={faSearch} /></NavLink> 
            </Nav>
            <div className="Nav-btn">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>  
              ) : (
                <button id="Sign-up-btn"><Link to="/Login">Sign Up</Link></button>
                
                )}
                <button id="book-Now" onClick={MHP}>Book Now!</button>
                </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
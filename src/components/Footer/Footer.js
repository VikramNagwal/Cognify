import { faPhone, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Footer.css' ;

const Footer=()=>{
    return(
<footer>
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6 footer-above">
<img className="fimg1" src={'https://imagizer.imageshack.com/img922/3074/SDIR6K.png'} />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, accusamus.</p>
<div className="footer-contact">
    <div className="footer-icon">
<FontAwesomeIcon icon={faPhone}/>
        </div> 
        <div className="footer-text">
            <h6>Contact Us</h6>
            <h4>+01 23456-78901</h4>
        </div>
</div>
            </div>
            <div className="col-md-3 col-sm-6">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Services</a></li>
                    
                    
                </ul>
            </div>
            <div className="col-md-3 col-sm-6">
            <h2>Our Services</h2>
                <ul>
                    <li><a href="#">ChatBot</a></li>
                    <li><a href="#">Personalized Journal</a></li>
                    <li><a href="#">Note to yourself</a></li>
                    <li><a href="#">Meditation</a></li>
                    <li><a href="#">Booking</a></li>
                    <li><a href="#">Resources</a></li>
                    </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h2>Subscribe</h2> 
              <form>
                <input type="email" placeholder="Enter Email" />
                <button type="submit">Subscribe Now</button>
                </form> 
                <ul>
                    <ul className="social">
                        <li><a href="#"><img src="" /></a></li>
                        <li><a href="#"><img src="" /></a></li>
                        <li><a href="#"><img src="" /></a></li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
 
    <div className="footer-bottom">
        <div className="container">
            <div className="col-lg-12 col-md-12">
                <span>Copyright @ 2023 Designed & Developed with ❤️ by Vishesh Rawal</span>
            </div>
        </div>

    </div>
</footer>
    )
}

export default Footer;
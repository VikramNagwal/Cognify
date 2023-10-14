
import React from "react";
import Banner from "../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faHeart, faMap, faMobile } from "@fortawesome/free-solid-svg-icons";
import FormContact from "./FormContact";
import "./Contact.css";



const Contact =()=>{
  return (
    
    <>
      <Banner title="Contact" smtitle="contact" />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <FormContact/>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                    <h3>Contact us For any information</h3>
                    <li><FontAwesomeIcon icon={faMap}/>Location</li>
                    
                    {/* <hr/> */}
                    <p className="form p">Address</p>
                    <li><FontAwesomeIcon icon={faEnvelope}/>Email & Phone</li>
                    {/* <hr/> */}
                    <p className="form p">admin@Cognify.org</p>
                    <p className="form p">+91 9041315111</p>
                    <li><FontAwesomeIcon icon={faGlobe}/>Follow Us</li>
                    {/* <hr/> */}
                    <ul>
                        <li><FontAwesomeIcon icon={faHeart}/></li>
                        <li><FontAwesomeIcon icon={faGlobe}/></li>
                        <li><FontAwesomeIcon icon={faMobile}/></li>
                    </ul>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;

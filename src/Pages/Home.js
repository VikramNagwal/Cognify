import React from "react";
import "./Home.css";
import ControlledCarousel from "../components/AboutUsCarousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quo, accusamus.
              </h5>
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quo, accusamus.
              </h2>
              <button>
                <a href="#aboutus">Read More</a>
              </button>
              <span>+</span>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="header-box">
                <img
                  className="himg1"
                  src={"https://imagizer.imageshack.com/img924/1007/9IT0Qs.png"}
                />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="aboutus">
        <ControlledCarousel />
      </section>
    </>
  );
};

export default Home;

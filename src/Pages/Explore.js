import React from "react";
import {useNavigate} from 'react-router-dom';
import './Explore.css';
import { Link } from 'react-router-dom';

const Explore = () => {
    const navigate = useNavigate();
    const ChatbotPage=()=>{
  
      navigate('/ChatBotPage');
    }
    const JournelPage=()=>{
  
      navigate('/JournelPage');
    }
    const CoursesPage=()=>{
  
      navigate('/CoursesPage');
    }
    const MeditationPage=()=>{
  
      navigate('/MeditationPage');
    }
    

    return (


        <div className="explore">

            <h1 className="header-exp">Feature</h1>
            <div className="container-exp">
                <a >
                    <div className="card-exp" onClick={ChatbotPage}>
                        <div className="imgBox">
                            <img src="https://imagizer.imageshack.com/img923/4313/m7QhEw.png" alt="expanding card image" />
                        </div>
                        <div className="content">
                            <h2>ChatBot</h2>
                            {/* <p>This is Feature 1 description</p> */}
                        </div>
                    </div>
                </a>

                <a >
                    <div className="card-exp" onClick={JournelPage}>
                        <div className="imgBox">
                            <img src="https://imagizer.imageshack.com/img922/6818/RfDsTb.png" alt="expanding card image" />
                        </div>
                        <div className="content">
                            <h2>Journal</h2>
                            {/* <p>This is Feature 2 description</p> */}
                        </div>
                    </div>
                </a>

                <a >
                    <div className="card-exp" onClick={CoursesPage}>
                        <div className="imgBox">
                            <img src="https://imagizer.imageshack.com/img922/516/1I5eEI.jpg" alt="form Label Input Image" />
                        </div>
                        <div class="content">
                            <h2>Courses</h2>
                            {/* <p>This is Feature 3 description</p> */}
                        </div>
                    </div>
                </a>

                <a >
                    <div className="card-exp" onClick={MeditationPage}>
                        <div className="imgBox">
                            <img src="https://imagizer.imageshack.com/img922/516/1I5eEI.jpg" alt="form Label Input Image" />
                        </div>
                        <div class="content">
                            <h2>Meditation</h2>
                            {/* <p>This is Feature 3 description</p> */}
                        </div>
                    </div>
                </a>

                <Link to="/test-categories"> {/* Update the link to point to the desired route */}
                    <div className="card-exp">
                        <div className="imgBox">
                            <img src="images/t4.jpeg" alt="Tests" />
                        </div>
                        <div className="content">
                            <h2>Psychology Tests</h2>
                            {/* <p>This is Feature 4 description</p> */}
                        </div>
                    </div>
                </Link>
                

                {/* <a href="#">
                    <div className="card-exp">
                        <div className="imgBox">
                            <img src="images/t5.jpeg" alt="Download Random Images" />
                        </div>
                        <div className="content">
                            <h2>Feature 5</h2>
                            <p>This is Feature 5 description</p>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="card-exp">
                        <div className="imgBox">
                            <img src="images/t6.jpeg" alt="progress step image " />
                        </div>
                        <div className="content">
                            <h2>Feature 6</h2>
                            <p>This is Feature 6 description</p>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="card-exp">
                        <div className="imgBox">
                            <img src="images/t7.jpeg" alt="Search Widget image" />
                        </div>
                        <div className="content">
                            <h2>Feature 7</h2>
                            <p>This is Feature 7 description</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="card-exp">
                        <div className="imgBox">
                            <img src="images/t8.jpeg" alt="Search Widget image" />
                        </div>
                        <div className="content">
                            <h2>Feature 8</h2>
                            <p>This is Feature 8 description</p>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="card-exp">
                        <div className="imgBox">
                            <img src="images/t9.jpeg" alt="Search Widget image" />
                        </div>
                        <div className="content">
                            <h2>Feature 9</h2>
                            <p>This is Feature 9 description</p>
                        </div>
                    </div>
                </a> */}
            </div>
</div>
            );
}

            export default Explore;
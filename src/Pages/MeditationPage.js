import React from "react";
import './MeditationPage.css';
// import SleepMed from "./SleepMed";

import { useNavigate } from 'react-router-dom';

const MeditationPage = () => {

  const navigate = useNavigate();
  const SleepMedPage = () => {

    navigate('/SleepMedPage');
  }


  return (
    <div>
      <img src='./img/Thumbnail---MeditationForSleep.jpg' height={'200px'} width={'200px'} />
      <h1 className="Meditation-h1">Meditation</h1>
      <p className="Meditation-p">"Unlock Inner Peace: Discover the Power of Meditation!" 🌿 </p>
      <p className="Meditation-p">
        Stressed? Anxious? Restore equilibrium with our life-changing online meditation course!
        Allow our helpful chatbot to lead you on a journey to tranquilly, assisting you in achieving
        mental clarity and a joyful state of mind. Learn old skills that have been adapted for the
        current world and enjoy a life of serenity and focus. Join us now for our interactive seminars
        and start on the path to harmony, where many benefits and perks await you. Begin your
        meditation journey right away!
      </p>


      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div class="card" onClick={SleepMedPage}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <h4>Sleep mediatation</h4>
              </div >
            </div>
          </div>
          <div className="col">
            <div class="card" >
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 */}
                <h4>Muscle Relaxation</h4>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <div class="card" style={{ width: '18rem' }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

    </div>



  )
}
export default MeditationPage;
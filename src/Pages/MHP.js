import React from "react";
import './MHP.css';
const MPH = () => {
  return (
   

      <div className="container text-center">
        <div className="row">
          <div className="col col-mhp">
            <div class="card-mhp" >
              <img src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" class="card-img-top"  alt="..." />
              <div class="card-body">
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <h4>Name</h4>
                <h5>Speciality</h5>
                <p>
                  Price details<br/>
                  Years of Experience<br/>
                  City<br/>
                  Email
                </p>
                <a href="#" class="btn btn-primary">Book Now</a>

              </div >
            </div>
          </div>

          <div className="col col-mhp">
            <div class="card-mhp" >
              <img src="https://codingyaar.com/wp-content/uploads/bootstrap-profile-card-image.jpg" class="card-img-top"  alt="..." />
              <div class="card-body">
                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                <h4>Name</h4>
                <h5>Speciality</h5>
                <p>
                  Price details<br/>
                  Years of Experience<br/>
                  City<br/>
                  Email
                </p>
                <a href="#" class="btn btn-primary">Book Now</a>

              </div >
            </div>
          </div>
         
        </div>
      </div>


      )
}

      export default MPH;
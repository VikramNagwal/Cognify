import React from "react";
import './Team.css';

const Team = () => {
    return (
        <div className="body-team">
            <div className="box-team">
                <div className="card-team">
                    <div className="imgBx">
                        <img src="https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div className="details">
                        <h2>SomeOne Famous<br /><span>Director</span></h2>
                    </div>
                </div>

                <div className="card-team">
                    <div className="imgBx">
                        <img src="https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div className="details">
                        <h2>SomeOne Famous<br /><span>Producer</span></h2>
                    </div>
                </div>

                <div className="card-team">
                    <div className="imgBx">
                        <img src="https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="images" />
                    </div>
                    <div className="details">
                        <h2>SomeOne Famous<br /><span>Actor</span></h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Team;
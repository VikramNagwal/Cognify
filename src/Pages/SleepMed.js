import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

const SleepMed=()=>{
   
    const src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  

    return(
        <>
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         Choose 
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Rain</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Beach</Dropdown.Item>
         
        </Dropdown.Menu>
      </Dropdown>

 {/* <Player playsInline poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/> */}




    {/* <div>
      <h2>Video Player</h2>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        controls={true}
        width="800px"
        height="450px"
      />
    </div> */}




    <video controls width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>


      </>
  

    );
};

export default SleepMed;
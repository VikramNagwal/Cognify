import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Config from '../config.json'

const VideoCall = () => {
  const { slug } = useParams();
  const VideoCallUrl = `https://tokbox.com/embed/embed/ot-embed.js?embedId=f95fc3d2-ada3-463a-a5b4-d05012eb612c&room=${slug}&iframe=true`;

  useEffect(() => {
    // Get token from local storage
    const token = localStorage.getItem("token");

    // Get slot_duration and start_time from cookies
    const slotDuration = parseFloat(document.cookie.replace(/(?:(?:^|.*;\s*)slot_duration\s*=\s*([^;]*).*$)|^.*$/, "$1"));
    const startTime = new Date(document.cookie.replace(/(?:(?:^|.*;\s*)start_time\s*=\s*([^;]*).*$)|^.*$/, "$1"));

    // Calculate the end time of the session
    const endTime = new Date(startTime.getTime() + slotDuration * 60 * 1000);

    // Set axios headers with the token
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;

    // Send POST request to validate the video session
    axios
      .post(`${Config.url}/therapy/validate-video-session/`, { slug })
      .then((response) => {
        const now = new Date();
        const remainingTime = Math.max(0, endTime - now);
        console.log(remainingTime);
        setTimeout(() => {
          // Display a message to the user
          Swal.fire({
            icon: "info",
            title: "Session Ended",
            text: "The video call session has ended.",
          });

          // Code to close or navigate away from the video call
          // For example, you can redirect the user to a different page
          // window.location.href = "/some-page";
        }, remainingTime);
      })
      .catch((error) => {
        // If validation fails, display an error message
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Session validation failed. " + error.response.data.detail,
        });
      });
  }, [slug]);

  return (
    <div>
      <h1>Video Call Session: {slug}</h1>
      <iframe src={VideoCallUrl} width="800px" height="640px" scrolling="auto" allow="microphone; camera"></iframe>
    </div>
  );
};

export default VideoCall;

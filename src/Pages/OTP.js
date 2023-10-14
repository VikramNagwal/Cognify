import React, { useEffect, useState } from "react";
import swal from 'sweetalert';
import './Otp.css';
import { useNavigate } from "react-router-dom";
import { parse } from "@fortawesome/fontawesome-svg-core";

function OTP() {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds]);
  const handleSubmit = () => {
    // Prepare the request body
    const requestBody = {
      email: email,
      otp: otp
    };
    // Send a POST request to the endpoint
    fetch("http://localhost:8000/auth/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        if (data.status==='success') {
        //check if age between 14 and 17, if yes, redirect to parental verification
        const dob=data.data.dob;
        console.log(dob);
        //dd-mm-yyyy
        const age=2021-parseInt(dob.slice(6,10));
        console.log(age);
          localStorage.setItem('email', email);
          localStorage.setItem('token', data.token);
          if(age<=17){
            localStorage.setItem('token', data.token);
            swal("Success", "OTP verified successfully! Proceed to parental verification", "success")
            .then(() => {
              navigate('/parent-verify'); 
            }
            );
          }
          else{swal("Success", "OTP verified successfully! Proceed to login", "success").then(() => {
            navigate('/Login'); 
          });}
          
        } 
        else if(data.status == 'incomplete'){
          navigate('/verify-resume');
        }
        else {
          // Display error message if OTP is not verified
          swal("Error", "problem with otp" , "error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
    //call handleSubmit
    handleSubmit();
  };
  useEffect(() => {
    // Retrieve email from localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      console.log(storedEmail);
    }
    else{
      swal("Error", "Please register first!", "error");
    }
  }, []);
  return (
    <div className="container-OTP">
      <div className="card-OTP">
        <h4 className="h4">Verify OTP</h4>
        <input
          className="input-OTP"
          placeholder="Enter OTP"
          value={otp}
          onChange={({ target }) => {
            setOtp(target.value);
          }}
        />
        <div className="countdown-text-OTP">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p>Didn't receive code?</p>
          )}
          <button
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>
        <button className="submit-btn-OTP" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default OTP;

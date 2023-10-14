import React, { useState } from 'react';
import './ParentalVerification.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ParentalVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    
    try {
      const token=localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/auth/parent-verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization' : `Token ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowOtpInput(true);
        swal('OTP sent!', 'Please enter the OTP received in your parent"s email.', 'success');
      } else {
        const data = await response.json();
        swal('Error', data.message, 'error');
      }
    } catch (error) {
      console.error(error);
      swal('Error', 'Failed to send OTP. Please try again later.', 'error');
    }
  };
  const handleVerifyOTP = async () => {

    try {
      const token=localStorage.getItem('token');
      const response = await fetch('http://localhost:8000/auth/parent-verify/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization' : `Token ${token}`,
        },
        body: JSON.stringify({ email, otp }),
      });

      if (response.ok) {
        swal('Verification successful!', 'Parental permission has been granted.', 'success');
        navigate('/home'); 
      } else {
        const data = await response.json();
        swal('Error', data.message, 'error');
      }
    } catch (error) {
      console.error(error);
      swal('Error', 'Failed to verify OTP. Please try again later.', 'error');
    }
  };

  return (
    <div className="parental-verification-container">
      <h2>Parental Verification</h2>
      <label>Parent Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Parent Email"
      />
      {!showOtpInput && (
        <button onClick={handleSendOTP}>Send OTP</button>
      )}
      {showOtpInput && (
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default ParentalVerification;

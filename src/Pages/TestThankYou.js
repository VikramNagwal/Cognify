import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div>
      <h1>Thank You for Taking the Test!</h1>
      <p>Your responses have been submitted successfully.</p>
      <Link to="/home">Return to Home</Link>
    </div>
  );
};

export default ThankYouPage;

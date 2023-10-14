import React, { useState } from 'react';
import DatePicker from './DatePicker';
import './Appointment.css';
const formStyles = {
  maxWidth: '500px',
  margin: '15px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontFamily: 'Arial, sans-serif',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9', // Set the background color of the form
};

const labelStyles = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold',
  Color: '#93cc25'
};

const inputStyles = {
  width: '100%', // Set the input width to 100%
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  backgroundColor: ''
};

const textareaStyles = {
  width: '100%', // Set the textarea width to 100%
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  resize: 'vertical',
  fontSize: '16px',
  backgroundColor: '#fff'
};

const buttonStyles = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.2s ease',
  backgroundColor: '#fff'
};

const buttonHoverStyles = {
  backgroundColor: '#0056b3',
};

function Appointment() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, phone, selectedDate, selectedTimeSlot, message });
  };

  return (
    <div className='Appointment-body'>

    <div style={formStyles}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#117336' }}>Appointment Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label style={labelStyles} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyles}
          />

        <label style={labelStyles} htmlFor="phone">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={inputStyles}
          />

        <DatePicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          />

        <label style={labelStyles} htmlFor="message">
          Message:
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={textareaStyles}
          />

        <button type="submit" style={buttonStyles} onMouseOver={(e) => e.target.style = {...buttonStyles, ...buttonHoverStyles}}>
          Submit
        </button>
      </form>
    </div>
          </div>
  );
}

export default Appointment;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MhpProfile.css';

const patients = [
  { id: 1, name: 'John Doe', progress: 'Patient is recovering well.' },
  { id: 2, name: 'Jane Smith', progress: 'Patient is stable.' },
  // Add more patient data as needed
];

const MhpProfile = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedPatient(null);
  };

  const handlePatientSelect = (patientId) => {
    setSelectedPatient(patientId);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBackToPatients = () => {
    setSelectedPatient(null);
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <ul>
          <li className={activeTab === 'patients' ? 'active' : ''} onClick={() => handleTabChange('patients')}>
            Patients
          </li>
          <li className={activeTab === 'appointments' ? 'active' : ''} onClick={() => handleTabChange('appointments')}>
            Appointments
          </li>
        </ul>
      </nav>

      {activeTab === 'patients' ? (
        <div className="patients-section">
          {selectedPatient !== null ? (
            <div className="patient-details">
              <h2>Patient Details</h2>
              <p>ID: {patients[selectedPatient - 1].id}</p>
              <p>Name: {patients[selectedPatient - 1].name}</p>
              <p>Progress: {patients[selectedPatient - 1].progress}</p>
              {/* Add more patient details to display */}
              <button onClick={handleBackToPatients}>Back to Patient List</button>
            </div>
          ) : (
            <div className="patient-list">
              <h2>Patients List</h2>
              <ul>
                {patients.map((patient) => (
                  <li
                    key={patient.id}
                    className={selectedPatient === patient.id ? 'selected-patient' : ''}
                    onClick={() => handlePatientSelect(patient.id)}
                  >
                    {patient.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="appointments-section">
          <h2>Appointment Calendar</h2>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </div>
      )}
    </div>
  );
};

export default MhpProfile;

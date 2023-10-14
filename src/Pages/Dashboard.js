import React, { useState } from 'react';
import './Dashboard.css';
import Slots from '../components/MhpProfile/Slots';
import DisplayAppointment from '../components/MhpProfile/DisplayAppointment';


const patients = [
  { id: 1, name: 'John Doe', progress: 'Patient is recovering well.' },
  { id: 2, name: 'Jane Smith', progress: 'Patient is stable.' },
  // Add more patient data as needed
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedPatient(null);
  };

  const handlePatientSelect = (patientId) => {
    setSelectedPatient(patientId);
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
          <li className={activeTab === 'availability' ? 'active' : ''} onClick={() => handleTabChange('availability')}>
            Add Slots
          </li>
          <li className={activeTab === 'appointments' ? 'active' : ''} onClick={() => handleTabChange('appointments')}>
            Availability
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
      ) : activeTab === 'availability' ? (
        <div className="availability-section">
          <Slots />
        </div>
      ) : (
        <div className="appointments-section">
          < DisplayAppointment/>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

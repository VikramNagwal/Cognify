import React from 'react';
import './TreatmentPlan.css';
const TreatmentPlan = ({ goals, tasks }) => (
  <div className="treatment-plan">
    <h2>Treatment Plan</h2>
    <h3>Goals:</h3>
    <p>{goals}</p>
    <h3>Tasks:</h3>
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  </div>
);

export default TreatmentPlan;

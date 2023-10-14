import React from 'react';
import './Dynamic_calandar.css';

const Calendar = ({ activities }) => (
  <div className="calendar">
    <h2>Calendar</h2>
    <div className="calendar-events">
      {activities.map((activity) => (
        <div key={activity.id} className="calendar-event">
          <p>{activity.name}</p>
          <p>{activity.date}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Calendar;

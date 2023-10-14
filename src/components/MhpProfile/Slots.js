import { toast } from "react-toastify";
import React, { useState } from "react";
import TimezoneSelect from "react-timezone-select";
// import { useNavigate } from "react-router-dom";

const Slots = () => {
  // States for selected day, start time, and end time
  const [selectedDay, setSelectedDay] = useState('Sun');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Available days and time options
  const schedule = [
    { day: "Sun" },
    { day: "Mon" },
    { day: "Tue" },
    { day: "Wed" },
    { day: "Thu" },
    { day: "Fri" },
    { day: "Sat" },
  ];

  const time = [
    { id: "null", t: "Select" },
    { id: "7", t: "7:00am" },
    { id: "8", t: "8:00am" },
    { id: "9", t: "9:00am" },
    { id: "10", t: "10:00am" },
    { id: "11", t: "11:00am" },
    { id: "12", t: "12:00pm" },
    { id: "13", t: "13:00pm" },
    { id: "14", t: "14:00pm" },
    { id: "15", t: "15:00pm" },
    { id: "16", t: "16:00pm" },
    { id: "17", t: "17:00pm" },
    { id: "18", t: "18:00pm" },
    { id: "19", t: "19:00pm" },
  ];

  // Handle day, start time, and end time changes
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    setStartTime('');
    setEndTime('');
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  // Handle saving schedules
  const handleSaveSchedules = () => {
    // Implement the save functionality as needed
    console.log("Selected Day:", selectedDay);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);
  };

  return (
    <div>
      <nav className='dashboard__nav'>
        <h2>BookMe</h2>
        {/* <button onClick={handleLogout} className='logout__btn'>
          Log out
        </button> */}
      </nav>
      <main className='dashboard__main'>
        <h2 className='dashboard__heading'>Select your availability</h2>
        <div className='timezone__wrapper'>
          <div className='form'>
            <div className='select__wrapper'>
              <label htmlFor='day'>Day</label>
              <select name='day' id='day' onChange={handleDayChange} value={selectedDay}>
                {schedule.map((sch) => (
                  <option key={sch.day} value={sch.day}>
                    {sch.day}
                  </option>
                ))}
              </select>
            </div>

            <div className='select__wrapper'>
              <label htmlFor='startTime'>Start Time</label>
              <select
                name='startTime'
                id='startTime'
                onChange={handleStartTimeChange}
                value={startTime}
              >
                {time.map((t) => (
                  <option key={t.id} value={t.t} id={t.id}>
                    {t.t}
                  </option>
                ))}
              </select>
            </div>
            <div className='select__wrapper'>
              <label htmlFor='endTime'>End Time</label>
              <select
                name='endTime'
                id='endTime'
                onChange={handleEndTimeChange}
                value={endTime}
              >
                {time.map((t) => (
                  <option key={t.id} value={t.t} id={t.id}>
                    {t.t}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className='saveBtn__container'>
          <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
        </div>
      </main>
    </div>
  );
};

export default Slots;

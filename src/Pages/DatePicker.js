import React from 'react';

const availableDates = [
  '2023-07-23',
  '2023-07-24',
  '2023-07-25',
  // Add more available dates here...
];

const availableTimeSlots = [
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  // Add more available time slots here...
];

function DatePicker({ selectedDate, setSelectedDate, selectedTimeSlot, setSelectedTimeSlot }) {
  return (
    <div>
      <div>
        <label htmlFor="date">Select Date:</label>
        <select
          id="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        >
          <option value="">-- Select a date --</option>
          {availableDates.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="timeSlot">Select Time Slot:</label>
        <select
          id="timeSlot"
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
          required
          style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
        >
          <option value="">-- Select a time slot --</option>
          {availableTimeSlots.map((timeSlot) => (
            <option key={timeSlot} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DatePicker;

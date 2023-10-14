import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';
import AvailabilitySettingsModal from './AvailabilitySettingsModal';
// import appointments from './appointments'; // Replace with your actual appointment data or fetch from an API

const localizer = momentLocalizer(moment);

const AppointmentCalendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [availability, setAvailability] = useState([]);
  const [events, setEvents] = useState(appointments);

  const handleSlotSelect = (slotInfo) => {
    setShowModal(true);
    setAvailability([{ start: slotInfo.start, end: slotInfo.end }]);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSaveAvailability = () => {
    // Save the availability settings to your backend or update the state as needed
    setEvents([...events, ...availability]);
    setAvailability([]);
    setShowModal(false);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSlotSelect}
      />
      <div className="add-availability-btn" onClick={() => setShowModal(true)}>
        <AiOutlinePlus size={18} />
        Add Availability
      </div>
      <AvailabilitySettingsModal
        showModal={showModal}
        availability={availability}
        onClose={handleModalClose}
        onSave={handleSaveAvailability}
      />
    </div>
  );
};

export default AppointmentCalendar;

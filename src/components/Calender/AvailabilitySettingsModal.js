import React from 'react';
import Modal from 'react-modal';
// import 'react-modal/dist/react-modal.css';

const AvailabilitySettingsModal = ({ showModal, availability, onClose, onSave }) => {
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onClose}
      contentLabel="Availability Settings Modal"
      ariaHideApp={false}
    >
      <h2>Set Your Availability</h2>
      {availability.length > 0 ? (
        <div>
          <p>Selected Time Slot:</p>
          <p>Start: {availability[0].start.toLocaleString()}</p>
          <p>End: {availability[0].end.toLocaleString()}</p>
        </div>
      ) : (
        <p>Select a time slot on the calendar to set your availability.</p>
      )}
      <button onClick={onClose}>Cancel</button>
      <button onClick={onSave}>Save Availability</button>
    </Modal>
  );
};

export default AvailabilitySettingsModal;

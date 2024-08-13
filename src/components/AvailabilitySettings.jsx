import React, { useState } from 'react';
import Modal from 'react-modal';
import './AvailabilitySettings.css';

Modal.setAppElement('#root'); // Bind modal to the app element to prevent screen readers from background content.

const SettingsModal = ({ isOpen, onRequestClose }) => {
  // Separate state for Notice Period and Booking Period
  const [noticePeriod, setNoticePeriod] = useState('');
  const [bookingPeriod, setBookingPeriod] = useState('');

  const handleNoticeChange = (event) => {
    setNoticePeriod(event.target.value);
  };

  const handleBookingChange = (event) => {
    setBookingPeriod(event.target.value);
  };

  const handleSave = () => {
    // Logic for saving the settings
    console.log('Settings saved:', { noticePeriod, bookingPeriod });
    // Close the modal after saving
    onRequestClose();
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      contentLabel="Availability Settings"
    >
      <h2>Availability Settings</h2>
      <hr />
      <div className='options'>
        <div className='notice-period'>
          <label htmlFor="notice-dropdown" className='heading'>Notice Period</label>
        </div>
        <div className='n-dropdown'>
          <select id="notice-dropdown" value={noticePeriod} onChange={handleNoticeChange}>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
            <option value="4">4 Hours</option>
            <option value="5">5 Hours</option>
            <option value="6">6 Hours</option>
            <option value="7">7 Hours</option>
            <option value="8">8 Hours</option>
            <option value="9">9 Hours</option>
            <option value="10">10 Hours</option>
            <option value="12">12 Hours</option>
            <option value="15">15 Hours</option>
            <option value="18">18 Hours</option>
            <option value="21">21 Hours</option>
            <option value="24">24 Hours</option>
            <option value="30">30 Hours</option>
            <option value="36">36 Hours</option>
            <option value="42">42 Hours</option>
            <option value="48">48 Hours</option>
          </select>
        </div>
        <div className='booking-period'>
          <label htmlFor="booking-dropdown" className='heading'>Booking Period</label>
        </div>
        <div>
          <select id="booking-dropdown" value={bookingPeriod} onChange={handleBookingChange}>
            <option value="1">1 Weeks</option>
            <option value="2">2 Weeks</option>
            <option value="3">3 Weeks</option>
            <option value="4">4 Weeks</option>
            <option value="5">5 Weeks</option>
            <option value="6">6 Weeks</option>
            <option value="7">7 Weeks</option>
            <option value="8">8 Weeks</option>
            <option value="9">9 Weeks</option>
            <option value="10">10 Weeks</option>
            <option value="11">11 Weeks</option>
            <option value="12">12 Weeks</option>
            <option value="13">13 Weeks</option>
            <option value="14">14 Weeks</option>
          </select>
        </div>
      </div>
      <div>
        <hr className='down-hr'/>
        <div className="flex">
        <button onClick={onRequestClose} className='close'>Close</button>
        <button onClick={handleSave} className='save'>Save</button>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;

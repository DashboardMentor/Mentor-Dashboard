// src/Availability.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Availability.css';
import AvailabilitySettings from './AvailabilitySettings';

const Availability = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [modalIsOpen, setModalIsOpen] = useState(false);
      
  const openSettings = () => {
    setModalIsOpen(true);
  };

  const closeSettings = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="availability-container">
      <div className="availability-header">
        <h1>Availability</h1>
        <button className="settings-button" onClick={openSettings}>Settings</button>
        <AvailabilitySettings isOpen={modalIsOpen} onRequestClose={closeSettings} />
      </div>
      <div className="availability-card">
        <div className="availability-details">
          <div className="availability-title">
            <h2>My Availability</h2>
          </div>
          <div className="timezone-switch-card">
            <div className="timezone-switch">
              <label>Switch timezone</label>
              <select>
                <option value="Asia/Kolkata">Asia/Kolkata IST (+05:30)</option>
                {/* Add more timezones as needed */}
              </select>
            </div>
            <button className="save-button">Save</button>
          </div>
          <div className="availability-form">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="day-card">
                <label className="day-checkbox">
                  <input type="checkbox" /> {day}
                </label>
                <div className="time-input-card bordered">
                  <label>Start Time</label>
                  <input type="time" />
                </div>
                <div className="time-input-card bordered">
                  <label>End Time</label>
                  <input type="time" />
                </div>
                <button className="add-button">+</button>
              </div>
            ))}
          </div>
        </div>
        <div className="calendar-card">
          <div className="calendar-header">
            <h2>My Calendar</h2>
          </div>
          <div className="calendar-container">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
              showYearDropdown
            />
          </div>
          <div className="calendar-settings">
            <label>
              <input type="radio" name="availability" value="whole-day" /> Whole day unavailable
            </label>
            <label>
              <input type="radio" name="availability" value="custom-time" /> Custom time
            </label>
            <div className="schedule-override">
              <label>Schedule for the day</label><br></br>
              <label>09:00 AM IST - 06:00 PM IST</label>
              <button className="schedule-button">Schedule Override</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;

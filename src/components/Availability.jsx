// src/Availability.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCog } from 'react-icons/fa'; // import settings icon
import 'react-datepicker/dist/react-datepicker.css';
import './Availability.css';
import AvailabilitySettings from './AvailabilitySettings';

const Availability = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [wholeDay, setWholeDay] = useState(false);
  return (
    <div className="availability-container">
      <div className="availability-header">
        <h1>Availability</h1>
        <button className="settings-button"> <FaCog /> Settings</button>
      </div>
      
      <div className="availability-card">
        <div className="availability-details">
          <div className="availability-title">
            <h2>My Availability</h2>
            <div className="timezone-save-container">
              <div className="timezone-switch">
                <label>Switch timezone</label>
                <select>
                <option value="Pacific/Midway">Pacific/Midway (UTC -11:00)</option>
                <option value="Pacific/Honolulu">Pacific/Honolulu (UTC -10:00)</option>
                <option value="America/Anchorage">America/Anchorage (UTC -09:00)</option>
                <option value="America/Los_Angeles">America/Los_Angeles (UTC -08:00)</option>
                <option value="America/Denver">America/Denver (UTC -07:00)</option>
                <option value="America/Chicago">America/Chicago (UTC -06:00)</option>
                <option value="America/New_York">America/New_York (UTC -05:00)</option>
                <option value="America/Caracas">America/Caracas (UTC -04:30)</option>
                <option value="America/Halifax">America/Halifax (UTC -04:00)</option>
                <option value="America/St_Johns">America/St_Johns (UTC -03:30)</option>
                <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires (UTC -03:00)</option>
                <option value="Atlantic/South_Georgia">Atlantic/South_Georgia (UTC -02:00)</option>
                <option value="Atlantic/Azores">Atlantic/Azores (UTC -01:00)</option>
                <option value="UTC">UTC (UTC +00:00)</option>
                <option value="Europe/London">Europe/London (UTC +00:00)</option>
                <option value="Europe/Berlin">Europe/Berlin (UTC +01:00)</option>
                <option value="Europe/Athens">Europe/Athens (UTC +02:00)</option>
                <option value="Europe/Moscow">Europe/Moscow (UTC +03:00)</option>
                <option value="Asia/Tehran">Asia/Tehran (UTC +03:30)</option>
                <option value="Asia/Dubai">Asia/Dubai (UTC +04:00)</option>
                <option value="Asia/Kabul">Asia/Kabul (UTC +04:30)</option>
                <option value="Asia/Karachi">Asia/Karachi (UTC +05:00)</option>
                <option value="Asia/Kolkata">Asia/Kolkata IST (UTC +05:30)</option>
                <option value="Asia/Kathmandu">Asia/Kathmandu (UTC +05:45)</option>
                <option value="Asia/Dhaka">Asia/Dhaka (UTC +06:00)</option>
                <option value="Asia/Yangon">Asia/Yangon (UTC +06:30)</option>
                <option value="Asia/Bangkok">Asia/Bangkok (UTC +07:00)</option>
                <option value="Asia/Shanghai">Asia/Shanghai (UTC +08:00)</option>
                <option value="Asia/Tokyo">Asia/Tokyo (UTC +09:00)</option>
                <option value="Australia/Adelaide">Australia/Adelaide (UTC +09:30)</option>
                <option value="Australia/Sydney">Australia/Sydney (UTC +10:00)</option>
                <option value="Pacific/Noumea">Pacific/Noumea (UTC +11:00)</option>
                <option value="Pacific/Auckland">Pacific/Auckland (UTC +12:00)</option> 

                </select>
              </div>
              <button className="save-button">Save</button>
            </div>
          </div>
          <div className="availability-form">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="day-card">
                <label className="day-checkbox">
                  <input type="checkbox" /> {day}
                </label>
                <div className="time-input-card bordered">
                  <label classname="time">Start Time</label>
                  <input type="time" />
                </div>
                <div className="time-input-card bordered">
                  <label classname="time">End Time</label>
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
            <div className="whole-day-unavailable">
              <span>Whole day unavailable</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={wholeDay}
                  onChange={() => setWholeDay(!wholeDay)}
                />
                <span className="slider round"></span>
              </label>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Availability;

// CalendarPopup.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CalenderPopup.css';

const CalendarPopup = ({ onClose, onSave }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleSave = () => {
        onSave(selectedDate);
        alert('Saved successfully');
        onClose();
    };

    return (
        <div className="calendar-popup">
            <div className="calendar-popup-content">
                <h2>Select Date and Time</h2>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                />
                <div className="popup-actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default CalendarPopup;

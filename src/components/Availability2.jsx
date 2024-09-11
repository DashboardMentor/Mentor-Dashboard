import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Availability2.css';
import AvailabilitySettings from './AvailabilitySettings';
const Availability2 = () => {
    const defaultStartTime = '09:00';
    const defaultEndTime = '18:00';

    const [startDate, setStartDate] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [highlightDates, setHighlightDates] = useState({});
    const [scheduleTimes, setScheduleTimes] = useState({});
    const [editedTimes, setEditedTimes] = useState({}); // Track edited times

    const openSettings = () => {
        setModalIsOpen(true);
    };

    const closeSettings = () => {
        setModalIsOpen(false);
    };

    const [timeSlots, setTimeSlots] = useState({
        Monday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
        Tuesday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
        Wednesday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
        Thursday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
        Friday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
        Saturday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
        Sunday: [{ startTime: defaultStartTime, endTime: defaultEndTime }],
    });

    const [checkedDays, setCheckedDays] = useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false,
    });

    useEffect(() => {
        const now = new Date();
        const newHighlightDates = {};
        const newScheduleTimes = {};
        Object.keys(checkedDays).forEach((day) => {
            if (checkedDays[day]) {
                const nextOccurrence = getNextOccurrence(day, now);
                newHighlightDates[day] = nextOccurrence;

                const slots = timeSlots[day];
                const validSlots = slots.filter(slot => slot.startTime && slot.endTime);
                if (validSlots.length > 0) {
                    const startTimes = validSlots.map(slot => slot.startTime);
                    const endTimes = validSlots.map(slot => slot.endTime);
                    newScheduleTimes[day] = {
                        startTime: startTimes.length ? Math.min(...startTimes.map(timeToMinutes)) : '',
                        endTime: endTimes.length ? Math.max(...endTimes.map(timeToMinutes)) : '',
                    };
                }
            }
        });
        setHighlightDates(newHighlightDates);
        setScheduleTimes(newScheduleTimes);
    }, [checkedDays, timeSlots]);

    const getNextOccurrence = (dayName, fromDate) => {
        const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(dayName);
        const nextDate = new Date(fromDate);
        nextDate.setDate(fromDate.getDate() + (dayIndex - fromDate.getDay() + 7) % 7);
        if (nextDate <= fromDate) {
            nextDate.setDate(nextDate.getDate() + 7);
        }
        return nextDate;
    };

    const timeToMinutes = (time) => {
        const [hour, minute] = time.split(':').map(Number);
        return hour * 60 + minute;
    };

    const minutesToTime = (minutes) => {
        const hour = Math.floor(minutes / 60).toString().padStart(2, '0');
        const minute = (minutes % 60).toString().padStart(2, '0');
        return `${hour}:${minute}`;
    };

    const add30Minutes = (time) => {
        const minutes = timeToMinutes(time) + 30;
        return minutesToTime(minutes);
    };

    const handleTimeChange = (day, index, type, value) => {
        const newTimeSlots = { ...timeSlots };
        newTimeSlots[day][index][type] = value;

        if (type === 'startTime') {
            const newEndTime = add30Minutes(value);
            newTimeSlots[day][index].endTime = newEndTime;
        }

        setTimeSlots(newTimeSlots);

        // Mark this day's times as edited
        setEditedTimes({ ...editedTimes, [day]: true });
    };

    const handleAddTimeSlot = (day) => {
        const newTimeSlots = { ...timeSlots };
        newTimeSlots[day].push({ startTime: defaultStartTime, endTime: defaultEndTime });
        setTimeSlots(newTimeSlots);
    };

    const handleSave = () => {
        const newCheckedDays = { ...checkedDays };

        Object.keys(timeSlots).forEach((day) => {
            const hasEditedTimeSlot = timeSlots[day].some(
                (slot) =>
                    slot.startTime !== '' &&
                    slot.endTime !== '' &&
                    (slot.startTime !== defaultStartTime || slot.endTime !== defaultEndTime)
            );
            newCheckedDays[day] = hasEditedTimeSlot;
        });

        setCheckedDays(newCheckedDays);
    };

    const applyToAll = (day) => {
        const editedSlot = timeSlots[day][0]; // Assuming first slot is edited
        const newTimeSlots = {};
        Object.keys(timeSlots).forEach((key) => {
            newTimeSlots[key] = [{ startTime: editedSlot.startTime, endTime: editedSlot.endTime }];
        });
        setTimeSlots(newTimeSlots);
        setEditedTimes({}); // Reset edited state
    };

    const highlightDayClass = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize time to 00:00:00 for comparison
        const dayName = getDayOfWeek(date);

        // Check if the date is today
        if (date.toDateString() === today.toDateString()) {
            return ''; // Return an empty string for the current day
        }

        // Check if the date is in the past
        if (date < today) {
            return 'past-day';
        }

        // Check if the date should be highlighted
        if (highlightDates[dayName] && date.toDateString() === highlightDates[dayName].toDateString()) {
            return 'highlighted-day';
        }

        return '';
    };



    const getDayOfWeek = (date) => {
        const dayIndex = date.getDay();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[dayIndex];
    };

    const formatScheduleTime = (day) => {
        const times = scheduleTimes[day];
        if (times) {
            return `${minutesToTime(times.startTime)} IST - ${minutesToTime(times.endTime)} IST`;
        }
        return '';
    };

    return (
        <div className="availability-container">
            <div className="availability-header">
                <h1>Availability</h1>
                <button className="settings-button" onClick={openSettings}>
                    Settings
                </button>
                <AvailabilitySettings isOpen={modalIsOpen} onRequestClose={closeSettings} />
            </div>
            <div className="pura-card">
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
                            <button className="save-button" onClick={handleSave}>Save</button>
                        </div>
                        <div className="availability-form">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                <div key={day} className="day-card">
                                    <label className="day-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={checkedDays[day]}
                                            readOnly
                                        /> {day}
                                    </label>
                                    <div className="time-slots-container">
                                        {timeSlots[day].map((slot, index) => (
                                            <div key={index} className="time-slot">
                                                <div className="time-input-card bordered">
                                                    <label>Start Time</label>
                                                    <input
                                                        type="time"
                                                        value={slot.startTime}
                                                        onChange={(e) => handleTimeChange(day, index, 'startTime', e.target.value)}
                                                    />
                                                </div>
                                                <div className="time-input-card bordered">
                                                    <label>End Time</label>
                                                    <input
                                                        type="time"
                                                        value={slot.endTime}
                                                        onChange={(e) => handleTimeChange(day, index, 'endTime', e.target.value)}
                                                        min={add30Minutes(slot.startTime)}
                                                        disabled={!slot.startTime}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {editedTimes[day] && (
                                        <button className="apply-to-all-button" onClick={() => applyToAll(day)}>
                                            Apply to all
                                        </button>
                                    )}
                                    <button className="add-button" onClick={() => handleAddTimeSlot(day)}>+</button>
                                </div>
                            ))}
                        </div>
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
                            dayClassName={highlightDayClass}
                        />
                    </div>
                    <div className='custom'>
                        <div className="red-dot-label">
                            <span className="red-dot"></span>
                            <span>Custom Time</span>
                        </div>
                    </div>
                    <div className="schedule-details">
                        {Object.keys(checkedDays).map((day) => (
                            checkedDays[day] && (
                                <div key={day} className="schedule-override">
                                    <span className='span1'><label>Schedule for {day}</label><br /></span>
                                    <span className='span2'><label>{formatScheduleTime(day)}</label></span>
                                </div>
                            )
                        ))}
                    </div>
                    <div className='schedule'>
                        <button className='schedule-button'>Schedule Override</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Availability2;

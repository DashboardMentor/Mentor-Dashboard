// Bookings.js
import React, { useState } from 'react';
import './Bookings.css';
import CalendarPopup from './Calenderpop.jsx';
import mentees from './mentees.png';
import payments from './payments.jpg';
import sessions from './sessions.png';
import upcoming from './upcoming.png';

const Bookings = () => {
    const [totalMentees, setTotalMentees] = useState(0);
    const [upcomingSessions, setUpcomingSessions] = useState(0);
    const [pendingPayments, setPendingPayments] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);

    const incrementNumbers = () => {
        setTotalMentees(prev => prev + 1);
        setUpcomingSessions(prev => prev + 1);
        setPendingPayments(prev => prev + 1);
    };

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        if (filter === 'Date') {
            setShowCalendar(true);
        }
    };

    const handleSaveDate = (date) => {
        console.log('Saved date:', date);
    };

    return (
        <div className="bookings">
            <h1>Services</h1>
            <p className="manage-services">Manage Services</p>
            <hr />
            <div className="booking-sections">
                <div className="section">
                    <img src={mentees} alt="Total Mentees" className="section-icon" />
                    <div className="section-content">
                        <span className="section-number">{totalMentees}</span>
                        <p>Total Mentees</p>
                    </div>
                </div>
                <div className="section">
                    <img src={sessions} alt="Upcoming Sessions" className="section-icon" />
                    <div className="section-content">
                        <span className="section-number">{upcomingSessions}</span>
                        <p>Upcoming Sessions</p>
                    </div>
                </div>
                <div className="section">
                    <img src={payments} alt="Pending Payments" className="section-icon" />
                    <div className="section-content">
                        <span className="section-number">{pendingPayments}</span>
                        <p>Pending Payments</p>
                    </div>
                </div>
            </div>
            <div className="booking-actions">
                <div className="booking-buttons">
                    <button onClick={incrementNumbers}>Update Counts</button>
                    <button>1:1 Sessions</button>
                    <button>Queries</button>
                    <button>Resources</button>
                </div>
                <div className="filters-container">
                    <p>Filter By:</p>
                    <div className="filter">
                        <button className="filter-button" onClick={() => handleFilterClick('Date')}>
                            Date ▼
                        </button>
                    </div>
                    <div className="filter">
                        <button className="filter-button" onClick={() => handleFilterClick('services')}>
                            Services ▼
                        </button>
                        {selectedFilter === 'services' && (
                            <div className="dropdown-content">
                                <p>Quick Call</p>
                                <p>60 Min Mentor Meet</p>
                            </div>
                        )}
                    </div>
                    <div className="filter">
                        <button className="filter-button" onClick={() => handleFilterClick('all')}>
                            All ▼
                        </button>
                        {selectedFilter === 'all' && (
                            <div className="dropdown-content">
                                <p>Upcoming</p>
                                <p>Closed</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="upcoming-box">
                <img src={upcoming} alt="No upcoming sessions" />
                <p>No upcoming sessions yet</p>
            </div>
            {showCalendar && (
                <CalendarPopup onClose={() => setShowCalendar(false)} onSave={handleSaveDate} />
            )}
        </div>
    );
};

export default Bookings;

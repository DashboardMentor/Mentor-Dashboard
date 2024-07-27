// Bookings.js
import React, { useState } from 'react';
import './Bookings.css';
import mentees from './mentees.png';
import payments from './payments.jpg';
import sessions from './sessions.png';
import upcoming from './upcoming.png';
const Bookings = () => {
    
    const [totalMentees, setTotalMentees] = useState(0);
    const [upcomingSessions, setUpcomingSessions] = useState(0);
    const [pendingPayments, setPendingPayments] = useState(0);
  
    // Example function to increment the numbers
    const incrementNumbers = () => {
      setTotalMentees(prev => prev + 1);
      setUpcomingSessions(prev => prev + 1);
      setPendingPayments(prev => prev + 1);
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
          <p> Total Mentees</p>
         </div>
         
        </div>
        <div className="section">
       
        
          <img src={sessions} alt="Upcoming Sessions" className="section-icon" />
          <div className="section-content">
          <span className="section-number">{upcomingSessions}</span>
          <p> Upcoming Sessions</p>
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
      <div className="booking-buttons">
      <button onClick={incrementNumbers}>Update Counts</button>
        <button>1:1 Sessions</button>
        <button>Queries</button>
        <button>Resources</button>
      </div>
      <div className="upcoming-box">
        <img src={upcoming} alt="No upcoming sessions" />
        <p>No upcoming sessions yet</p>
      </div>
    </div>
  );
};

export default Bookings;

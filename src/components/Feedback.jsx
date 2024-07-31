import React from 'react';
import './Feedback.css';
import nodata from './nodata.jpg';

const FeedbackPage = () => {
  return (
    <div className="feedback-page">
      <header className="header">
        <h1>Feedback</h1>
      </header>
      <div className="feedback-info">
        <div className="feedback-item">
          <h2>0</h2>
          <p>Total Reviews/Feedback</p>
        </div>
        <div className="feedback-item">
          <h2>0</h2>
          <p>Average Rating</p>
        </div>
      </div>
      <div className="feedback-list">
        <h3 className="name">Name</h3>
        <h3 className="message">Message</h3>
        <h3 className="rating">Rating</h3>
        <div className="no-data">
          <img src={nodata} alt="No data available" />
          <p>No data available</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;

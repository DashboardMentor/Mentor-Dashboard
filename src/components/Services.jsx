import React from 'react';
import './Services.css';

const Services = () => {
  const stats = [
    { title: 'Total Sessions', value: 0 },
    { title: 'Total Duration', value: '0 Mins' },
    { title: 'Total Reviews', value: 0 },
    { title: 'Avg Ratings', value: 0 },
  ];

  const services = [
    { title: 'Quick Call', description: '30 mins quick call to achieve your goals faster with personalised road map.', duration: '30 Min', price: '₹XXX', type: '1:1 Call' },
    { title: '60 min Mentor Meet', description: '1:1 mentorship session for personalised, hands-on and practical guidance.', duration: '60 Min', price: '₹XXXX', type: '1:1 Call' },
    { title: 'Ask a Query', description: 'Query Query', duration: '3 Days Revert', price: '₹XXX', type: 'Query' },
  ];

  return (
    <div>
      <h2 className="title">Your Services</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3 className="stat-title">{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-type-container">
              <span className="service-type">{service.type}</span>
            </div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <div className="service-duration">Duration: {service.duration}</div>
            <div className="service-price">Price: {service.price}</div>
            <div className="service-stats">Views: 0 | Bookings: 0 | Earnings: 0 | Conversion Rate: 0%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

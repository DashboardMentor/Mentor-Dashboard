// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import Availability from './components/Availability';
import Bookings from './components/Bookings';
import Services from './components/Services';
import Payment  from './components/Payment';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/*" element={<MainContent />} /> 
              <Route path="/profile" element={<Profile/>}/>{/* Catch-all route for other paths */}
              <Route path="/availability" element={<Availability />} />
              <Route path="/booking" element={<Bookings />} />
              <Route path="/services" element={<Services />} />
              <Route path ="/Payment" element={<Payment/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;

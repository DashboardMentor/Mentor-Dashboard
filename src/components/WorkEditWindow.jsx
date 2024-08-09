import React, { useState } from 'react';
import './WorkEditWindow.css';

const WorkEditWindow = ({ data, handleSave, handleClose }) => {
  const [designation, setDesignation] = useState(data.designation || '');
  const [sector, setSector] = useState(data.sector || '');
  const [employmentType, setEmploymentType] = useState(data.employmentType || '');
  const [organization, setOrganization] = useState(data.organization || '');
  const [fromYear, setFromYear] = useState(data.fromYear || '');
  const [toYear, setToYear] = useState(data.toYear || '');
  const [country, setCountry] = useState(data.country || '');
  const [state, setState] = useState(data.state || '');
  const [city, setCity] = useState(data.city || '');

  const handleSaveClick = () => {
    handleSave({
      designation,
      sector,
      employmentType,
      organization,
      fromYear,
      toYear,
      country,
      state,
      city,
    });
  };

  return (
    <div className="work-edit-window">
      <div className="work-edit-window-header">
        <h1>Work Experience</h1>
        <button onClick={handleClose} className="work-edit-window-close-button">&times;</button>
      </div>
      <div className="form-group">
        <label>Designation*</label>
        <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Sector*</label>
        <input type="text" value={sector} onChange={(e) => setSector(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Employment Type*</label>
        <input type="text" value={employmentType} onChange={(e) => setEmploymentType(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Organization*</label>
        <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} />
      </div>
      <div className="form-group checkbox-group">
        <input type="checkbox" id="current" />
        <label htmlFor="current">I am currently working here</label>
      </div>
      <div className="form-group">
        <label>From (Year)*</label>
        <input type="text" value={fromYear} onChange={(e) => setFromYear(e.target.value)} />
      </div>
      <div className="form-group">
        <label>To (Year)*</label>
        <input type="text" value={toYear} onChange={(e) => setToYear(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
      </div>
      <div className="form-group">
        <label>State</label>
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>
      <div className="button-group">
        <button onClick={handleSaveClick} className="submit-button">Save</button>
        <button onClick={handleClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default WorkEditWindow;

import React, { useState } from 'react';
import './EducationEditWindow.css';

const EducationEditWindow = ({ handleSave, handleClose, data = {} }) => {
  const [qualification, setQualification] = useState(data.qualification || '');
  const [degree, setDegree] = useState(data.degree || '');
  const [fromYear, setFromYear] = useState(data.fromYear || '');
  const [toYear, setToYear] = useState(data.toYear || '');
  const [percentage, setPercentage] = useState(data.percentage || '');
  const [cgpa, setCgpa] = useState(data.cgpa || '');
  const [specialization, setSpecialization] = useState(data.specialization || '');
  const [university, setUniversity] = useState(data.university || '');
  const [institute, setInstitute] = useState(data.institute || '');
  const [country, setCountry] = useState(data.country || '');
  const [state, setState] = useState(data.state || '');
  const [city, setCity] = useState(data.city || '');

  const handleSubmit = () => {
    if (
      qualification &&
      degree &&
      fromYear &&
      toYear &&
      percentage &&
      cgpa &&
      specialization &&
      university &&
      institute &&
      country &&
      state &&
      city
    ) {
      const updatedData = {
        qualification,
        degree,
        fromYear,
        toYear,
        percentage,
        cgpa,
        specialization,
        university,
        institute,
        country,
        state,
        city,
      };
      handleSave(updatedData);
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <div className="education-edit-window">
      <div className="education-edit-header">
        <h2>Edit Education Details</h2>
        <button className="close-button" onClick={handleClose}>X</button>
      </div>
      <div className="education-edit-body">
        {/* Qualification and Degree */}
        <div className="form-row">
          <div className="form-group">
            <label>Qualification</label>
            <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Degree</label>
            <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} required />
          </div>
        </div>
        {/* From Year and To Year */}
        <div className="form-row">
          <div className="form-group">
            <label>From (Year)</label>
            <input type="number" value={fromYear} onChange={(e) => setFromYear(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>To (Year)</label>
            <input type="number" value={toYear} onChange={(e) => setToYear(e.target.value)} required />
          </div>
        </div>
        {/* Percentage and CGPA */}
        <div className="form-row">
          <div className="form-group">
            <label>Percentage</label>
            <input type="number" value={percentage} onChange={(e) => setPercentage(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>CGPA</label>
            <input type="number" step="0.01" value={cgpa} onChange={(e) => setCgpa(e.target.value)} required />
          </div>
        </div>
        {/* Specialization and University */}
        <div className="form-row">
          <div className="form-group">
            <label>Specialization</label>
            <input type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>University</label>
            <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} required />
          </div>
        </div>
        {/* Institute */}
        <div className="form-group">
          <label>Institute</label>
          <input type="text" value={institute} onChange={(e) => setInstitute(e.target.value)} required />
        </div>
        {/* Country, State, City */}
        <div className="form-row">
          <div className="form-group">
            <label>Country</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>State</label>
            <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
        </div>
      </div>
      <div className="education-edit-footer">
        <button className="save-button" onClick={handleSubmit}>Save</button>
        <button className="cancel-button" onClick={handleClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EducationEditWindow;

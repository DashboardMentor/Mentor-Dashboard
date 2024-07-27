import React, { useState } from 'react';
import './SideWindow.css';

const SideWindow = ({ show, handleClose, data, handleSave }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="sidewindow-overlay">
      <div className="sidewindow-container">
        <h2 className="sidewindow-title">Edit Details</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div className="sidewindow-field" key={key}>
              <label className="sidewindow-label" htmlFor={key}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type="text"
                id={key}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="sidewindow-input"
              />
            </div>
          ))}
          <div className="sidewindow-actions">
            <button type="submit" className="sidewindow-save">
              Save
            </button>
            <button type="button" onClick={handleClose} className="sidewindow-cancel">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SideWindow;

import React, { useState } from 'react';

const EducationEditWindow = ({ data, handleSave, handleClose }) => {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    handleSave(formData);
    handleClose();
  };

  return (
    <div className="side-window">
      <h2>Edit Education Details</h2>
      {/* Add your form fields here */}
      <input type="text" name="degree" value={formData.degree} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleClose}>Cancel</button>
    </div>
  );
};

export default EducationEditWindow;

import React, { useState } from 'react';

const WorkEditWindow = ({ data, handleSave, handleClose }) => {
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
      <h2>Edit Work Experience</h2>
      {/* Add your form fields here */}
      <input type="text" name="position" value={formData.position} onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleClose}>Cancel</button>
    </div>
  );
};

export default WorkEditWindow;

import React, { useState, useEffect } from 'react';
import './ProfileSideWindow1.css';

const languagesList = ['English', 'Spanish', 'French', 'German', 'Mandarin', 'Hindi', 'Arabic'];

const ProfileSideWindow1 = ({ show, handleClose, data, handleSave }) => {
  const [formData, setFormData] = useState(data);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    setFormData(data);
    setPreviewImage(data.profilePhoto);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setFormData({ ...formData, profilePhoto: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(formData);
  };

  return (
    <div className={`side-window ${show ? 'visible' : ''}`}>
      <div className="side-window-content">
        <div className="side-window-header">
          <h2>Edit Profile</h2>
          <button onClick={handleClose} className="side-window-close-button">
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="side-window-form">
          <div className="form-group">
            <label>Profile Photo</label>
            <div className="profile-photo-section">
              {previewImage && (
                <img
                  src={previewImage}
                  alt="Profile Preview"
                  className="profile-photo-preview"
                />
              )}
              <input
                type="file"
                name="profilePhoto"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Non-binary"
                  checked={formData.gender === 'Non-binary'}
                  onChange={handleChange}
                />
                Non-binary
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={formData.gender === 'Other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Current Organisation/Institute</label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Current Role</label>
            <input
              type="text"
              name="currentRole"
              value={formData.currentRole}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Total Experience (Years)</label>
            <input
              type="number"
              name="totalExperience"
              value={formData.totalExperience}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <div className="form-group">
            <label>You are Fluent in</label>
            <select
              name="languages"
              value={formData.languages}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a language</option>
              {languagesList.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>LinkedIn Profile</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/your-profile"
            />
          </div>
          <div className="form-group">
            <label>Instagram Profile</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="https://www.instagram.com/your-profile"
            />
          </div>
          <div className="form-group">
            <label>YouTube Channel</label>
            <input
              type="text"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              placeholder="https://www.youtube.com/c/your-channel"
            />
          </div>
          <div className="form-buttons">
            <button type="button" onClick={handleClose} className="back-button">
              Back
            </button>
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSideWindow1;

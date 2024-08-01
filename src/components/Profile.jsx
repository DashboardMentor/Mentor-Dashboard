import React, { useState } from 'react';
import './Profile.css';
import Photo from './photo.jpg';
import ProfileEditWindow from './ProfileEditWindow';
import DomainEditWindow from './DomainEditWindow';
import WorkEditWindow from './WorkEditWindow';
import EducationEditWindow from './EducationEditWindow';

const Profile = () => {
  const [showSideWindow, setShowSideWindow] = useState(false);
  const [currentEditSection, setCurrentEditSection] = useState(null);
  const [profileData, setProfileData] = useState({
    firstName: 'XC',
    lastName: 'SD',
    userName: 'bvhy1234',
    gender: 'Male',
    organization: 'U Digital',
    industry: 'Agriculture and Allied Industries',
    experience: '4 Years',
    bio: "I'm an executive at U Digital, bringing 4 years of experience in the Agriculture and Allied Industries to the table. I'm passionate about using technology to empower farmers and drive sustainable growth in the sector. As a mentor, I'm eager to share my knowledge and insights to help others navigate the challenges and opportunities in this dynamic field.",
    language: 'English',
    socialLinks: 'https://www.linkedin.com/in/temp-profile-37352a26',
  });
  const [domainData, setDomainData] = useState({
    domain: 'Engineering, Technology & Data',
    topics: [
      'Ace Engineering Entrance Exams',
      'Change careers',
      'Change jobs',
      'Crack Hackathons and Coding Challenges',
      'Get a raise',
    ],
    skills: [
      'Linux',
      'Agile',
      'Algorithms',
      'Analytics',
      'Architecture',
      'Artificial Intelligence',
    ],
  });
  const [workData, setWorkData] = useState({
    position: 'Executive at U Digital',
    role: 'Executive',
    duration: '2019 - Present',
    responsibilities: [
      'Leading projects related to agricultural technology.',
      'Mentoring junior staff and overseeing their progress.',
      'Collaborating with stakeholders to drive project success.',
    ],
  });
  const [educationData, setEducationData] = useState({
    degree: 'Bachelor of Technology in Computer Science',
    university: 'XYZ University',
    graduationYear: '2019',
    achievements: [
      'Graduated with honors.',
      'Top 10% of the class.',
      'Member of the university coding club.',
    ],
  });

  const handleEditClick = (section) => {
    setCurrentEditSection(section);
    setShowSideWindow(true);
  };

  const handleClose = () => {
    setShowSideWindow(false);
  };

  const handleSave = (data) => {
    switch (currentEditSection) {
      case 'profile':
        setProfileData(data);
        break;
      case 'domain':
        setDomainData(data);
        break;
      case 'work':
        setWorkData(data);
        break;
      case 'education':
        setEducationData(data);
        break;
      default:
        break;
    }
    handleClose();
  };

  const renderEditWindow = () => {
    switch (currentEditSection) {
      case 'profile':
        return <ProfileEditWindow data={profileData} handleSave={handleSave} handleClose={handleClose} />;
      case 'domain':
        return <DomainEditWindow data={domainData} handleSave={handleSave} handleClose={handleClose} />;
      case 'work':
        return <WorkEditWindow data={workData} handleSave={handleSave} handleClose={handleClose} />;
      case 'education':
        return <EducationEditWindow data={educationData} handleSave={handleSave} handleClose={handleClose} />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-header-background">
          <button className="profile-theme-button">Change Theme</button>
        </div>
        <div className="profile-photo-container">
          <img src={Photo} alt="Profile" className="profile-photo" />
        </div>
      </div>
      <div className="profile-edit-button-container">
        <button onClick={() => handleEditClick('profile')} className="profile-edit-button">
          Edit
        </button>
      </div>
      <div className="profile-details">
        <h2 className="profile-name">{profileData.firstName} {profileData.lastName}</h2>
        <p className="profile-info">User Name: {profileData.userName}</p>
        <p className="profile-info">Gender: {profileData.gender}</p>
        <p className="profile-info">Current Role: {profileData.role}</p>
        <p className="profile-info">Current Organisation: {profileData.organization}</p>
        <p className="profile-info">Current Industry: {profileData.industry}</p>
        <p className="profile-info">Total years of experience: {profileData.experience}</p>
      </div>
      <div className="profile-description">
        <p>{profileData.bio}</p>
      </div>
      <div className="profile-section">
        <div className="profile-section-header">
          <h3 className="profile-section-title">Social Media Handles</h3>
        </div>
        <div className="profile-social-media">
          <img src="src/images/img.jpg" alt="LinkedIn" className="profile-social-media-icon" />
          <span className="profile-social-media-text">LinkedIn</span>
        </div>
        <a href={profileData.socialLinks} className="profile-social-media-link">
          {profileData.socialLinks}
        </a>
      </div>
      <div className="profile-section">
        <div className="profile-section-header">
          <h3 className="profile-section-title">Domain, Topics & Skills</h3>
          <button onClick={() => handleEditClick('domain')} className="profile-edit-button">
            Edit
          </button>
        </div>
        <div className="profile-info">Domain: {domainData.domain}</div>
        <div className="profile-tags">
          {domainData.topics.map((topic, index) => (
            <span key={index} className="profile-tag">
              {topic}
            </span>
          ))}
        </div>
        <div className="profile-tags">
          {domainData.skills.map((skill, index) => (
            <span key={index} className="profile-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-section-header">
          <h3 className="profile-section-title">Work Experience</h3>
          <button onClick={() => handleEditClick('work')} className="profile-edit-button">
            Edit
          </button>
        </div>
        <div className="profile-info">{workData.position}</div>
        <div className="profile-info">Role: {workData.role}</div>
        <div className="profile-info">Duration: {workData.duration}</div>
        <div className="profile-info">Responsibilities:</div>
        <ul className="profile-list">
          {workData.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
      <div className="profile-section">
        <div className="profile-section-header">
          <h3 className="profile-section-title">Education Details</h3>
          <button onClick={() => handleEditClick('education')} className="profile-edit-button">
            Edit
          </button>
        </div>
        <div className="profile-info">Degree: {educationData.degree}</div>
        <div className="profile-info">University: {educationData.university}</div>
        <div className="profile-info">Graduation Year: {educationData.graduationYear}</div>
        <div className="profile-info">Achievements:</div>
        <ul className="profile-list">
          {educationData.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
      {showSideWindow && renderEditWindow()}
    </div>
  );
};

export default Profile;

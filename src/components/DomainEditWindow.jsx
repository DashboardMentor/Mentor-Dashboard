import React, { useState } from 'react';
import './DomainEditWindow.css';

const DomainEditWindow = ({ data, handleSave, handleClose }) => {
  const [domain, setDomain] = useState(data.domain);
  const [selectedTopics, setSelectedTopics] = useState(data.topics);
  const [selectedSkills, setSelectedSkills] = useState(data.skills);

  const domains = ['Engineering, Technology & Data', 'Science', 'Arts', 'Business'];
  const topics = ['Ace Engineering Entrance Exams', 'Change careers', 'Change jobs', 'Crack Hackathons and Coding Challenges', 'Get a raise'];
  const skills = ['Linux', 'Agile', 'Algorithms', 'Analytics', 'Architecture', 'Artificial Intelligence'];

  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };

  const handleTopicChange = (event) => {
    const value = event.target.value;
    if (selectedTopics.includes(value)) {
      setSelectedTopics(selectedTopics.filter(topic => topic !== value));
    } else if (selectedTopics.length < 5) {
      setSelectedTopics([...selectedTopics, value]);
    }
  };

  const handleSkillChange = (event) => {
    const value = event.target.value;
    if (selectedSkills.includes(value)) {
      setSelectedSkills(selectedSkills.filter(skill => skill !== value));
    } else if (selectedSkills.length < 10) {
      setSelectedSkills([...selectedSkills, value]);
    }
  };

  const handleSaveClick = () => {
    handleSave({
      domain,
      topics: selectedTopics,
      skills: selectedSkills,
    });
  };

  return (
    <div className="side-window">
      <div className="side-window-header">
        <h1>Domain, Topics & Skills</h1>
        <button onClick={handleClose} className="side-window-close-button">&times;</button>
      </div>
      <div>
        <label>Domain</label>
        <select className="dropdown" value={domain} onChange={handleDomainChange}>
          <option value="" disabled>Choose domain</option>
          {domains.map((domainOption, index) => (
            <option key={index} value={domainOption}>{domainOption}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Topics (3/5)</label>
        <select className="dropdown" value="" onChange={handleTopicChange}>
          <option value="" disabled>Choose topics</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic}>{topic}</option>
          ))}
        </select>
        <div className="selected-items">
          {selectedTopics.map((topic, index) => (
            <div key={index} className="selected-item">
              {topic} <button className="remove-button" onClick={() => setSelectedTopics(selectedTopics.filter(t => t !== topic))}>x</button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label>Skills (1/10)</label>
        <select className="dropdown" value="" onChange={handleSkillChange}>
          <option value="" disabled>Choose skills</option>
          {skills.map((skill, index) => (
            <option key={index} value={skill}>{skill}</option>
          ))}
        </select>
        <div className="selected-items">
          {selectedSkills.map((skill, index) => (
            <div key={index} className="selected-item">
              {skill} <button className="remove-button" onClick={() => setSelectedSkills(selectedSkills.filter(s => s !== skill))}>x</button>
            </div>
          ))}
        </div>
      </div>
      <div className="button-group">
        <button onClick={handleClose} className="close-button1">Close</button>
        <button onClick={handleSaveClick} className="submit-button">Save</button>
      </div>
    </div>
  );
};

export default DomainEditWindow;

import React, { useState } from 'react';
import '../Styles/Profile.css';
import profilePhoto from '../images/photo.jpg'; // Chemin vers votre photo

const profileData = {
  name: "Nom Prénom",
  title: "Freelancer",
  description: "Passionate about computer science and currently a PhD student in cybersecurity.",
  education: [
    "11/2024: PhD Student in cybersecurity for Smart Cities, Hassan II University - Faculty of Sciences Ain Chock",
    "2022 - 2024: Master's Degree in Computer Science and Internet Engineering, Hassan II University - Faculty of Sciences Ain Chock",
    "2020 - 2022: Bachelor's Degree in Mathematics and Computer Science, specialization in Networks and Systems",
    "2018 - 2020: International Baccalaureate Diploma, French Option, Mathematics, Lycée IBN AL YASSAMINE"
  ],
  skills: [
    "Python", "C", "C++", "JAVA", "C#", 
    "Web Development", "DevOps", "Linux"
  ],
  contact: {
    email: "email@example.com",
    phone: "+123456789"
  }
};


function Profile() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <p>{profileData.description}</p>;
      case 'education':
        return (
          <ul>
            {profileData.education.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );
      case 'skills':
        return (
          <ul>
            {profileData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        );
      case 'contact':
        return (
          <div>
            <p>Email: {profileData.contact.email}</p>
            <p>Phone: {profileData.contact.phone}</p>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <nav className="sidebar">
        <h2>{profileData.name}</h2>
        <h3>{profileData.title}</h3>
        <button onClick={() => setActiveSection('about')}>About</button>
        <button onClick={() => setActiveSection('education')}>Education</button>
        <button onClick={() => setActiveSection('skills')}>Skills</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      </nav>
      <div className="profile-card">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <div className="section-content">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default Profile;
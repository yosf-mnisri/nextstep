import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import '../Styles/Profile.css';
import profilePhoto from '../images/photo.jpg';

const profileData = {
  name: "Pr. Youssef Elmnisri",
  title: "PhD Researcher",
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
  const { t } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return (
          <>
            <h4>{t('about')}</h4>
            <p>{profileData.description}</p>
          </>
        );
      case 'education':
        return (
          <>
            <h4>{t('education')}</h4>
            <ul>
              {profileData.education.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        );
      case 'skills':
        return (
          <>
            <h4>{t('skills')}</h4>
            <ul>
              {profileData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        );
      case 'contact':
        return (
          <>
            <h4>{t('contact')}</h4>
            <p>{t('email')}: {profileData.contact.email}</p>
            <p>{t('phone')}: {profileData.contact.phone}</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container" dir={isRTL ? 'rtl' : 'ltr'}>
      <nav className="sidebar">
        <h2>{profileData.name}</h2>
        <h3>{t('phdResearcher')}</h3>
        <button className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection('about')}>
          {t('about')}
        </button>
        <button className={activeSection === 'education' ? 'active' : ''} onClick={() => setActiveSection('education')}>
          {t('education')}
        </button>
        <button className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>
          {t('skills')}
        </button>
        <button className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>
          {t('contact')}
        </button>
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

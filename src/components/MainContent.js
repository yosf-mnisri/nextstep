import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function MainContent() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleButtonClick = (section) => {
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <main>
      <h2>{t('mainContent.journeyTitle')}</h2>
      <p>{t('mainContent.journeyDescription')}</p>

      <div className="button-container">
        <button onClick={() => handleButtonClick('Profile')}>{t('profile')}</button>
        <button onClick={() => handleButtonClick('Jobs')}>{t('jobs')}</button>
        <button onClick={() => handleButtonClick('Stages')}>{t('stages')}</button>
        <button onClick={() => handleButtonClick('Concours')}>{t('concours')}</button>
      </div>
    </main>
  );
}

export default MainContent;

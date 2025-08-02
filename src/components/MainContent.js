import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    navigate(`/${section.toLowerCase()}`);
  };

  return (
    <main>
      <h2>Your Journey Begins Here</h2>
      <p>This is where you can explore various opportunities!</p>
      <div className="button-container">
        <button onClick={() => handleButtonClick('Profile')}>Profile</button>
        <button onClick={() => handleButtonClick('Jobs')}>Jobs</button>
        <button onClick={() => handleButtonClick('Stages')}>Stages</button>
        <button onClick={() => handleButtonClick('Concours')}>Concours</button>
      </div>
    </main>
  );
}

export default MainContent;
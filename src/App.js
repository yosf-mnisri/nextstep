import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import './App.css';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import Stages from './components/Stages';
import Concours from './components/Concours';
import VisitCounter from './components/VisitCounter';
import LoginPage from './components/LoginPage';

function App() {
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userId = 'user123';

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router basename="/nextstep">
      <div className="App">
        {!isLoggedIn ? (
          <LoginPage onLogin={setIsLoggedIn} />
        ) : (
          <>
            {/* Langue selector */}
            <div style={{
              display: 'flex',
              justifyContent: i18n.language === 'ar' ? 'flex-start' : 'flex-end',
              padding: '1rem'
            }}>
              <label htmlFor="lang-select" style={{ marginRight: '0.5rem' }}>
                {t('language')}:
              </label>
              <select
                id="lang-select"
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ar">العربية</option>
              </select>
            </div>

            <VisitCounter userId={userId} />
            <Header />

            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <MainContent />
                      <VisitCounter userId={userId} />
                    </>
                  }
                />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Jobs" element={<Jobs />} />
                <Route path="/Stages" element={<Stages />} />
                <Route path="/Concours" element={<Concours />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>

            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

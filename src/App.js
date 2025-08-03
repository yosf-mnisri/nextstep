import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import Stages from './components/Stages';
import Concours from './components/Concours';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Stages" element={<Stages />} />
            <Route path="/Concours" element={<Concours />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from 'react'; // Assurez-vous qu'il n'y a qu'une seule importation
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Jobs from './components/Jobs';
import Stages from './components/Stages';
import Concours from './components/Concours';
import VisitCounter from './components/VisitCounter'; // Importez le composant VisitCounter

function App() {
  const userId = 'user123'; // Remplacez par l'ID de l'utilisateur connecté

  return (
    <Router basename="/nextstep">
      <div className="App">
                        <VisitCounter userId={userId} /> {/* Affiche le compteur uniquement sur la page d'accueil */}

        <Header  />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <MainContent />
                <VisitCounter userId={userId} /> {/* Affiche le compteur uniquement sur la page d'accueil */}
              </>
            } />
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
import React, { useState } from 'react';
import '../Styles/Jobs.css'; // Assurez-vous d'avoir un fichier CSS pour le style

const jobListings = [
  // Exemple d'offres d'emploi
  { id: 1, title: "Développeur Frontend", description: "Travaillez sur des projets passionnants." },
  { id: 2, title: "Développeur Backend", description: "Construisez des API robustes." },
  { id: 3, title: "Designer UI/UX", description: "Créez des expériences utilisateur exceptionnelles." },
  { id: 4, title: "Chef de Projet", description: "Gérez des équipes et des projets." },
  { id: 5, title: "Analyste de Données", description: "Analysez des données pour des insights." },
  { id: 6, title: "Développeur Fullstack", description: "Travaillez sur des applications complètes." },
  { id: 7, title: "Ingénieur DevOps", description: "Optimisez les opérations et le déploiement." },
  // Ajoutez d'autres offres si nécessaire
];

function Jobs() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // Calculer les indices pour la pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobListings.length / jobsPerPage);

  return (
    <div className="jobs-container">
      <h1>Offres d'Emploi</h1>
      <div className="job-listings">
        {currentJobs.map(job => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Précédent
        </button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
      <div className="ads-section">
        <h2>Annonces</h2>
        {/* Ici, vous pouvez intégrer Google Ads */}
        <iframe
          src="https://www.profitableratecpm.com/ifvpz5m6s?key=7facd57b8b8c59971c30b164d05302e5"
          width="100%"
          height="250"
          title="Google Ads"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Jobs;
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
      <div className="ads-container">

  <div className="ads-section">
    <div className="ad" style={{ width: '60px' }}>
      <a href="https://beta.publishers.adsterra.com/referral/3mhu5DtZSq" rel="nofollow">
        <img 
          alt="Annonce 1" 
          src="https://landings-cdn.adsterratech.com/referralBanners/png/80%20x%2030%20px.png" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </a>
    </div>
     
   
    
  </div>
</div>
    
  

 
 
  

    </div>
  );
}

export default Jobs;
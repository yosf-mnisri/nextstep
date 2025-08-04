import React, { useState } from 'react';
import '../Styles/Stages.css'; // Assurez-vous d'avoir un fichier CSS pour le style

const stageListings = [
  // Exemple d'offres de stages
  { id: 1, title: "Stage Développeur Frontend", description: "Contribuez à des projets web." },
  { id: 2, title: "Stage Développeur Backend", description: "Participez au développement des API." },
  { id: 3, title: "Stage Designer UI/UX", description: "Aidez à concevoir des interfaces utilisateur." },
  { id: 4, title: "Stage Chef de Projet Junior", description: "Assistez à la gestion de projets." },
  { id: 5, title: "Stage Analyste de Données", description: "Effectuez des analyses de données." },
  { id: 6, title: "Stage Développeur Fullstack", description: "Participez au développement de solutions complètes." },
  { id: 7, title: "Stage Ingénieur DevOps", description: "Apprenez à optimiser les déploiements." },
  // Ajoutez d'autres stages si nécessaire
];

function Stages() {
  const [currentPage, setCurrentPage] = useState(1);
  const stagesPerPage = 6;

  // Calcul des indices pour la pagination
  const indexOfLastStage = currentPage * stagesPerPage;
  const indexOfFirstStage = indexOfLastStage - stagesPerPage;
  const currentStages = stageListings.slice(indexOfFirstStage, indexOfLastStage);

  const totalPages = Math.ceil(stageListings.length / stagesPerPage);

  return (
    <div className="stages-container">
      <h1>Offres de Stages</h1>
      <div className="stage-listings">
        {currentStages.map(stage => (
          <div key={stage.id} className="stage-card">
            <h2>{stage.title}</h2>
            <p>{stage.description}</p>
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
        {/* Intégration des annonces Google Ads */}
        <iframe
          src="https://www.profitableratecpm.com/b9gz1b6sx?key=e1c5ad83639643368d0bda4e813f4875"
          width="100%"
          height="250"
          title="Google Ads"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Stages;
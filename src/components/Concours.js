import React, { useState } from 'react';
import '../Styles/Concours.css'; 

const concoursListings = [
  { id: 1, title: "Concours de Développement Web", description: "Participez au développement de projets innovants." },
  { id: 2, title: "Concours de Design", description: "Montrez vos compétences en design graphique." },
  { id: 3, title: "Concours d'Ingénierie", description: "Résolvez des défis techniques." },
  { id: 4, title: "Concours de Science", description: "Faites preuve de créativité scientifique." },
  { id: 5, title: "Concours d'Innovation", description: "Proposez des idées novatrices." },
  { id: 6, title: "Concours de Mathématiques", description: "Défiez vos compétences en mathématiques." },
  { id: 7, title: "Concours de Programmation", description: "Participez à des compétitions de code." },
];

function Concours() {
  const [currentPage, setCurrentPage] = useState(1);
  const concoursPerPage = 6;

  const indexOfLastConcours = currentPage * concoursPerPage;
  const indexOfFirstConcours = indexOfLastConcours - concoursPerPage;
  const currentConcours = concoursListings.slice(indexOfFirstConcours, indexOfLastConcours);
  const totalPages = Math.ceil(concoursListings.length / concoursPerPage);

  return (
    <div className="concours-container">
      <h1>Offres de Concours</h1>
      <div className="concours-listings">
        {currentConcours.map(concours => (
          <div key={concours.id} className="concours-card">
            <h2>{concours.title}</h2>
            <p>{concours.description}</p>
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
        <iframe
          src="https://www.profitableratecpm.com/b9gz1b6sx?key=e1c5ad83639643368d0bda4e813f4875"
          width="100%"
          height="250"
          title="Adsterra Ads"
          style={{ border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Concours;
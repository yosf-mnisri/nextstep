import React, { useEffect, useState } from 'react';
import '../Styles/VisitCounter.css'; // Assurez-vous que le chemin est correct

const VisitCounter = ({ userId }) => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await fetch(`http://localhost:5000/visits/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVisitCount(data.visits);
      } catch (error) {
        console.error('Error fetching visits:', error);
      }
    };

    fetchVisits();

    const incrementVisits = async () => {
      try {
        await fetch(`http://localhost:5000/visits/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.error('Error incrementing visits:', error);
      }
    };

    incrementVisits();
  }, [userId]);

  return (
    <div className="visit-counter">
      <div>Nombre de visites :</div>
      <div>{visitCount}</div> {/* Affichez le nombre de visites ici */}
    </div>
  );
};

export default VisitCounter;
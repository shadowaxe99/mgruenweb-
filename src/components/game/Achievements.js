import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    // TODO: Fetch achievements data from the backend
    setAchievements([
      { title: 'First Win', description: 'Win your first game.' },
      { title: 'High Roller', description: 'Accumulate 10,000 points.' },
      { title: 'Veteran', description: 'Play 100 games.' }
    ]);
  }, []);

  return (
    <div className='achievements'>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>
            <strong>{achievement.title}</strong>: {achievement.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;

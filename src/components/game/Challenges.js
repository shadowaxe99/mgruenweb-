import React, { useState, useEffect } from 'react';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    // TODO: Fetch challenges data from the backend
    setChallenges([
      { id: 1, name: 'Complete 5 Mini-Games', reward: 100 },
      { id: 2, name: 'Earn 1000 Points', reward: 200 },
      { id: 3, name: 'Win a Game Against a Top Player', reward: 500 }
    ]);
  }, []);

  const completeChallenge = (challengeId) => {
    // TODO: Mark challenge as completed through the backend
    console.log(`Completed challenge with id: ${challengeId}`);
  };

  return (
    <div className='challenges'>
      <h2>Challenges</h2>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            {challenge.name} - Reward: {challenge.reward} points
            <button onClick={() => completeChallenge(challenge.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;

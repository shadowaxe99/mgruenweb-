import React, { useState, useEffect } from 'react';

const Quests = () => {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    // TODO: Fetch quests data from the backend
    setQuests([
      { id: 1, title: 'Beginner Explorer', description: 'Complete the tutorial.', reward: 50 },
      { id: 2, title: 'Social Butterfly', description: 'Make 5 new connections.', reward: 100 },
      { id: 3, title: 'Entrepreneur', description: 'Start your first project.', reward: 150 }
    ]);
  }, []);

  const completeQuest = (questId) => {
    // TODO: Mark quest as completed through the backend
    console.log(`Completed quest with id: ${questId}`);
  };

  return (
    <div className='quests'>
      <h2>Quests</h2>
      <ul>
        {quests.map((quest) => (
          <li key={quest.id}>
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
            <p>Reward: {quest.reward} points</p>
            <button onClick={() => completeQuest(quest.id)}>Complete Quest</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quests;

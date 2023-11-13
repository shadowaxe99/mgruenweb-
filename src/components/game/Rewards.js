import React from 'react';

const Rewards = ({ rewardsData, onClaimReward }) => {
  return (
    <div className='rewards'>
      <h2>Rewards</h2>
      {rewardsData.map((reward, index) => (
        <div key={index} className='reward'>
          <h3>{reward.title}</h3>
          <p>{reward.description}</p>
          <button onClick={() => onClaimReward(reward.id)}>Claim</button>
        </div>
      ))}
    </div>
  );
};

export default Rewards;

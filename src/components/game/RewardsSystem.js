import React, { useState } from 'react';

const RewardsSystem = ({ points, onRedeemReward }) => {
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Exclusive Content', cost: 100 },
    { id: 2, name: 'One-on-One Session', cost: 500 },
    // More rewards can be added here
  ]);

  const redeemReward = (rewardId) => {
    const reward = rewards.find((r) => r.id === rewardId);
    if (reward && points >= reward.cost) {
      onRedeemReward(reward);
      // Deduct points and update rewards list logic will go here
    }
  };

  return (
    <div className='rewards-system'>
      <h2>Rewards</h2>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id}>
            <span>{reward.name} - {reward.cost} Points</span>
            <button onClick={() => redeemReward(reward.id)} disabled={points < reward.cost}>Redeem</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsSystem;

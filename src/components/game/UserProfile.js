import React from 'react';

const UserProfile = ({ userData }) => {
  return (
    <div className='user-profile'>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Points:</strong> {userData.points}</p>
      <p><strong>Achievements:</strong> {userData.achievements.join(', ')}</p>
    </div>
  );
};

export default UserProfile;

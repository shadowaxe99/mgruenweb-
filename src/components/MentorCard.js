import React from 'react';

const MentorCard = ({ mentor }) => {
  return (
    <div className='mentor-card'>
      <img src={mentor.imageUrl} alt={mentor.name} />
      <div className='mentor-info'>
        <h3>{mentor.name}</h3>
        <p>{mentor.description}</p>
        <button>Book Session</button>
      </div>
    </div>
  );
};

export default MentorCard;

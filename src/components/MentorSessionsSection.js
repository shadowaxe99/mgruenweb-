import React, { useState } from 'react';
import MentorSessionCard from './MentorSessionCard';

const sessionsData = [
  {
    id: 1,
    title: 'One-on-One Mentorship',
    description: 'Personalized mentorship session to take your career to the next level.',
    price: 299,
    imageUrl: 'mentor-session-1.jpg'
  },
  // ... other sessions
];

const MentorSessionsSection = () => {
  const [sessions] = useState(sessionsData);

  return (
    <div className='mentor-sessions-section'>
      <h1>Book a Mentor Session</h1>
      <div className='session-list'>
        {sessions.map(session => (
          <MentorSessionCard key={session.id} session={session} />
        ))}
      </div>
    </div>
  );
};

export default MentorSessionsSection;

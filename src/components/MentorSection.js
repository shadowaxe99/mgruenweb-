import React from 'react';
import MentorCard from './MentorCard';

const MentorSection = ({ mentors }) => {
  return (
    <section className='mentor-section'>
      <h2>Book a Mentor Session</h2>
      <div className='mentor-grid'>
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </section>
  );
};

export default MentorSection;

import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className='course-card'>
      <img src={course.imageUrl} alt={course.title} />
      <div className='course-info'>
        <h3>{course.title}</h3>
        <p>{course.description}</p>
        <button>Enroll Now</button>
      </div>
    </div>
  );
};

export default CourseCard;

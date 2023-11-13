import React from 'react';
import CourseCard from './CourseCard';

const CourseSection = ({ courses }) => {
  return (
    <section className='course-section'>
      <h2>Explore Courses</h2>
      <div className='course-grid'>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CourseSection;

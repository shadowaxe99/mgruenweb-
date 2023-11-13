import React from 'react';
import CourseCard from './CourseCard';

const CoursesSection = ({ courses }) => {
  return (
    <section className='courses-section'>
      <h2>Explore Courses</h2>
      <div className='course-grid'>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;

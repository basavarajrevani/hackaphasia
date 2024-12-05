import { useState } from 'react';
import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';
import CourseFilters from '../components/courses/CourseFilters';

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleFilterChange = (filters) => {
    let result = courses;

    if (filters.category) {
      result = result.filter(course => course.category === filters.category);
    }
    if (filters.difficulty) {
      result = result.filter(course => course.difficulty === filters.difficulty);
    }
    if (filters.language) {
      result = result.filter(course => course.language === filters.language);
    }

    setFilteredCourses(result);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Our Courses</h1>
      
      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="hidden lg:block">
          <CourseFilters onFilterChange={handleFilterChange} />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
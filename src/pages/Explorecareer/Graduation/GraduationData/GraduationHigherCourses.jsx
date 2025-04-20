import React from "react";

function GraduationHigherCourses() {
  const courses = [
    { name: "Master of Business Administration (MBA)", duration: "2 years", description: "Expand your business acumen with a strategic focus." },
    { name: "Master of Science (MSc)", duration: "2 years", description: "Dive into research and specialized scientific fields." },
    { name: "Master of Arts (MA)", duration: "2 years", description: "Explore advanced studies in humanities and social sciences." },
    { name: "Master of Technology (MTech)", duration: "2 years", description: "Advance your engineering skills with cutting-edge technology." },
    { name: "Postgraduate Diploma", duration: "1 year", description: "Gain specialized knowledge in a shorter time frame." },
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 text-center">Explore Higher Education Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-auto">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <p className="text-gray-600">{course.duration}</p>
            <p className="text-gray-700 mt-2">{course.description}</p>
            <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GraduationHigherCourses;

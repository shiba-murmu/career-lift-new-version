import React from "react";

function GraduationHigherCourses() {
  const courses = [
    { name: "Master of Business Administration (MBA)", duration: "2 years" },
    { name: "Master of Science (MSc)", duration: "2 years" },
    { name: "Master of Arts (MA)", duration: "2 years" },
    { name: "Master of Technology (MTech)", duration: "2 years" },
    { name: "Postgraduate Diploma", duration: "1 year" },
  ];

  return (
    <div>
      {/* Available Courses After Graduation</h2> */}
      <span style={{backgroundColor: 'Green'}}>Available courses after graduation</span>
      <ul className="bg-red-600">
        {courses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GraduationHigherCourses;

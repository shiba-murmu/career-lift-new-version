import React from 'react'

function About() {
  /**
   * Main function of the page here...
   */
  return (
   <>
    <div className="bg-gray-100 h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-blue-600">About</h1>
        <p className="my-4 text-gray-600">
          Career Lift is an online platform that helps students to find their
          career path. The mission of this platform is to bring students and
          career opportunities together.
        </p>
        <p className="my-4 text-gray-600">
          The platform is designed to help students to explore different career
          paths and find the one that fits them best. The platform also provides
          resources to help students to prepare for their career, such as resume
          and cover letter resources.
        </p>
        <div className="bg-yellow-100 p-4 my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600">Vision</h2>
          <p className="text-gray-600">
            Our vision is to become the most trusted and widely used platform for
            students to find their career path.
          </p>
        </div>
        <div className="bg-green-100 p-4 my-4 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-600">Mission</h2>
          <p className="text-gray-600">
            Our mission is to help students to find their career path by providing
            them with resources and opportunities to explore different career
            paths.
          </p>
        </div>
      </div>
    </div>
   </>
  )
}

export default About;
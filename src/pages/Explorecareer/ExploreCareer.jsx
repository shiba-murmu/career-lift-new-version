import React from "react";

function ExploreCareer() {
  return (
    <>
      <div className="explore-container">
        <div className="explore-header">
          <h1>Explore Career</h1>
          <p>Discover your passion and find a career that makes you happy</p>
        </div>
        <div className="explore-content">
          <div className="explore-card">
            <h2>Software Engineer</h2>
            <p>Build the future of technology</p>
          </div>
          <div className="explore-card">
            <h2>Data Scientist</h2>
            <p>Uncover insights and make data-driven decisions</p>
          </div>
          <div className="explore-card">
            <h2>Graphic Designer</h2>
            <p>Create visually stunning designs</p>
          </div>
          <div className="explore-card">
            <h2>DevOps Engineer</h2>
            <p>Ensure the smooth operation of systems and applications</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .explore-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .explore-header {
          text-align: center;
          margin-bottom: 20px;
        }
        .explore-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .explore-card {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin: 10px;
          width: 300px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export default ExploreCareer;

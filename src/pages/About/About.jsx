import React from 'react'

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-card">
          <h1>About Us</h1>
          <p>
            We are a team of passionate developers who are dedicated to making a
            difference in the world. We believe that technology can be a powerful
            tool for good, and we are committed to using our skills to make a
            positive impact.
          </p>
          <p>
            Our team is made up of experienced developers who are experts in their
            field. We have a strong focus on collaboration and communication, and
            we work closely with our clients to understand their needs and
            develop solutions that meet their goals.
          </p>
        </div>
      </div>
      <style jsx>{`
        .about-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f5f5;
          padding: 20px;
        }

        .about-card {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 10px;
          }
          .about-card {
            padding: 10px;
          }
        }
      `}</style>
    </>
  )
}

export default About
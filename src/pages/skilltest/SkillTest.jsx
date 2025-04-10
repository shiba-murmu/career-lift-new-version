import React from "react";

function SkillTest() {
  return(
    <>
      <div className="skilltest-container" style={{ padding: "20px", maxWidth: "800px", margin: "auto", backgroundColor: "#f5f5f5", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="skilltest-header" style={{ marginBottom: "20px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "bold", color: "#333" }}>Skill Test</h1>
        </div>
        <div className="skilltest-body" style={{ fontFamily: "'Raleway', sans-serif", color: "#666" }}>
          <p>
            This is the skill test page. You need to select your skills and
            answer the questions to get the best suitable job based on your
            skills.
          </p>
          <p>
            Please select your skills from the list below and answer the
            questions.
          </p>
          <div className="skilltest-skills" style={{ marginTop: "20px" }}>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>HTML</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>CSS</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>JavaScript</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>React</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>Node JS</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>Express JS</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>Python</li>
              <li style={{ padding: "5px 0", borderBottom: "1px solid #ddd" }}>Java</li>
              <li style={{ padding: "5px 0" }}>SQL</li>
            </ul>
          </div>
          <div className="skilltest-questions" style={{ marginTop: "20px" }}>
            <p>What is your level of expertise in the selected skills?</p>
            <p>What is your preferred programming language?</p>
            <p>What is your preferred job role?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SkillTest;

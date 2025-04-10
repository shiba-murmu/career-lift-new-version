import React from "react";

function Ai() {
  return (
    <>
      <div className="ai-container" style={{ padding: "20px", maxWidth: "800px", margin: "auto", backgroundColor: "#f5f5f5", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <div className="ai-header" style={{ marginBottom: "20px", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "bold", color: "#333" }}>AI Assistant</h1>
        </div>
        <div className="ai-body" style={{ fontFamily: "'Raleway', sans-serif", color: "#666" }}>
          <p>
            This is the AI assistant page. You can ask any question and the AI assistant will answer you.
          </p>
          <p>
            Please ask your question and the AI assistant will answer you.
          </p>
        </div>
      </div>
    </>
  );
}

export default Ai;

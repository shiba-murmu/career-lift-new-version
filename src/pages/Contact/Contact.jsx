import React from 'react'

function Contact() {
  return (
   <>
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to contact us.</p>
      <form>
        <label>Name:</label>
        <input type="text" name="name" /><br />
        <label>Email:</label>
        <input type="email" name="email" /><br />
        <label>Message:</label>
        <textarea name="message" rows="4" cols="50"></textarea><br />
        <input type="submit" value="Submit" />
      </form>
    </div>

    <style jsx>{`
      .contact {
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      label {
        display: block;
      }

      input, textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }

      input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `}</style>
   </>
  )
}

export default Contact
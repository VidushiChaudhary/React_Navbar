import React from 'react';

const Contact = () => {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    background: 'linear-gradient(to right, #e0f7fa, #ffffff)',
    color: '#333',
    textAlign: 'center',
    borderRadius: '12px',
    maxWidth: '500px',
    margin: '50px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    boxShadow:"15px 15px 40px skyblue"
      };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    margin: '10px 0',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>Email: contact@example.com</p>
      <p style={paragraphStyle}>Phone: +1 234 567 890</p>
    </div>
  );
};

export default Contact;

import React from 'react'

function about() {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Georgia, serif',
    backgroundColor: '#eafbe7',
    color: '#2e4d3b',
    textAlign: 'center',
    borderRadius: '12px',
    maxWidth: '700px',
    margin: '50px auto',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '30px',
    marginBottom: '20px',
    color: '#2f5d34',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
  };
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About Us</h2>
      <p style={paragraphStyle}>
        Welcome to GreenScape, where we celebrate the beauty and importance of nature. 
        Our mission is to inspire a deeper connection with the natural world through education, conservation, 
        and exploration. Whether you're a seasoned nature lover or just starting your journey, we’re here to 
        guide you toward a more sustainable and enriching lifestyle.
      </p>
    </div>
  );
};

 

export default about

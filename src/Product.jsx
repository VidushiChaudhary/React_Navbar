import React from 'react'

function Product() {
  const containerStyle = {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0fdf4',
    color: '#2f4f4f',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#2e7d32',
  };

  const productGrid = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const nameStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const priceStyle = {
    color: '#388e3c',
    fontSize: '16px',
    fontWeight: 'bold',
  };
  return (
    <div style={containerStyle}>
    <h2 style={headingStyle}>Our Natural Products</h2>
    <div style={productGrid}>
      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
          alt="Aloe Vera Gel"
          style={imageStyle}
        />
        <div style={nameStyle}>Aloe Vera Gel</div>
        <div style={priceStyle}>$12.99</div>
      </div>
      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
          alt="Bamboo Toothbrush"
          style={imageStyle}
        />
        <div style={nameStyle}>Bamboo Toothbrush</div>
        <div style={priceStyle}>$3.49</div>
      </div>
      <div style={cardStyle}>
        <img
          src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
          alt="Indoor Plant"
          style={imageStyle}
        />
        <div style={nameStyle}>Indoor Plant</div>
        <div style={priceStyle}>$15.00</div>
      </div>
    </div>
  </div>
);
};
   


export default Product
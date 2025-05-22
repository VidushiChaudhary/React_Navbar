import React from 'react';
import mitImage from "../assets/img4.jpg";

function Herosection() {
  return (
    <div>
      
      <section className="hero" style={{ position: "relative", width: "100%" }}>
        <img
          src={mitImage}
          alt="MIT Campus"
          className="hero-image"
          style={{
            width: "100%",
            height: "600px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div
          className="hero-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "2.5rem",
            textAlign: "center",
            padding: "0 20px",
            textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
          }}
        >
          "Nature always wears the colors of the spirit."
        </div>
      </section>
    </div>
  );
}

export default Herosection;






import React from 'react';
import TeamworkImage from '../../assets/photos/hands.avif'; // Adjust the path to your image accordingly

const MiddleAbout = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#FAE8D1',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const textSectionStyle = {
    flex: 1,
    maxWidth: '50%',
  };

  const subheadingStyle = {
    color: '#ff4d4d',
    fontSize: '20px',
    marginBottom: '20px',
  };

  const mainHeadingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#1a2a44',
    marginBottom: '20px',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: '#666',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    fontSize: '1.2rem',
    lineHeight: '2',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  };

  const imageSectionStyle = {
    flex: 1,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  const checkmarkStyle = {
    color: '#007bff',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={textSectionStyle}>
        <h4 style={subheadingStyle}>Who we are</h4>
        <h1 style={mainHeadingStyle}>
          Welcome to EIT Limited, your partner in software excellence!
        </h1>
        <p style={descriptionStyle}>
          Delivering superior products, seeking customer recommendations, and
          providing error-free solutions globally for lasting value and competitive
          advantage.
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span>Provide a superior quality product and service
          </li>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span>Aim for customer recommendation
          </li>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span>Deliver market-defining high-quality, error-free solutions
          </li>
          <li style={listItemStyle}>
            <span style={checkmarkStyle}>✔</span>Serve clients around the world
          </li>
        </ul>
      </div>
      <div style={imageSectionStyle}>
        <img
          src={TeamworkImage}
          alt="Teamwork"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default MiddleAbout;

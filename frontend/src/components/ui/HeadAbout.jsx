import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h4 style={styles.subheading}>About Us</h4>
        <h1 style={styles.heading}>Partnering in Quality Assurance, Pioneering in Success</h1>
      </div>
      <div style={styles.emojiContainer}>
        <span role="img" aria-label="smiley" style={styles.emoji}>
          😃
        </span>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003366', // Dark blue background
    height: '70vh',
    padding: '20px',
    color: 'white',
  },
  textContainer: {
    maxWidth: '50%',
  },
  subheading: {
    color: '#ff4d4d', // Red color for 'About Us'
    marginBottom: '20px',
  },
  heading: {
    fontSize: '3rem',
    lineHeight: '1.2',
  },
  emojiContainer: {
    fontSize: '10rem',
  },
  emoji: {
    fontSize: 'inherit',
  },
};

export default App;

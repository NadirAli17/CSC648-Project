import React from 'react';
import jasonImage from '../assets/images/jason-avina.png'; // Import the image

const JasonAvina = () => {
  return (
    <div className="team-member">
      <h1>Jason Avina</h1>
      <h2>Scrum Master</h2>
      <p>Jason is one of the Scrum Masters, ensuring the smooth operation of the team’s processes and workflows.</p>
      <p>I am a graduate student in the Data Science and Artificial Intelligence program here at SFSU. I like working out,
        trading stocks, and am learning Mandarin. 
      </p>
      <img
        src={jasonImage}  // Use the imported image
        alt="Jason Avina"
        style={{ width: '200px', height: 'auto' }} // You can adjust size as needed
      />
    </div>
  );
};

export default JasonAvina;

import React from 'react';
import andrewImage from '../assets/images/andrew-dahlstrom.JPG'; // Import the image

const AndrewDahlstrom = () => {
  return (
    <div className="team-member">
      <h1>Andrew Dahlstrom</h1>
      <h2>Product Owner</h2>
      <p>Andrew is the product owner and oversees the product lifecycle.</p>
      <p>BIO HERE</p>
      <img
        src={andrewImage}  // Use the imported image
        alt="Andrew Dahlstrom"
        style={{ width: '200px', height: 'auto' }} // You can adjust size as needed
      />
    </div>
  );
};

export default AndrewDahlstrom;

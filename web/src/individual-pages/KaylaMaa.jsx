import React from 'react';
import kaylaImg from '../assets/images/kayla-maa.jpg';

const KaylaMaa = () => {
  return (
    <div className="team-member">
      <h1>Kayla Maa</h1>
      <h2>Front-end Lead</h2>
      <p>Kayla leads the front-end development, focusing on delivering a user-friendly interface for the application.</p>
      <p>Hello, I’m currently a senior at SF State, majoring in Computer Science. Outside of school, I enjoy exploring new places and being outdoors alongside my friends! </p>
      { <img
        src={kaylaImg}  // Use the imported image
        alt="Kayla Maa"
        style={{ width: '200px', height: 'auto' }} 
      /> } 
    </div>
  );
};

export default KaylaMaa;

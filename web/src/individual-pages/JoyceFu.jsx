import React from 'react';
import JoyceImg from '../assets/images/JoyceImage.jpeg';


const JoyceFu = () => {
  return (
    <div className="team-member">
      <h1>Joyce Fu</h1>
      <h2>Scrum Master</h2>
      <p>Joyce is a dedicated Scrum Master, facilitating meetings and improving team productivity.</p>
      <p>I'm Joyce from Taiwan. I'm currently a senior majoring in Computer Science at SFSU. In my leisure time, I enjoy going out with friends and indulging in delicious food.</p>
      { <img
        src={JoyceImg}  // Use the imported image
        alt="Joyce Fu"
        style={{ width: '200px', height: 'auto' }} 
      /> } 
    </div>
  );
};

export default JoyceFu;

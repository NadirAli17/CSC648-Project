import React from "react";
import { Link } from "react-router-dom";
import './AboutUs.css'; // Assuming you will create some custom CSS here
import studentImage from './assets/images/placeholder.JPG'; 

const AboutUs = () => {
  const teamMembers = [
    { name: "Jason Avina", role: "Scrum Master", link: "/team/jason-avina" },
    { name: "Joyce Fu", role: "Scrum Master", link: "/team/joyce-fu" },
    { name: "Nadir Ali", role: "Github Master", link: "/team/nadir-ali" },
    { name: "Kayla Maa", role: "Front-end Lead", link: "/team/kayla-maa" },
    { name: "Aidan Bayer-Calvert", role: "Back-end Lead", link: "/team/aidan-bayer-calvert" },
    { name: "Ryan Flannery", role: "Back-end Lead", link: "/team/ryan-flannery" },
    { name: "Andrew Dahlstrom", role: "Product Owner", link: "/team/andrew-dahlstrom" }
  ];

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p className="intro">
        Welcome to our project! We are a group of 7 dedicated team members
        working to create an amazing web application that helps users manage and
        track their career development.
      </p>
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <Link to={member.link} className="team-link">
              View Profile
            </Link>
          </div>
        ))}
      </div>

      {/* Image After the Team Members List */}
      <div className="placeholder-image">
        <img
          src={studentImage}
          alt="Placeholder"
          className="image-placeholder"
          style={{ width: '200px', height: 'auto' }} // You can adjust size as needed
        />
      </div>
    </div>
  );
};

export default AboutUs;

import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Andrew Dahlstrom',
      role: 'Product Owner',
      link: '/team/andrew-dahlstrom',
    },
    { name: 'Jason Avina', role: 'Scrum Master', link: '/team/jason-avina' },
    { name: 'Joyce Fu', role: 'Scrum Master', link: '/team/joyce-fu' },
    { name: 'Nadir Ali', role: 'Github Master', link: '/team/nadir-ali' },
    { name: 'Kayla Maa', role: 'Front-end Lead', link: '/team/kayla-maa' },
    {
      name: 'Aidan Bayer-Calvert',
      role: 'Back-end Lead',
      link: '/team/aidan-bayer-calvert',
    },
    {
      name: 'Ryan Flannery',
      role: 'Back-end Lead',
      link: '/team/ryan-flannery',
    },
  ]

  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to our project! We are a group of 7 dedicated team members
        working to create an amazing web application that helps users manage and
        track their career development.
      </p>
      <h2>Meet Our Team</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>
            <Link to={member.link}>
              <strong>{member.name}</strong>
            </Link>{' '}
            - {member.role}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutUs

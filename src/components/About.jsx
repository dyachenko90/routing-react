import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div>About</div>
      <ul>
        <li><Link to='contacts'>Our Contacts</Link></li>
        <li><Link to='team'>Our Team</Link></li>
      </ul>
      <Outlet>

      </Outlet>
    </>


  )
}

export default About
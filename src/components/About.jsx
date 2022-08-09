import React from 'react';
import Common from './Common';
import photo from "../images/photo4.jpg";

const About = () => {
  return (
    <>
      <Common title="Welcome to about page" btnName="Contact Now" photo={photo} links="/contact" tooltiptitle="Contact with SantoshTech" />
    </>
  )
}

export default About;

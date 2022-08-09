import React from 'react';
import Common from './Common';
import photo from "../images/Photo1.jpg";

const Home = () => {
  return (
    <>
      <Common title="Grow your business with " btnName="Get Started" photo={photo} links="/service" tooltiptitle="GetStarted with SantoshTech"/>
    </>
  )
}

export default Home;

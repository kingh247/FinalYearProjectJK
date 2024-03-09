import React from 'react';
import featureImage from '../assets/logo.jpg'; // Adjust the path and file extension

const AboutUs = () => {
  return (
    <>
      <h1> About Us </h1>
      <div style={{ textAlign: 'center' }}>
        <img
          src={featureImage} 
          alt=""
          style={{ width: '100%', maxWidth: '730px', margin: '0 auto' }}
        />
      </div>
      <div>
        <p>
          Final year student trying to build a generic emcomerce webite that can
          be used for business to compete in the new every growing digital
          market place
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </>
  );
};

export default AboutUs;


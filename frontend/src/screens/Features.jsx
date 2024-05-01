
import React from 'react';
// import featureImage from '../assets/logo.jpg'; // Adjust the path and file extension
import Video from '../assets/video/video.mp4';

const Features = () => {
  return (
    <>
      <h1> Features </h1>
      <div>
        <video
          src={Video}
          autoPlay
          loop
          muted
          style={{ width: '100%', maxWidth: '100%', margin: '0 auto' }}
        />

        {/* <div style={{ textAlign: 'center' }}>
        <img
          src={featureImage}
          alt=""
          style={{ width: '100%', maxWidth: '770px', margin: '0 auto' }}
        /> */}

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

export default Features;

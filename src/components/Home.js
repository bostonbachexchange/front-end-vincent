import React from 'react';
import './Home.css';
import background from '../assets/background.mp4';
import cv from '../assets/cv.pdf';

const Home = () => {
  return (
    <header className="home-header">
      <video autoPlay loop muted className="background-video">
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <button className="cv-button">
          <a href={cv} >CV</a>
        </button>
      </div>
    </header>
  );
};

export default Home;

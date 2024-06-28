import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <header className="home-header">
      <video autoPlay loop muted className="background-video">
        <source src="../assets/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <img src="/assets/logo.png" alt="Vincent Company" className="logo" />
        <button className="cv-button">
          <a href="/assets/cv.pdf" download>CV</a>
        </button>
      </div>
    </header>
  );
};

export default Home;

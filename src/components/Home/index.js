import React from 'react';
import './index.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="home-container">
                <div className="home-content">
                    <h2>I'm <span className="highlight-name">Vamshikrishna</span></h2>
                    <p>Passionate Software developer specializing in solving problems, creating beautiful and functional web applications.</p>
                    <a href="#projects" className="btn">View My Work</a>
                </div>
                <div className="profile-image-container">
                    <img src="https://res.cloudinary.com/dj4p3cswz/image/upload/v1715660118/profile_g37v6y.jpg" alt="Vamshikrishna" className="profile-image" />
                </div>
            </div>
        </section>
    );
};

export default Home;

// src/AboutMe.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './index.css';

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="about-section" id = "about">
      <h1 className={`title ${inView ? 'fade-in' : ''}`}>My Details</h1>
      <div>
      <p className={`info ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.1s' }}><span className='highlight'>Name:</span> Vamshikrishna</p>
      <p className={`info ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.2s' }}><span className='highlight'>Location:</span> Hanamkonda,Telangana,India</p>
      <p className={`info ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.3s' }}><span className='highlight'>Graduation:</span> Rajiv Gandhi University of Knowledge Technologies, Basar. B.Tech. Metallurgical Engineering</p>
      <p className={`info ${inView ? 'fade-in' : ''}`} style={{ animationDelay: '0.4s' }}><span className='highlight'>Email:</span> vamshikrishna.chandu@gmail.com</p>
      </div>
    </section>
  );
};

export default AboutMe;

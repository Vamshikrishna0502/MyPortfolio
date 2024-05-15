import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './index.css';

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.disconnect();  // Stop observing after adding the class
                }
            });
        }, { threshold: 0.1 });

        const section = sectionRef.current;
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            <h2 className="contact-title">Contact Me</h2>
            <p className="description">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me via Linkedin or email.
            </p>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/vamshikrishna05" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon linkedin" />
                </a>
                <a href="https://github.com/Vamshikrishna0502" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon github" />
                </a>
                <a href="mailto:vamshikrishna.chandu@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon email" />
                </a>
            </div>
        </section>
    );
};

export default Contact;

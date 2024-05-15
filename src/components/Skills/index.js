import React, { useEffect, useRef } from 'react';
import './index.css';

const skillsData = [
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '85%' },
    { name: 'Node.js & Express.js', level: '80%' },
    { name: 'HTML & CSS', level: '90%' },
    { name: 'Python', level: '70%' },
    { name: 'Sql', level: '85%' }
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
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
        <section id="skills" className="skills-section" ref={sectionRef}>
            <h2>My Skills</h2>
            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <div className="skill" key={index}>
                        <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}</span>
                        </div>
                        <div className="skill-bar">
                            <div className={`skill-bar-level skill-bar-${index}`} style={{ width: skill.level }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

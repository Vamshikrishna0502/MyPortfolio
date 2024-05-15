import React, { useEffect, useRef } from 'react';
import { HiExternalLink } from "react-icons/hi";
import './index.css';

const projectsData = [
    {
        name: 'NxtWatch App',
        link: 'https://vknxtwatchweb.ccbp.tech/',
        description: 'An application similar to Youtube, where we can watch,save and like videos. We can find categories like trending and gaming. Developed using React.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        name: 'E-com Trendz',
        link: 'https://vknxttrendzapp.ccbp.tech/',
        description: 'It is a E-Commerce website, where we can find different types of products, we can add to cart and order them by payment',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
        name: 'ToDo-list',
        link: 'https://vktodolistapp.ccbp.tech/',
        description: 'An application to make a note of every day todos, which is dynamically developed using JavaScript.',
        techStack: ['JavaScript']
    },
    // Add more projects as needed
];

const Projects = () => {
    const projectCardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        projectCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => {
            if (projectCardsRef.current) {
                projectCardsRef.current.forEach(card => observer.unobserve(card));
            }
        };
    }, []);

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <div
                        className="project-card"
                        key={index}
                        ref={el => projectCardsRef.current[index] = el}
                    >
                        <h3>{project.name}</h3>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project <HiExternalLink/></a>
                        <p>{project.description}</p>
                        <div className="tech-stack">
                            {project.techStack.map((tech, i) => (
                                <span className="tech-item" key={i}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;





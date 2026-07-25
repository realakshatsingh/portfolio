'use client';

import SectionReveal from './SectionReveal';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import './About.css';

const skillCategories = [
  {
    label: 'Languages & Databases',
    skills: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    label: 'Data Analysis',
    skills: ['pandas', 'NumPy', 'scikit-learn', 'mysql-connector-python', 'Statistical Modeling', 'Hypothesis Testing', 'A/B Testing', 'Data Cleaning', 'Data Wrangling'],
  },
  {
    label: 'Data Visualization',
    skills: ['Tableau', 'Excel', 'matplotlib', 'seaborn'],
  },
  {
    label: 'Tools & Cloud',
    skills: ['Git', 'GitHub', 'Docker', 'VS Code', 'PyCharm', 'Jupyter Notebook', 'GCP', 'Azure', 'AWS'],
  },
  {
    label: 'Other',
    skills: ['MS Office Suite', 'Figma (UI/UX Design)', 'Canva'],
  },
  {
    label: 'Certifications',
    skills: [
      { name: 'Data Science Essentials with Python (Cisco)', url: '#' },
      { name: 'Intro to Machine Learning (Kaggle)', url: 'https://www.kaggle.com/learn/certification/darkakky/intro-to-machine-learning' },
      { name: 'Make Data-Driven Decisions (Google)', url: 'https://www.coursera.org/account/accomplishments/verify/TK2SVTTVE5MU' }
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">ABOUT</p>
          <h2 className="section-title">
            About Me.
          </h2>
          <p className="section-subtitle">
            Passionate about turning data into stories and building intelligent systems.
          </p>
        </SectionReveal>

        <div className="about-grid">
          <div className="about-content">
            <SectionReveal delay={0.2} direction="left">
              <div className="about-bio">
                <p className="about-bio-lead">
                  I am a Data Analyst specializing in building robust, data-driven systems. My focus is on extracting meaningful signals from complex datasets and deploying analytical models that solve real-world problems.
                </p>
                <p>
                  With a strong foundation in statistics and Python, I bridge the gap between exploratory data analysis and actionable business insights. I enjoy the challenge of architecting scalable solutions—whether that means crafting interactive dashboards or optimizing end-to-end data pipelines.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a href="/resume.pdf" download="Akshat_Singh_Data_Analyst_Resume.pdf" className="btn-primary">
                    Download Resume
                  </a>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3} direction="up">
              <div className="about-skills">
                {skillCategories.map((category) => (
                  <div key={category.label} className="about-skill-category">
                    <h4 className="about-skill-label">{category.label}</h4>
                    <div className="about-skill-chips">
                      {category.skills.map((skill) => {
                        if (typeof skill === 'string') {
                          return (
                            <span key={skill} className="about-skill-chip bento-panel">
                              {skill}
                            </span>
                          );
                        }
                        
                        return (
                          <a 
                            key={skill.name} 
                            href={skill.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="about-skill-chip bento-panel about-skill-link"
                          >
                            {skill.name}
                            <ExternalLink size={14} className="about-skill-icon" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.4} direction="right" className="about-image-wrapper">
            <div className="about-image-container bento-panel">
              <Image 
                src="/profile.png" 
                alt="Akshat Singh" 
                width={280}
                height={280}
                className="about-image"
                sizes="280px"
                priority
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

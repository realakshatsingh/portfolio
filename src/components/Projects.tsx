'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionReveal from './SectionReveal';
import './Projects.css';

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

const projects = [
  { id: 1, title: 'Delhi Weather Analysis', description: 'Cleaned and analyzed 11 years of Delhi weather data to find temperature, rainfall, and heatwave trends. Built visualizations for monthly and yearly comparisons and generated an automated weather summary.', tags: ['Python', 'NumPy', 'pandas', 'matplotlib', 'Jupyter'], category: 'data', github: 'https://github.com/realakshatsingh/delhi-weather-analysis', liveDemo: '' },
  { id: 2, title: 'Nordic Observatory Dashboard', description: 'Built a Tableau dashboard analyzing 25 years of socioeconomic data across 5 Nordic countries. Synthesized 750+ data points across 6 KPIs (GDP, emissions) to extract regional growth trends.', tags: ['Tableau', 'Data Visualization', 'Dashboard Design'], category: 'visualization', github: '', liveDemo: 'https://public.tableau.com/app/profile/akshat.singh5267/viz/NordicObservatory/Dashboard' },
  { id: 3, title: 'Data Analysis of Cement Pastes', description: 'Built a Python data pipeline to extract data and automate complex modeling. Analyzed multi-variable time-series data to uncover structural and rheological trends. Visualized findings to deliver a comprehensive technical report.', tags: ['Python', 'Excel', 'Statistical Analysis', 'Pandas'], category: 'data', github: 'https://github.com/realakshatsingh/data_analysis_cement', liveDemo: '' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'data', label: 'Data Analysis' },
  { id: 'visualization', label: 'Visualization' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">PORTFOLIO</p>
          <h2 className="section-title">
            Featured Projects.
          </h2>
          <p className="section-subtitle">
            A selection of my recent work in data analysis and visualization.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="projects-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`projects-filter-btn ${
                  activeFilter === filter.id ? 'active' : ''
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="project-card bento-panel"
                >
                  <div
                    className="project-card-cover"
                  />
                  <div className="project-card-content">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.description}</p>
                    <div className="project-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-card-footer">
                      {project.liveDemo && (
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-card-link">
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card-link">
                          <GithubIcon size={16} /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
}

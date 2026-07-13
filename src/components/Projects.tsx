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
  { id: 1, title: 'AI Sentiment Analyzer', description: 'A deep learning model that analyzes customer reviews and social media posts to determine sentiment with 94% accuracy. Built with transformers and fine-tuned on domain-specific data.', tags: ['Python', 'TensorFlow', 'NLP', 'Flask'], category: 'ai', gradient: 'linear-gradient(135deg, #6366f1, #0ea5e9)' },
  { id: 2, title: 'Sales Analytics Dashboard', description: 'Interactive dashboard visualizing 2M+ sales records with real-time KPIs, trend analysis, and predictive forecasting. Reduced reporting time by 60%.', tags: ['Tableau', 'SQL', 'Python', 'Pandas'], category: 'data', gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)' },
  { id: 3, title: 'Stock Price Predictor', description: 'LSTM-based neural network predicting stock prices with 87% directional accuracy. Features real-time data ingestion and automated trading signals.', tags: ['Python', 'PyTorch', 'LSTM', 'Pandas'], category: 'ai', gradient: 'linear-gradient(135deg, #10b981, #6366f1)' },
  { id: 4, title: 'Customer Segmentation Engine', description: 'K-Means clustering pipeline identifying 5 distinct customer personas from behavioral data. Improved targeted marketing ROI by 40%.', tags: ['Python', 'Scikit-learn', 'K-Means', 'Matplotlib'], category: 'data', gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)' },
  { id: 5, title: 'Portfolio Website', description: 'This very website! A modern, performant personal portfolio built with Next.js, featuring MDX blog posts, glassmorphism design, and smooth animations.', tags: ['Next.js', 'TypeScript', 'React', 'MDX'], category: 'web', gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
  { id: 6, title: 'AI Chatbot Assistant', description: 'An intelligent conversational agent powered by LangChain and GPT, capable of answering domain-specific questions with retrieval-augmented generation.', tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI'], category: 'ai', gradient: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'data', label: 'Data Analysis' },
  { id: 'web', label: 'Web' },
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
            A selection of my recent work in data science, AI, and web development.
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
                      <a href="#" className="project-card-link">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      <a href="#" className="project-card-link">
                        <GithubIcon size={16} /> GitHub
                      </a>
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

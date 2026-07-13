'use client';

import SectionReveal from './SectionReveal';
import './Journey.css';

const timeline = [
  {
    date: '2022 - 2026',
    title: 'Bachelor of Technology (B.Tech)',
    org: 'Indian Institute of Technology (IIT), Delhi',
    desc: 'Pursuing undergraduate degree at India\'s premier engineering institute, combining rigorous analytical problem solving with advanced computational methods.',
  },
  {
    date: 'Nov 2022 - Nov 2025',
    title: 'Founder & CEO',
    org: 'TraBii',
    desc: 'Founded an AI-powered platform for seamless event discovery. Gained deep experience in full-stack development, AI integration, and product iteration. Recognized and supported by Google for Startups and Microsoft Founders Hub.',
  },
  {
    date: '2021',
    title: 'Class 12 (PCM)',
    org: 'St. Mary\'s Inter College',
    desc: 'Graduated with an outstanding academic record, achieving 98.2% in the board examinations with a focus on Physics, Chemistry, and Mathematics.',
  },
  {
    date: '2019',
    title: 'Class 10',
    org: 'St. Mary\'s Inter College',
    desc: 'Secured 98.2% in the high school board examinations, building a strong foundational aptitude for analytical and quantitative subjects.',
  },
];


export default function Journey() {
  return (
    <section id="journey" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">EXPERIENCE</p>
          <h2 className="section-title">
            My Journey.
          </h2>
          <p className="section-subtitle">
            A timeline of my education, experience, and the impact I've made.
          </p>
        </SectionReveal>

        <div className="timeline-container">
          <div className="timeline-line" />
          
          {timeline.map((item, index) => (
            <SectionReveal key={index} delay={index * 0.15}>
              <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot" />
                <div className="timeline-card bento-panel">
                  <span className="timeline-date">{item.date}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <h4 className="timeline-org">{item.org}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>


      </div>
    </section>
  );
}

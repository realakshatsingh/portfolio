'use client';

import SectionReveal from './SectionReveal';
import './Journey.css';

const timeline = [
  {
    date: 'Jun 2026 - Present',
    title: 'Vice President, Public Relations',
    org: 'Janakpuri Toastmasters',
    desc: 'Built an automated lead generation system using forms and email outreach, and optimized conversion.',
  },
  {
    date: 'Oct 2022 - Aug 2026',
    title: 'Bachelor of Technology in Civil Engineering',
    org: 'Indian Institute of Technology Delhi',
    desc: 'Pursuing undergraduate degree at India\'s premier engineering institute, combining rigorous analytical problem solving with advanced computational methods.',
  },
  {
    date: 'Oct 2023 - Nov 2025',
    title: 'Founder & Data Analyst',
    org: 'TraBii Entertainment Private Limited',
    desc: 'Built KPI dashboards and resolved bottlenecks, increasing onboarding conversion by 19%. Managed end-to-end data workflows using MySQL and integrated Python pipelines. Scaled to 150+ users.',
  },
  {
    date: 'Feb 2024 - Mar 2024',
    title: 'Activity Head (Events)',
    org: 'Kaizen Fest, NSS IIT Delhi',
    desc: 'Organized 4 large-scale events end-to-end and acquired guests through 200+ cold emails and social media outreach campaigns.',
  },
  {
    date: 'Sep 2023',
    title: 'Activity Head (Logistics)',
    org: 'Rendezvous, IIT Delhi',
    desc: 'Coordinated logistics and stage setup for 2 major stages at IIT Delhi\'s flagship cultural fest.',
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

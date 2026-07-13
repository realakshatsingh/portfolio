import SectionReveal from './SectionReveal';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="section-container hero-container">
        <SectionReveal delay={0.1}>
          <h1 className="hero-title">
            Akshat Singh.
            <br />
            <span className="hero-title-muted">Data Analyst &<br/>AI Engineer.</span>
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="hero-subtitle">
            I build end-to-end data-driven solutions and intelligent machine learning systems. Currently exploring opportunities in data analytics and AI engineering.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

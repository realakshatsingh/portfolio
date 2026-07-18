'use client';

import { Mail, MapPin, Clock } from 'lucide-react';
import SectionReveal from './SectionReveal';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionReveal>
          <p className="section-label">CONTACT</p>
          <h2 className="section-title">
            Get In Touch.
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </SectionReveal>

        <div className="contact-grid">
          <SectionReveal delay={0.2} direction="left">
            <div className="contact-form-container bento-panel">
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
                <input type="hidden" name="access_key" value="9a18b350-b656-4350-a78a-f097bdcf8da1" />
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required placeholder="What is this regarding?" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required placeholder="Your message here..." />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3} direction="right">
            <div className="contact-info">
              <h3 className="contact-info-heading">Let's work together</h3>
              <p className="contact-info-desc">
                I'm currently exploring new opportunities in Data Analysis and AI/ML Engineering. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <span className="contact-detail-value">contact@realakshatsingh.com</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-value">New Delhi, India</span>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="contact-detail-label">Status</span>
                    <span className="contact-detail-value">Available for Immediate Engagement</span>
                  </div>
                </div>
              </div>

              <div className="contact-highlight bento-panel">
                <p>Prefer a direct message?</p>
                <a href="https://www.linkedin.com/in/realakshatsingh/" target="_blank" rel="noopener noreferrer">
                  Connect with me on LinkedIn →
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

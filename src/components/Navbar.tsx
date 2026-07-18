'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();
  const router = useRouter();

  // Scroll handling: detect scroll position and direction
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Toggle scrolled state for background
        setIsScrolled(currentScrollY > 50);

        lastScrollY = currentScrollY;
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section detection
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'journey', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((href: string) => {
    setIsMenuOpen(false);
    
    if (pathname !== '/') {
      router.push('/' + href);
      return;
    }

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, router]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navbarClasses = [
    'navbar',
    isScrolled ? 'navbar--scrolled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <nav className={navbarClasses}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link href="/" className="navbar__logo">
            <span className="navbar__logo-badge">AS</span>
            <span className="navbar__logo-name">Akshat Singh</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="navbar__links">
            {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    className={`navbar__link ${
                      activeSection === item.href.replace('#', '') ? 'navbar__link--active' : ''
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </button>
                </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className="navbar__cta"
            onClick={() => scrollToSection('#contact')}
          >
            Connect
          </button>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`navbar__overlay ${isMenuOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Panel */}
      <aside className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-header">
          <span className="navbar__mobile-title">Navigation</span>
          <button
            className="navbar__mobile-close"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>
        <nav>
          <ul className="navbar__mobile-nav">
            {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <button
                    className={`navbar__mobile-link ${
                      activeSection === item.href.replace('#', '')
                        ? 'navbar__mobile-link--active'
                        : ''
                    }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.label}
                  </button>
                </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

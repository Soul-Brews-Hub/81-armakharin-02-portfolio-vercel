'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('profile');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['profile', 'cases', 'reports', 'comms'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      const sectionMap: { [key: string]: string } = {
        '1': 'profile',
        '2': 'cases',
        '3': 'reports',
        '4': 'comms'
      };

      if (sectionMap[e.key]) {
        e.preventDefault();
        const element = document.getElementById(sectionMap[e.key]);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`main-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary/95 backdrop-blur-sm border-b border-neon' : 'bg-transparent'
    }`}>
      <nav className="container">
        <div className="nav-container flex items-center justify-between py-4">
          <div className="logo">
            <span className="logo-text text-neon-red font-heading text-xl tracking-wider">
              &gt; FRAUD_DETECT
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu hidden md:flex items-center space-x-8">
            <li>
              <Link
                href="#profile"
                className={`nav-link-neon text-sm tracking-wider transition-all duration-300 ${
                  activeSection === 'profile' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'profile')}
              >
                AGENT PROFILE
              </Link>
            </li>
            <li>
              <Link
                href="#cases"
                className={`nav-link-neon text-sm tracking-wider transition-all duration-300 ${
                  activeSection === 'cases' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'cases')}
              >
                CASE FILES
              </Link>
            </li>
            <li>
              <Link
                href="#reports"
                className={`nav-link-neon text-sm tracking-wider transition-all duration-300 ${
                  activeSection === 'reports' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'reports')}
              >
                INTEL REPORTS
              </Link>
            </li>
            <li>
              <Link
                href="#comms"
                className={`nav-link-neon text-sm tracking-wider transition-all duration-300 ${
                  activeSection === 'comms' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'comms')}
              >
                SECURE COMMS
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-neon-red">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-4 border-t border-neon">
          <ul className="space-y-4">
            <li>
              <Link
                href="#profile"
                className={`nav-link-neon text-sm tracking-wider block py-2 ${
                  activeSection === 'profile' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'profile')}
              >
                AGENT PROFILE
              </Link>
            </li>
            <li>
              <Link
                href="#cases"
                className={`nav-link-neon text-sm tracking-wider block py-2 ${
                  activeSection === 'cases' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'cases')}
              >
                CASE FILES
              </Link>
            </li>
            <li>
              <Link
                href="#reports"
                className={`nav-link-neon text-sm tracking-wider block py-2 ${
                  activeSection === 'reports' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'reports')}
              >
                INTEL REPORTS
              </Link>
            </li>
            <li>
              <Link
                href="#comms"
                className={`nav-link-neon text-sm tracking-wider block py-2 ${
                  activeSection === 'comms' ? 'active text-neon-red' : 'text-secondary'
                }`}
                onClick={(e) => handleNavClick(e, 'comms')}
              >
                SECURE COMMS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
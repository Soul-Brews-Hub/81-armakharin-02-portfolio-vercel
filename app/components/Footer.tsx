'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="main-footer bg-tertiary border-t border-neon">
      <div className="container">
        <div className="footer-content grid md:grid-cols-3 gap-8 py-12">
          <div className="footer-section">
            <h3 className="text-neon-red font-heading text-xl mb-4">SYSTEM STATUS</h3>
            <div className="system-status space-y-2">
              <div className="status-item flex items-center">
                <span className="status-indicator online mr-2"></span>
                <span className="text-secondary text-sm">COMMAND CENTER ONLINE</span>
              </div>
              <div className="status-item flex items-center">
                <span className="status-indicator scanning mr-2"></span>
                <span className="text-secondary text-sm">CONTINUOUS MONITORING</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-neon-red font-heading text-xl mb-4">SECURITY CLEARANCE</h3>
            <div className="space-y-1">
              <p className="text-secondary text-sm">LEVEL 5 - FRAUD DETECTION SPECIALIST</p>
              <p className="text-secondary text-sm">VALID UNTIL: 2025.12.31</p>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="text-neon-red font-heading text-xl mb-4">LAST SYSTEM UPDATE</h3>
            <p id="lastUpdate" className="text-secondary text-sm font-body">
              {currentTime}
            </p>
          </div>
        </div>

        <div className="footer-bottom border-t border-neon/30 pt-6 text-center">
          <p className="text-secondary text-sm font-body">
            &copy; 2024 DIGITAL FRAUD DETECTIVE | ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
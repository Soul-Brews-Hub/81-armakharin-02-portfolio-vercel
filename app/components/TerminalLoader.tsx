'use client';

import { useState, useEffect } from 'react';

export default function TerminalLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 5 seconds to match the terminal animation sequence
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`terminal-loader ${!isVisible ? 'hidden' : ''}`}>
      <div className="terminal-content">
        <div className="terminal-line">INITIALIZING COMMAND CENTER...</div>
        <div className="terminal-line">ACCESSING FRAUD DETECTION DATABASES...</div>
        <div className="terminal-line">LOADING AGENT PROFILE...</div>
        <div className="terminal-line typing">SYSTEMS READY. WELCOME, DETECTIVE.</div>
      </div>
    </div>
  );
}
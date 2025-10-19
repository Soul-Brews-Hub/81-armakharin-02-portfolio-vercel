'use client';

import { useState, useEffect } from 'react';
import TerminalLoader from './components/TerminalLoader';
import Navigation from './components/Navigation';
import AgentProfile from './components/AgentProfile';
import CaseFiles from './components/CaseFiles';
import IntelligenceReports from './components/IntelligenceReports';
import SecureComms from './components/SecureComms';
import Footer from './components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate terminal loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5 seconds to match the original terminal animation

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <TerminalLoader />;
  }

  return (
    <div className="min-h-screen bg-primary">
      <Navigation />
      <main>
        <AgentProfile />
        <CaseFiles />
        <IntelligenceReports />
        <SecureComms />
      </main>
      <Footer />
    </div>
  );
}
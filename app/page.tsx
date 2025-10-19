'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Initialize terminal, matrix rain, and other effects
    initializeTerminal();
    createMatrixRain();
    initializeTypingEffects();
    updateLastUpdateTime();

    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmit);
    }

    return () => {
      if (contactForm) {
        contactForm.removeEventListener('submit', handleFormSubmit);
      }
    };
  }, []);

  return (
    <>
      {/* Terminal Loading Screen */}
      <div id="terminal-loader" className="terminal-loader">
        <div className="terminal-content">
          <div className="terminal-line">INITIALIZING COMMAND CENTER...</div>
          <div className="terminal-line">ACCESSING FRAUD DETECTION DATABASES...</div>
          <div className="terminal-line">LOADING AGENT PROFILE...</div>
          <div className="terminal-line typing">SYSTEMS READY. WELCOME, DETECTIVE.</div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="main-header">
        <nav className="nav-container">
          <div className="logo">
            <span className="logo-text">&gt; FRAUD_DETECT</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#profile" className="nav-link">AGENT PROFILE</a></li>
            <li><a href="#cases" className="nav-link">CASE FILES</a></li>
            <li><a href="#reports" className="nav-link">INTEL REPORTS</a></li>
            <li><a href="#comms" className="nav-link">SECURE COMMS</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Agent Profile Section */}
        <section id="profile" className="section agent-profile">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">AGENT PROFILE</h1>
              <div className="title-line"></div>
            </div>

            <div className="profile-content">
              <div className="profile-text">
                <h2 className="agent-name">Senior Digital Fraud Analyst</h2>
                <p className="agent-tagline">5+ Years Hunting Financial Crime | Building Tools for Detection</p>

                <div className="agent-story">
                  <p>From investigating sophisticated fraud schemes to building the tools that catch them automatically. My journey through financial crime detection has taught me that the best defense combines human expertise with powerful automation.</p>

                  <p>Every day I analyze patterns, hunt anomalies, and develop solutions that stay one step ahead of increasingly sophisticated fraud tactics. Now I'm transitioning my fraud detection expertise into development - building the next generation of fraud detection systems.</p>
                </div>

                <div className="skills-grid">
                  <div className="skill-category">
                    <h3>INVESTIGATION TOOLS</h3>
                    <ul className="skill-list">
                      <li>SQL Pattern Analysis</li>
                      <li>Python Automation</li>
                      <li>Data Visualization</li>
                      <li>Risk Assessment</li>
                    </ul>
                  </div>

                  <div className="skill-category">
                    <h3>TECHNICAL ARSENAL</h3>
                    <ul className="skill-list">
                      <li>Advanced SQL Queries</li>
                      <li>Python Scripting</li>
                      <li>Dashboard Development</li>
                      <li>Process Automation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="profile-visual">
                <div className="data-stream">
                  <div className="stream-line"></div>
                  <div className="stream-line"></div>
                  <div className="stream-line"></div>
                </div>
                <div className="status-panel">
                  <div className="status-item">
                    <span className="status-label">STATUS:</span>
                    <span className="status-value active">ACTIVE</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">CASES SOLVED:</span>
                    <span className="status-value">500+</span>
                  </div>
                  <div className="status-item">
                    <span className="status-label">AUTOMATION RATE:</span>
                    <span className="status-value">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Files Section */}
        <section id="cases" className="section case-files">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">CASE FILES</h1>
              <div className="title-line"></div>
            </div>

            <div className="cases-grid">
              {/* Case 1: Phishing Ring Investigation */}
              <div className="case-card">
                <div className="case-header">
                  <span className="case-id">CASE #001</span>
                  <span className="case-status closed">CLOSED</span>
                </div>
                <h3 className="case-title">Phishing Ring Investigation</h3>
                <p className="case-summary">Developed automated email analysis system that identified and tracked sophisticated phishing campaigns targeting financial institutions.</p>

                <div className="case-tech">
                  <span className="tech-label">TECHNIQUES:</span>
                  <ul className="tech-list">
                    <li>Python Email Parsing</li>
                    <li>Pattern Recognition</li>
                    <li>Network Analysis</li>
                  </ul>
                </div>

                <div className="case-stats">
                  <div className="stat">
                    <span className="stat-label">THREATS NEUTRALIZED:</span>
                    <span className="stat-value">1,247</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">ANALYSIS TIME:</span>
                    <span className="stat-value">-94%</span>
                  </div>
                </div>

                <div className="case-outcome">
                  <span className="outcome-label">RESOLUTION:</span>
                  <p className="outcome-text">Built Python automation tool that reduced manual email analysis time from 4 hours to 15 minutes per case, increasing detection accuracy by 76%.</p>
                </div>
              </div>

              {/* Case 2: Payment Fraud Pattern Analysis */}
              <div className="case-card">
                <div className="case-header">
                  <span className="case-id">CASE #002</span>
                  <span className="case-status active">ACTIVE</span>
                </div>
                <h3 className="case-title">Payment Fraud Pattern Analysis</h3>
                <p className="case-summary">Created advanced SQL-based detection system for identifying sophisticated payment fraud patterns across multiple transaction channels.</p>

                <div className="case-tech">
                  <span className="tech-label">TECHNIQUES:</span>
                  <ul className="tech-list">
                    <li>Advanced SQL Analytics</li>
                    <li>Statistical Analysis</li>
                    <li>Real-time Monitoring</li>
                  </ul>
                </div>

                <div className="case-stats">
                  <div className="stat">
                    <span className="stat-label">PATTERNS IDENTIFIED:</span>
                    <span className="stat-value">34</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">FALSE POSITIVE RATE:</span>
                    <span className="stat-value">2.1%</span>
                  </div>
                </div>

                <div className="case-outcome">
                  <span className="outcome-label">RESOLUTION:</span>
                  <p className="outcome-text">Developed comprehensive SQL dashboard that processes 500K+ transactions daily, identifying suspicious patterns with 98% accuracy.</p>
                </div>
              </div>

              {/* Case 3: Automated Suspicious Activity Detection */}
              <div className="case-card">
                <div className="case-header">
                  <span className="case-id">CASE #003</span>
                  <span className="case-status closed">CLOSED</span>
                </div>
                <h3 className="case-title">Automated Suspicious Activity Detection</h3>
                <p className="case-summary">Engineered intelligent automation platform that continuously monitors and flags suspicious activities across multiple financial systems.</p>

                <div className="case-tech">
                  <span className="tech-label">TECHNIQUES:</span>
                  <ul className="tech-list">
                    <li>Machine Learning Integration</li>
                    <li>API Development</li>
                    <li>Alert Automation</li>
                  </ul>
                </div>

                <div className="case-stats">
                  <div className="stat">
                    <span className="stat-label">SYSTEMS MONITORED:</span>
                    <span className="stat-value">12</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">RESPONSE TIME:</span>
                    <span className="stat-value">&lt;5 sec</span>
                  </div>
                </div>

                <div className="case-outcome">
                  <span className="outcome-label">RESOLUTION:</span>
                  <p className="outcome-text">Built integrated monitoring platform that reduced suspicious activity detection time from hours to seconds while maintaining 99.2% accuracy.</p>
                </div>
              </div>

              {/* Case 4: Transaction Network Analysis */}
              <div className="case-card">
                <div className="case-header">
                  <span className="case-id">CASE #004</span>
                  <span className="case-status active">ACTIVE</span>
                </div>
                <h3 className="case-title">Transaction Network Analysis</h3>
                <p className="case-summary">Designed network analysis tool that maps and visualizes complex transaction relationships to uncover sophisticated fraud networks.</p>

                <div className="case-tech">
                  <span className="tech-label">TECHNIQUES:</span>
                  <ul className="tech-list">
                    <li>Graph Analysis</li>
                    <li>Data Visualization</li>
                    <li>Network Forensics</li>
                  </ul>
                </div>

                <div className="case-stats">
                  <div className="stat">
                    <span className="stat-label">NETWORKS MAPPED:</span>
                    <span className="stat-value">28</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">HIDDEN LINKS FOUND:</span>
                    <span className="stat-value">156</span>
                  </div>
                </div>

                <div className="case-outcome">
                  <span className="outcome-label">RESOLUTION:</span>
                  <p className="outcome-text">Created interactive visualization platform that revealed previously undetectable fraud networks, leading to 3 major investigation breakthroughs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intelligence Reports Section */}
        <section id="reports" className="section intelligence-reports">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">INTELLIGENCE REPORTS</h1>
              <div className="title-line"></div>
            </div>

            <div className="reports-grid">
              {/* Report 1 */}
              <article className="report-card">
                <div className="report-header">
                  <span className="report-date">2024.03.15</span>
                  <span className="report-classification">CLASSIFIED</span>
                </div>
                <h3 className="report-title">SQL Techniques for Financial Crime Detection</h3>
                <p className="report-excerpt">Advanced SQL query patterns that identify sophisticated financial fraud schemes hidden in millions of transactions.</p>

                <div className="report-highlights">
                  <h4>KEY INSIGHTS:</h4>
                  <ul>
                    <li>Window functions for temporal pattern analysis</li>
                    <li>Common table expressions for complex fraud rings</li>
                    <li>Statistical aggregations for anomaly detection</li>
                  </ul>
                </div>

                <div className="report-outcome">
                  <p>Implementation of these techniques increased fraud detection accuracy by 34% across monitored systems.</p>
                </div>
              </article>

              {/* Report 2 */}
              <article className="report-card">
                <div className="report-header">
                  <span className="report-date">2024.02.28</span>
                  <span className="report-classification">CLASSIFIED</span>
                </div>
                <h3 className="report-title">Building Python Automation Tools for Fraud Analysts</h3>
                <p className="report-excerpt">How Python automation transforms fraud investigation workflows from manual processes to intelligent systems.</p>

                <div className="report-highlights">
                  <h4>KEY INSIGHTS:</h4>
                  <ul>
                    <li>API integrations for real-time data collection</li>
                    <li>Machine learning for pattern recognition</li>
                    <li>Automated reporting and alert systems</li>
                  </ul>
                </div>

                <div className="report-outcome">
                  <p>Python automation tools reduced average investigation time by 78% while maintaining detection quality.</p>
                </div>
              </article>

              {/* Report 3 */}
              <article className="report-card">
                <div className="report-header">
                  <span className="report-date">2024.01.10</span>
                  <span className="report-classification">TOP SECRET</span>
                </div>
                <h3 className="report-title">Machine Learning Patterns in Suspicious Activity Monitoring</h3>
                <p className="report-excerpt">Applying ML algorithms to detect subtle patterns in suspicious activity that traditional methods miss entirely.</p>

                <div className="report-highlights">
                  <h4>KEY INSIGHTS:</h4>
                  <ul>
                    <li>Unsupervised learning for anomaly detection</li>
                    <li>Feature engineering for fraud patterns</li>
                    <li>Real-time model deployment strategies</li>
                  </ul>
                </div>

                <div className="report-outcome">
                  <p>ML-based monitoring identified 23 previously unknown fraud patterns, preventing $4.2M in potential losses.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Secure Communications Section */}
        <section id="comms" className="section secure-comms">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">SECURE COMMS</h1>
              <div className="title-line"></div>
            </div>

            <div className="comms-content">
              <div className="comms-intro">
                <h2>INITIATE SECURE COMMUNICATION CHANNEL</h2>
                <p>For collaboration opportunities, fraud detection consulting, or discussing advanced security solutions.</p>
              </div>

              <form className="comms-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">AGENT IDENTIFIER:</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">SECURE CHANNEL:</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">MESSAGE CLASSIFICATION:</label>
                  <select id="subject" name="subject" className="form-select">
                    <option value="consultation">CONSULTATION REQUEST</option>
                    <option value="collaboration">COLLABORATION OPPORTUNITY</option>
                    <option value="speaking">SPEAKING ENGAGEMENT</option>
                    <option value="other">OTHER MATTERS</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">ENCRYPTED MESSAGE:</label>
                  <textarea id="message" name="message" className="form-textarea" rows={6} required></textarea>
                </div>

                <button type="submit" className="comms-submit">
                  <span className="button-text">TRANSMIT MESSAGE</span>
                  <span className="button-icon">&rarr;</span>
                </button>
              </form>

              <div className="comms-status" id="formStatus">
                <div className="status-indicator"></div>
                <span className="status-text">SYSTEMS READY</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SYSTEM STATUS</h3>
              <div className="system-status">
                <div className="status-item">
                  <span className="status-indicator online"></span>
                  <span>COMMAND CENTER ONLINE</span>
                </div>
                <div className="status-item">
                  <span className="status-indicator scanning"></span>
                  <span>CONTINUOUS MONITORING</span>
                </div>
              </div>
            </div>

            <div className="footer-section">
              <h3>SECURITY CLEARANCE</h3>
              <p>LEVEL 5 - FRAUD DETECTION SPECIALIST</p>
              <p>VALID UNTIL: 2025.12.31</p>
            </div>

            <div className="footer-section">
              <h3>LAST SYSTEM UPDATE</h3>
              <p id="lastUpdate">CALCULATING...</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 DIGITAL FRAUD DETECTIVE | ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// JavaScript functions translated to TypeScript
function initializeTerminal() {
  const terminalLoader = document.getElementById('terminal-loader');

  if (terminalLoader) {
    // Start the terminal sequence
    setTimeout(() => {
      hideTerminalLoader();
    }, 5000); // 5 seconds for the full terminal sequence
  }
}

function hideTerminalLoader() {
  const terminalLoader = document.getElementById('terminal-loader');

  if (terminalLoader) {
    terminalLoader.classList.add('hidden');

    // Remove the loader after fade out
    setTimeout(() => {
      terminalLoader.style.display = 'none';
      // Trigger power-on animation for main content
      document.body.classList.add('power-on');
    }, 1000);
  }
}

function createMatrixRain() {
  const matrixContainer = document.createElement('div');
  matrixContainer.className = 'matrix-rain';
  document.body.appendChild(matrixContainer);

  // Create multiple falling columns
  const numberOfColumns = Math.floor(window.innerWidth / 20);

  for (let i = 0; i < numberOfColumns; i++) {
    createMatrixColumn(matrixContainer, i);
  }
}

function createMatrixColumn(container: HTMLElement, index: number) {
  const column = document.createElement('div');
  column.className = 'matrix-column';
  column.style.left = `${index * 20}px`;
  column.style.animationDelay = `${Math.random() * 5}s`;
  container.appendChild(column);
}

function initializeTypingEffects() {
  // Add any additional typing effects if needed
}

function updateLastUpdateTime() {
  const lastUpdateElement = document.getElementById('lastUpdate');
  if (lastUpdateElement) {
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).replace(/\//g, '.').replace(',', '');
    lastUpdateElement.textContent = formattedTime;
  }
}

function handleFormSubmit(e: Event) {
  e.preventDefault();
  const formStatus = document.getElementById('formStatus');
  const statusText = formStatus?.querySelector('.status-text');
  const statusIndicator = formStatus?.querySelector('.status-indicator');

  if (statusText) {
    statusText.textContent = 'TRANSMITTING...';
  }

  if (statusIndicator) {
    statusIndicator.className = 'status-indicator scanning';
  }

  // Simulate form submission
  setTimeout(() => {
    if (statusText) {
      statusText.textContent = 'MESSAGE TRANSMITTED SUCCESSFULLY';
    }

    if (statusIndicator) {
      statusIndicator.className = 'status-indicator online';
    }

    // Reset form
    const form = document.getElementById('contactForm') as HTMLFormElement;
    if (form) {
      form.reset();
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      if (statusText) {
        statusText.textContent = 'SYSTEMS READY';
      }

      if (statusIndicator) {
        statusIndicator.className = 'status-indicator';
      }
    }, 3000);
  }, 2000);
}
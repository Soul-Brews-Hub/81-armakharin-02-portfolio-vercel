export default function AgentProfile() {
  return (
    <section id="profile" className="section agent-profile">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title text-neon-red text-4xl md:text-5xl font-heading">
            AGENT PROFILE
          </h1>
          <div className="title-line"></div>
        </div>

        <div className="profile-content grid md:grid-cols-2 gap-12 items-center">
          <div className="profile-text">
            <h2 className="agent-name text-3xl md:text-4xl font-heading mb-4 text-neon-red-bright">
              Senior Digital Fraud Analyst
            </h2>
            <p className="agent-tagline text-lg text-secondary mb-8 font-body">
              5+ Years Hunting Financial Crime | Building Tools for Detection
            </p>

            <div className="agent-story space-y-4 mb-8">
              <p className="text-secondary leading-relaxed">
                From investigating sophisticated fraud schemes to building the tools that catch them automatically.
                My journey through financial crime detection has taught me that the best defense combines
                human expertise with powerful automation.
              </p>

              <p className="text-secondary leading-relaxed">
                Every day I analyze patterns, hunt anomalies, and develop solutions that stay one step ahead
                of increasingly sophisticated fraud tactics. Now I'm transitioning my fraud detection
                expertise into development - building the next generation of fraud detection systems.
              </p>
            </div>

            <div className="skills-grid grid md:grid-cols-2 gap-8">
              <div className="skill-category">
                <h3 className="text-neon-red font-heading text-xl mb-4">INVESTIGATION TOOLS</h3>
                <ul className="skill-list space-y-2">
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    SQL Pattern Analysis
                  </li>
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Python Automation
                  </li>
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Data Visualization
                  </li>
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Risk Assessment
                  </li>
                </ul>
              </div>

              <div className="skill-category">
                <h3 className="text-neon-red font-heading text-xl mb-4">TECHNICAL ARSENAL</h3>
                <ul className="skill-list space-y-2">
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Advanced SQL Queries
                  </li>
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Python Scripting
                  </li>
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Dashboard Development
                  </li>
                  <li className="text-secondary flex items-center">
                    <span className="text-neon-red mr-2">&gt;</span>
                    Process Automation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="profile-visual">
            <div className="data-stream h-32 mb-8">
              <div className="stream-line"></div>
              <div className="stream-line"></div>
              <div className="stream-line"></div>
            </div>

            <div className="status-panel bg-secondary border border-neon rounded-lg p-6">
              <div className="space-y-4">
                <div className="status-item flex justify-between items-center">
                  <span className="status-label text-secondary">STATUS:</span>
                  <span className="status-value active text-neon-red font-heading">ACTIVE</span>
                </div>
                <div className="status-item flex justify-between items-center">
                  <span className="status-label text-secondary">CASES SOLVED:</span>
                  <span className="status-value text-neon-red font-heading">500+</span>
                </div>
                <div className="status-item flex justify-between items-center">
                  <span className="status-label text-secondary">AUTOMATION RATE:</span>
                  <span className="status-value text-neon-red font-heading">87%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
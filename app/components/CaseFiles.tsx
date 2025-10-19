export default function CaseFiles() {
  const cases = [
    {
      id: '001',
      title: 'Phishing Ring Investigation',
      status: 'closed',
      summary: 'Developed automated email analysis system that identified and tracked sophisticated phishing campaigns targeting financial institutions.',
      techniques: ['Python Email Parsing', 'Pattern Recognition', 'Network Analysis'],
      stats: [
        { label: 'THREATS NEUTRALIZED:', value: '1,247' },
        { label: 'ANALYSIS TIME:', value: '-94%' }
      ],
      resolution: 'Built Python automation tool that reduced manual email analysis time from 4 hours to 15 minutes per case, increasing detection accuracy by 76%.'
    },
    {
      id: '002',
      title: 'Payment Fraud Pattern Analysis',
      status: 'active',
      summary: 'Created advanced SQL-based detection system for identifying sophisticated payment fraud patterns across multiple transaction channels.',
      techniques: ['Advanced SQL Analytics', 'Statistical Analysis', 'Real-time Monitoring'],
      stats: [
        { label: 'PATTERNS IDENTIFIED:', value: '34' },
        { label: 'FALSE POSITIVE RATE:', value: '2.1%' }
      ],
      resolution: 'Developed comprehensive SQL dashboard that processes 500K+ transactions daily, identifying suspicious patterns with 98% accuracy.'
    },
    {
      id: '003',
      title: 'Automated Suspicious Activity Detection',
      status: 'closed',
      summary: 'Engineered intelligent automation platform that continuously monitors and flags suspicious activities across multiple financial systems.',
      techniques: ['Machine Learning Integration', 'API Development', 'Alert Automation'],
      stats: [
        { label: 'SYSTEMS MONITORED:', value: '12' },
        { label: 'RESPONSE TIME:', value: '<5 sec' }
      ],
      resolution: 'Built integrated monitoring platform that reduced suspicious activity detection time from hours to seconds while maintaining 99.2% accuracy.'
    },
    {
      id: '004',
      title: 'Transaction Network Analysis',
      status: 'active',
      summary: 'Designed network analysis tool that maps and visualizes complex transaction relationships to uncover sophisticated fraud networks.',
      techniques: ['Graph Analysis', 'Data Visualization', 'Network Forensics'],
      stats: [
        { label: 'NETWORKS MAPPED:', value: '28' },
        { label: 'HIDDEN LINKS FOUND:', value: '156' }
      ],
      resolution: 'Created interactive visualization platform that revealed previously undetectable fraud networks, leading to 3 major investigation breakthroughs.'
    }
  ];

  return (
    <section id="cases" className="section case-files bg-secondary">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title text-neon-red text-4xl md:text-5xl font-heading">
            CASE FILES
          </h1>
          <div className="title-line"></div>
        </div>

        <div className="cases-grid grid md:grid-cols-2 gap-8">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="case-card card-neon hover-lift transition-all duration-300"
            >
              <div className="case-header flex justify-between items-center mb-4">
                <span className="case-id text-neon-red font-heading">CASE #{caseItem.id}</span>
                <span className={`case-status px-3 py-1 rounded-full text-xs font-heading ${
                  caseItem.status === 'closed'
                    ? 'bg-green-900/50 text-green-400 border border-green-400/30'
                    : 'bg-red-900/50 text-red-400 border border-red-400/30'
                }`}>
                  {caseItem.status.toUpperCase()}
                </span>
              </div>

              <h3 className="case-title text-xl font-heading text-neon-red mb-4">
                {caseItem.title}
              </h3>

              <p className="case-summary text-secondary mb-6 leading-relaxed">
                {caseItem.summary}
              </p>

              <div className="case-tech mb-6">
                <span className="tech-label text-neon-red text-sm font-heading block mb-2">
                  TECHNIQUES:
                </span>
                <ul className="tech-list grid grid-cols-1 gap-2">
                  {caseItem.techniques.map((technique, index) => (
                    <li key={index} className="text-secondary text-sm flex items-center">
                      <span className="text-neon-red mr-2">&gt;</span>
                      {technique}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="case-stats grid grid-cols-2 gap-4 mb-6">
                {caseItem.stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <span className="stat-label text-xs text-secondary block">
                      {stat.label}
                    </span>
                    <span className="stat-value text-neon-red font-heading text-lg">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="case-outcome">
                <span className="outcome-label text-neon-red text-sm font-heading block mb-2">
                  RESOLUTION:
                </span>
                <p className="outcome-text text-secondary text-sm leading-relaxed">
                  {caseItem.resolution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
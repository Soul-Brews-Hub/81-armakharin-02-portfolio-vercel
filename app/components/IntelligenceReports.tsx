export default function IntelligenceReports() {
  const reports = [
    {
      date: '2024.03.15',
      classification: 'CLASSIFIED',
      title: 'SQL Techniques for Financial Crime Detection',
      excerpt: 'Advanced SQL query patterns that identify sophisticated financial fraud schemes hidden in millions of transactions.',
      insights: [
        'Window functions for temporal pattern analysis',
        'Common table expressions for complex fraud rings',
        'Statistical aggregations for anomaly detection'
      ],
      outcome: 'Implementation of these techniques increased fraud detection accuracy by 34% across monitored systems.'
    },
    {
      date: '2024.02.28',
      classification: 'CLASSIFIED',
      title: 'Building Python Automation Tools for Fraud Analysts',
      excerpt: 'How Python automation transforms fraud investigation workflows from manual processes to intelligent systems.',
      insights: [
        'API integrations for real-time data collection',
        'Machine learning for pattern recognition',
        'Automated reporting and alert systems'
      ],
      outcome: 'Python automation tools reduced average investigation time by 78% while maintaining detection quality.'
    },
    {
      date: '2024.01.10',
      classification: 'TOP SECRET',
      title: 'Machine Learning Patterns in Suspicious Activity Monitoring',
      excerpt: 'Applying ML algorithms to detect subtle patterns in suspicious activity that traditional methods miss entirely.',
      insights: [
        'Unsupervised learning for anomaly detection',
        'Feature engineering for fraud patterns',
        'Real-time model deployment strategies'
      ],
      outcome: 'ML-based monitoring identified 23 previously unknown fraud patterns, preventing $4.2M in potential losses.'
    }
  ];

  return (
    <section id="reports" className="section intelligence-reports">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title text-neon-red text-4xl md:text-5xl font-heading">
            INTELLIGENCE REPORTS
          </h1>
          <div className="title-line"></div>
        </div>

        <div className="reports-grid grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <article
              key={index}
              className="report-card card-neon hover-lift transition-all duration-300"
            >
              <div className="report-header flex justify-between items-center mb-4">
                <span className="report-date text-secondary text-sm font-body">
                  {report.date}
                </span>
                <span className={`report-classification px-3 py-1 rounded text-xs font-heading ${
                  report.classification === 'TOP SECRET'
                    ? 'bg-red-900/50 text-red-400 border border-red-400/50'
                    : 'bg-yellow-900/50 text-yellow-400 border border-yellow-400/30'
                }`}>
                  {report.classification}
                </span>
              </div>

              <h3 className="report-title text-xl font-heading text-neon-red mb-4">
                {report.title}
              </h3>

              <p className="report-excerpt text-secondary mb-6 leading-relaxed">
                {report.excerpt}
              </p>

              <div className="report-highlights mb-6">
                <h4 className="text-neon-red text-sm font-heading mb-3">KEY INSIGHTS:</h4>
                <ul className="space-y-2">
                  {report.insights.map((insight, insightIndex) => (
                    <li key={insightIndex} className="text-secondary text-sm flex items-start">
                      <span className="text-neon-red mr-2 mt-1 flex-shrink-0">&gt;</span>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="report-outcome">
                <p className="text-secondary text-sm leading-relaxed bg-tertiary p-4 rounded border border-neon/30">
                  {report.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
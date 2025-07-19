import React from 'react';

const TotalCard = () => {
  const sparklineData = [50, 75, 37.5, 93.75, 56.25, 68.75, 87.5, 43.75, 81.25, 62.5, 100, 75];

  return (
    <div className="card total-card">
      <div className="card-header">
        <h3>✅ Total Questions Completed</h3>
      </div>
      <div className="card-content">
        <div className="total-header">
          <div className="total-info">
            <div className="total-number">684</div>
            <div className="total-message">You've solved 684 problems!</div>
            <div className="total-subtitle">280 active days</div>
          </div>
          <div className="achievement-icon">
            <i className="fas fa-award"></i>
          </div>
        </div>

        <div className="sparkline-section">
          <div className="sparkline-header">
            <i className="fas fa-trending-up"></i>
            <span>Recent Progress</span>
          </div>
          <div className="sparkline">
            {sparklineData.map((height, index) => (
              <div 
                key={index}
                className="bar" 
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="sparkline-label">Last 12 days activity</div>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">156</div>
            <div className="stat-label">This month</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">42</div>
            <div className="stat-label">This week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCard; 
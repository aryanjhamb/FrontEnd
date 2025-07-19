import React from 'react';

const WelcomeHeader = () => {
  return (
    <div className="welcome-header">
      <div className="welcome-text">
        <h1>Hi Aryan! Welcome back to your coding journey. 👋</h1>
        <p>Great job—keep the momentum going!</p>
        
        <div className="progress-indicators">
          <div className="indicator">
            <div className="indicator-dot green"></div>
            <span>4 problems solved today</span>
          </div>
          <div className="indicator">
            <i className="fas fa-fire orange"></i>
            <span>12 day streak</span>
          </div>
        </div>
      </div>

      <div className="streak-widget">
        <div className="streak-content">
          <i className="fas fa-fire streak-icon"></i>
          <div className="streak-info">
            <div className="streak-number">12 Days</div>
            <div className="streak-label">Current Streak</div>
          </div>
        </div>
        <div className="streak-message">🔥 You're on fire! Keep it up!</div>
      </div>
    </div>
  );
};

export default WelcomeHeader; 
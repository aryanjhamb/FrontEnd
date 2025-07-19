import React from 'react';

const PlatformCard = ({ name, logo, handle, solved, total, progress, color, url, isActive }) => {
  const handleClick = () => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className={`platform-card ${color}`}>
      <div className="platform-header">
        <div className="platform-info">
          <span className="platform-logo">{logo}</span>
          <div>
            <div className="platform-name">{name}</div>
            <div className="platform-handle">{handle}</div>
          </div>
        </div>
        <button className="platform-link" onClick={handleClick}>
          <i className="fas fa-external-link-alt"></i>
        </button>
      </div>
      <div className="platform-stats">
        <div className="platform-numbers">
          <span className="solved-count">{solved}</span>
          <span className="total-count">/{total}</span>
        </div>
        <div className="platform-progress">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="platform-footer">
        <span className="completion-rate">{progress}% completed</span>
        {isActive && (
          <div className="active-badge">
            <i className="fas fa-trophy"></i>
            <span>Active</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatformCard; 
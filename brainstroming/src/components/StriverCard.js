import React from 'react';

const StriverCard = () => {
  const progress = 22.6;
  const completed = 102;
  const total = 450;

  return (
    <div className="card striver-card">
      <div className="card-header">
        <h3>📘 Striver's 450 DSA Sheet</h3>
      </div>
      <div className="card-content">
        <div className="striver-progress">
          <div className="circular-progress">
            <svg className="progress-ring" width="80" height="80">
              <circle 
                className="progress-ring-bg" 
                cx="40" 
                cy="40" 
                r="36"
              ></circle>
              <circle 
                className="progress-ring-fill" 
                cx="40" 
                cy="40" 
                r="36" 
                style={{ '--progress': progress }}
              ></circle>
            </svg>
            <div className="progress-text">{progress}%</div>
          </div>
          
          <div className="progress-numbers">
            <div className="completed-number">{completed}</div>
            <div className="total-text">out of {total}</div>
            <div className="problems-text">problems completed</div>
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="action-buttons">
          <button 
            className="btn-primary"
            onClick={() => window.open('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', '_blank')}
          >
            <i className="fas fa-book-open"></i>
            Continue Striver 450
          </button>
          <button 
            className="btn-icon"
            onClick={() => window.open('https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/', '_blank')}
          >
            <i className="fas fa-external-link-alt"></i>
          </button>
        </div>

        <div className="tip-text">💡 Focus on Arrays and Strings next - you're making great progress!</div>
      </div>
    </div>
  );
};

export default StriverCard; 
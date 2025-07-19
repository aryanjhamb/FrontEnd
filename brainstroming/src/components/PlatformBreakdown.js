import React from 'react';
import PlatformCard from './PlatformCard';

const PlatformBreakdown = () => {
  const platforms = [
    {
      name: 'LeetCode',
      logo: '🟠',
      handle: '@aryan_codes',
      solved: 420,
      total: 3000,
      progress: 14,
      color: 'orange',
      url: 'https://leetcode.com/aryan345_1/',
      isActive: true
    },
    {
      name: 'GeeksforGeeks',
      logo: '🟢',
      handle: '@aryanjhazzgz',
      solved: 180,
      total: 1500,
      progress: 12,
      color: 'green',
      url: 'https://www.geeksforgeeks.org/user/aryanjhazzgz/',
      isActive: true
    },
    {
      name: 'CodeChef',
      logo: '🍳',
      handle: '@aryanjhamb1703',
      solved: 120,
      total: 2000,
      progress: 6,
      color: 'brown',
      url: 'https://www.codechef.com/users/aryanjhamb1703',
      isActive: true
    },
    {
      name: 'HackerRank',
      logo: '🟡',
      handle: '@aryanjhamb1703',
      solved: 67,
      total: 500,
      progress: 13,
      color: 'yellow',
      url: 'https://www.hackerrank.com/profile/aryanjhamb1703',
      isActive: true
    },
    {
      name: 'Codeforces',
      logo: '🔴',
      handle: '@aryan_cf',
      solved: 45,
      total: 1000,
      progress: 5,
      color: 'red',
      url: '#',
      isActive: false
    },
    {
      name: 'AtCoder',
      logo: '⚪',
      handle: '@aryan_at',
      solved: 23,
      total: 400,
      progress: 6,
      color: 'gray',
      url: '#',
      isActive: false
    }
  ];

  return (
    <div className="card platforms-card">
      <div className="card-header">
        <h3>🌐 Platform-wise Problem Breakdown</h3>
        <p>Your progress across different coding platforms • 830 total problems solved</p>
      </div>
      <div className="card-content">
        <div className="platforms-grid">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>

        <div className="achievement-banner">
          <div className="achievement-content">
            <div className="achievement-text">
              <div className="achievement-title">Cross-Platform Achievement</div>
              <div className="achievement-desc">You've solved problems on 6 different platforms!</div>
            </div>
            <div className="achievement-number">830</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformBreakdown; 
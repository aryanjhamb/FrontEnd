import React from 'react';

const Sidebar = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { id: 'dashboard', icon: 'fas fa-chart-bar', label: 'Dashboard' },
    { id: 'dsa-topics', icon: 'fas fa-book-open', label: 'DSA Topics' },
    { id: 'striver-450', icon: 'fas fa-target', label: 'Striver 450' },
    { id: 'practice-plan', icon: 'fas fa-calendar', label: 'Practice Plan' },
    { id: 'community', icon: 'fas fa-users', label: 'Community' },
    { id: 'settings', icon: 'fas fa-cog', label: 'Settings' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <i className="fas fa-trophy"></i>
        </div>
        <span className="logo-text">
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>D</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>S</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>A</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>&nbsp;</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>T</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>r</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>a</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>c</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>k</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>e</span>
          <span style={{ display: 'inline-block', transformOrigin: 'center' }}>r</span>
        </span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveNav(item.id);
            }}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 
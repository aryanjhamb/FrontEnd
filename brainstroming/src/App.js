import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import WelcomeHeader from './components/WelcomeHeader';
import StriverCard from './components/StriverCard';
import TotalCard from './components/TotalCard';
import MonthlyProgress from './components/MonthlyProgress';
import PlatformBreakdown from './components/PlatformBreakdown';
import { initializeAnimations } from './utils/animations';

function App() {
  const [activeNav, setActiveNav] = useState('dashboard');

  useEffect(() => {
    // Initialize animations after component mounts
    initializeAnimations();
  }, []);

  return (
    <div className="dashboard">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      
      <div className="main-content">
        <div className="content-wrapper">
          <WelcomeHeader />
          
          <div className="top-cards">
            <StriverCard />
            <TotalCard />
          </div>

          <MonthlyProgress />
          <PlatformBreakdown />
        </div>
      </div>
    </div>
  );
}

export default App; 
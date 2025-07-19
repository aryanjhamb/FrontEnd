import React, { useEffect, useRef } from 'react';

const MonthlyProgress = () => {
  const chartRef = useRef(null);
  
  const chartData = [
    { week: 'Week 1', solved: 28, goal: 30, percentage: 93, position: 70 },
    { week: 'Week 2', solved: 35, goal: 30, percentage: 117, position: 87.5 },
    { week: 'Week 3', solved: 32, goal: 30, percentage: 107, position: 80 },
    { week: 'Week 4', solved: 38, goal: 30, percentage: 127, position: 95 }
  ];

  useEffect(() => {
    // Wait for anime.js to be available
    const initChartAnimation = () => {
      if (typeof anime !== 'undefined' && chartRef.current) {
        // Animate chart points entrance
        anime({
          targets: '.line-point',
          scale: [0, 1],
          opacity: [0, 1],
          duration: 800,
          easing: 'easeOutElastic(1, 0.8)',
          delay: (el, i) => i * 200
        });

        // Animate chart line drawing
        const linePoints = chartRef.current.querySelectorAll('.line-point');
        if (linePoints.length > 1) {
          // Create SVG line connecting the points
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          svg.style.position = 'absolute';
          svg.style.top = '0';
          svg.style.left = '0';
          svg.style.pointerEvents = 'none';
          
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          line.setAttribute('stroke', '#3b82f6');
          line.setAttribute('stroke-width', '2');
          line.setAttribute('fill', 'none');
          line.setAttribute('stroke-linecap', 'round');
          
          // Create path data
          let pathData = '';
          linePoints.forEach((point, index) => {
            const rect = point.getBoundingClientRect();
            const chartRect = chartRef.current.getBoundingClientRect();
            const x = ((rect.left + rect.width / 2) - chartRect.left) / chartRect.width * 100;
            const y = ((rect.top + rect.height / 2) - chartRect.top) / chartRect.height * 100;
            
            if (index === 0) {
              pathData += `M ${x} ${y}`;
            } else {
              pathData += ` L ${x} ${y}`;
            }
          });
          
          line.setAttribute('d', pathData);
          line.style.strokeDasharray = '1000';
          line.style.strokeDashoffset = '1000';
          svg.appendChild(line);
          chartRef.current.appendChild(svg);
          
          // Animate the line drawing
          anime({
            targets: line,
            strokeDashoffset: [1000, 0],
            duration: 1200,
            easing: 'easeOutCubic',
            delay: 800
          });
        }

        // Animate grid lines
        anime({
          targets: '.grid-line',
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic',
          delay: (el, i) => i * 100
        });

        // Animate chart labels
        anime({
          targets: '.chart-labels span',
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
          easing: 'easeOutCubic',
          delay: (el, i) => 1000 + i * 150
        });

        // Add hover animations for chart points
        linePoints.forEach(point => {
          point.addEventListener('mouseenter', () => {
            anime({
              targets: point,
              scale: 1.5,
              duration: 200,
              easing: 'easeOutQuad'
            });
          });
          
          point.addEventListener('mouseleave', () => {
            anime({
              targets: point,
              scale: 1,
              duration: 200,
              easing: 'easeOutQuad'
            });
          });
        });

      } else {
        console.log('Anime.js not loaded yet, retrying...');
        setTimeout(initChartAnimation, 100);
      }
    };

    initChartAnimation();
  }, []);

  return (
    <div className="card chart-card">
      <div className="card-header">
        <h3>📈 Monthly Progress</h3>
        <p>Problems solved vs monthly goal • 60% goal reached</p>
      </div>
      <div className="card-content">
        <div className="chart-container">
          <div className="chart" ref={chartRef}>
            <div className="chart-grid">
              <div className="grid-line" style={{ bottom: '0%' }}></div>
              <div className="grid-line" style={{ bottom: '25%' }}></div>
              <div className="grid-line" style={{ bottom: '50%' }}></div>
              <div className="grid-line" style={{ bottom: '75%' }}></div>
              <div className="grid-line" style={{ bottom: '100%' }}></div>
            </div>
            
            <div className="chart-line">
              {chartData.map((data, index) => (
                <div 
                  key={index}
                  className="line-point" 
                  style={{ 
                    left: `${12.5 + (index * 25)}%`, 
                    bottom: `${data.position}%`,
                    transform: 'scale(0)',
                    opacity: 0
                  }} 
                  data-tooltip={`${data.week}: ${data.solved} solved, ${data.goal} goal (${data.percentage}%)`}
                ></div>
              ))}
            </div>
            
            <div className="chart-labels">
              {chartData.map((data, index) => (
                <span key={index} style={{ opacity: 0, transform: 'translateY(20px)' }}>{data.week}</span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="chart-footer">
          <div className="chart-status">🎯 You're 10% ahead of your monthly goal</div>
          <div className="chart-summary">133/120 problems this month</div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyProgress; 
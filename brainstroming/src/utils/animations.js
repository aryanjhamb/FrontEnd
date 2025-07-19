// Animation utilities for React components
export const initializeAnimations = () => {
  // Wait for animejs to be available
  const initAnimeJS = () => {
    if (typeof anime !== 'undefined') {
      // Logo text animation with improved timing
      anime({
        targets: '.logo-text span',
        translateY: [
          { value: -8, duration: 800, easing: 'easeOutElastic(1, 0.8)' },
          { value: 0, duration: 600, easing: 'easeOutBounce' }
        ],
        rotate: [
          { value: -5, duration: 400, easing: 'easeOutQuad' },
          { value: 0, duration: 600, easing: 'easeOutElastic(1, 0.8)' }
        ],
        delay: (el, i) => i * 80,
        loop: true,
        loopDelay: 3000
      });

      // Animate cards entrance with staggered timing
      anime({
        targets: '.card',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutCubic',
        delay: (el, i) => i * 150
      });

      // Animate welcome header
      anime({
        targets: '.welcome-header',
        translateX: [-30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutCubic',
        delay: 200
      });

      // Animate streak widget
      anime({
        targets: '.streak-widget',
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 700,
        easing: 'easeOutBack(1.7)',
        delay: 400
      });

      // Animate platform cards with staggered entrance
      anime({
        targets: '.platform-card',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutCubic',
        delay: (el, i) => 800 + i * 100
      });

    } else {
      console.log('Animejs not loaded yet, retrying...');
      setTimeout(initAnimeJS, 100);
    }
  };

  initAnimeJS();

  // Enhanced progress bar animations
  setTimeout(() => {
    animateProgressBars();
  }, 1200);

  // Enhanced sparkline animations
  setTimeout(() => {
    animateSparklines();
  }, 1400);

  // Enhanced circular progress animations
  setTimeout(() => {
    animateCircularProgress();
  }, 1600);
};

const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach((bar, index) => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
      bar.style.width = width;
    }, index * 200);
  });
};

const animateSparklines = () => {
  const bars = document.querySelectorAll('.sparkline .bar');
  bars.forEach((bar, index) => {
    const height = bar.style.height;
    bar.style.height = '0%';
    setTimeout(() => {
      bar.style.transition = 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      bar.style.height = height;
    }, index * 100);
  });
};

const animateCircularProgress = () => {
  const progressRings = document.querySelectorAll('.progress-ring-fill');
  progressRings.forEach((ring, index) => {
    const progress = ring.style.getPropertyValue('--progress') || 0;
    const circumference = 2 * Math.PI * 36;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;
    
    ring.style.strokeDasharray = strokeDasharray;
    ring.style.strokeDashoffset = circumference;
    
    setTimeout(() => {
      ring.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1)';
      ring.style.strokeDashoffset = strokeDashoffset;
    }, index * 300);
  });
}; 
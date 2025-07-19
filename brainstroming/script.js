// Simple interactivity for the dashboard
document.addEventListener("DOMContentLoaded", () => {
  // Initial page load animation
  initializePageLoadAnimation();

  // Add click handlers for navigation
  const navItems = document.querySelectorAll(".nav-item")
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault()
      navItems.forEach((nav) => nav.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Add click handler for Striver 450 button
  const striverButton = document.querySelector('.btn-primary');
  if (striverButton) {
    striverButton.addEventListener("click", () => {
      window.location.href = "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/";
    });
  }

  // Add hover effects for platform cards
  const platformCards = document.querySelectorAll(".platform-card")
  platformCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)"
      this.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)"
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
      this.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    })
  })

  // Initialize all animations
  initializeAnimations();

  // GFG card logic
  const gfgCard = document.querySelector('.platform-card.green');
  if (gfgCard) {
    const gfgProfileUrl = 'https://www.geeksforgeeks.org/user/aryanjhazzgz/';
    const gfgLinkBtn = gfgCard.querySelector('.platform-link');
    if (gfgLinkBtn) {
      gfgLinkBtn.onclick = () => {
        window.open(gfgProfileUrl, '_blank');
      };
    }
  }
  // LeetCode card logic
  const lcCard = document.querySelector('.platform-card.orange');
  if (lcCard) {
    const lcProfileUrl = 'https://leetcode.com/aryan345_1/';
    const lcLinkBtn = lcCard.querySelector('.platform-link');
    if (lcLinkBtn) {
      lcLinkBtn.onclick = () => {
        window.open(lcProfileUrl, '_blank');
      };
    }
  }
  // Striver 450 (TakeUForward) card logic
  const striverCard = document.querySelector('.striver-card');
  if (striverCard) {
    const tufUrl = 'https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/';
    const tufBtn = striverCard.querySelector('.btn-icon');
    if (tufBtn) {
      tufBtn.onclick = () => {
        window.open(tufUrl, '_blank');
      };
    }
  }
  // HackerRank card logic
  const hrCard = document.querySelector('.platform-card.yellow');
  if (hrCard) {
    const hrProfileUrl = 'https://www.hackerrank.com/profile/aryanjhamb1703';
    const hrLinkBtn = hrCard.querySelector('.platform-link');
    if (hrLinkBtn) {
      hrLinkBtn.onclick = () => {
        window.open(hrProfileUrl, '_blank');
      };
    }
  }
  // CodeStudio card logic
  const csCard = document.querySelector('.platform-card.blue');
  if (csCard) {
    const csProfileUrl = 'https://www.codingninjas.com/codestudio/profile/aryanjhamb1703';
    const csLinkBtn = csCard.querySelector('.platform-link');
    if (csLinkBtn) {
      csLinkBtn.onclick = () => {
        window.open(csProfileUrl, '_blank');
      };
    }
  }

  // Initialize GFG Stats
  GFGStats.init();

  // Initialize HackerRank Stats
  // HackerRankStats.init(); // This module is removed, so this line is removed.

  // Initialize Custom API Stats
  // CustomAPIStats.init(); // Uncomment when you have the actual domain and token
})

// Page Load Animation
function initializePageLoadAnimation() {
  // Hide all content initially
  const dashboard = document.querySelector('.dashboard');
  dashboard.style.opacity = '0';
  dashboard.style.transform = 'translateY(20px)';
  dashboard.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';

  // Fade in the dashboard
  setTimeout(() => {
    dashboard.style.opacity = '1';
    dashboard.style.transform = 'translateY(0)';
  }, 100);
}

// Enhanced Animation System
function initializeAnimations() {
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
  }, 1600);

  // Enhanced circular progress animation
  setTimeout(() => {
    animateCircularProgress();
  }, 1400);
}

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach((bar, index) => {
    const targetWidth = bar.style.width;
    bar.style.width = "0%";
    bar.style.transition = "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
    
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 200 + index * 150);
  });
}

function animateSparklines() {
  const bars = document.querySelectorAll(".sparkline .bar");
  bars.forEach((bar, index) => {
    const targetHeight = bar.style.height;
    bar.style.height = "0%";
    bar.style.transition = "height 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    
    setTimeout(() => {
      bar.style.height = targetHeight;
    }, 300 + index * 60);
  });
}

function animateCircularProgress() {
  const circularProgress = document.querySelector(".progress-ring-fill");
  if (circularProgress) {
    const progress = circularProgress.style.getPropertyValue("--progress") || "41.6";
    circularProgress.style.setProperty("--progress", "0");
    circularProgress.style.transition = "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
    
    setTimeout(() => {
      circularProgress.style.setProperty("--progress", progress);
    }, 500);
  }
}

const LeetCodeStats = (() => {
  // API endpoint template
  const API_URL = 'https://leetcode-stats-api.herokuapp.com/';

  // Helper to select the LeetCode card
  function getLeetCodeCard() {
    return document.querySelector('.platform-card.orange');
  }

  // Helper to update the solved count, total count, progress bar, and handle
  function updateCardMainStats(card, data, username) {
    // Update solved count
    const solvedCount = card.querySelector('.solved-count');
    if (solvedCount) solvedCount.textContent = data.totalSolved;
    // Update total count
    const totalCount = card.querySelector('.total-count');
    if (totalCount) totalCount.textContent = `/` + data.totalQuestions;
    // Update progress bar
    const progressFill = card.querySelector('.progress-fill');
    if (progressFill && data.totalQuestions > 0) {
      const percent = Math.round((data.totalSolved / data.totalQuestions) * 100);
      progressFill.style.width = percent + '%';
    }
    // Update completion rate in footer
    const completionRate = card.querySelector('.completion-rate');
    if (completionRate && data.totalQuestions > 0) {
      const percent = Math.round((data.totalSolved / data.totalQuestions) * 100);
      completionRate.textContent = percent + '% completed';
    }
    // Update platform handle
    const handle = card.querySelector('.platform-handle');
    if (handle) handle.textContent = '@' + username;
  }

  // Helper to create a stat row
  function createStatRow(label, value) {
    const row = document.createElement('div');
    row.className = 'lc-stat-row';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.fontSize = '13px';
    row.style.margin = '2px 0';
    row.innerHTML = `<span>${label}</span><span><b>${value}</b></span>`;
    return row;
  }

  // Helper to create a submissions list
  function createSubmissionsList(submissions) {
    const list = document.createElement('ul');
    list.style.margin = '6px 0 0 0';
    list.style.padding = '0 0 0 16px';
    list.style.fontSize = '12px';
    submissions.slice(0, 5).forEach(sub => {
      const li = document.createElement('li');
      li.textContent = `${sub.title} (${sub.status_display}, ${sub.lang})`;
      list.appendChild(li);
    });
    return list;
  }

  // Main function to fetch and update stats
  async function updateStats(username) {
    const card = getLeetCodeCard();
    if (!card) return;
    const statsContainer = document.createElement('div');
    statsContainer.className = 'lc-extra-stats';
    statsContainer.style.marginTop = '8px';
    statsContainer.innerHTML = '<span style="font-size:12px;color:#888;">Loading LeetCode stats...</span>';
    card.appendChild(statsContainer);

    try {
      const res = await fetch(`${API_URL}${username}`);
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      // Update main card stats
      updateCardMainStats(card, data, username);
      statsContainer.innerHTML = '';
      // Total solved and total questions
      statsContainer.appendChild(createStatRow('Total Solved', `${data.totalSolved} / ${data.totalQuestions}`));
      // Difficulty breakdown
      statsContainer.appendChild(createStatRow('Easy', `${data.easySolved} / ${data.totalEasy}`));
      statsContainer.appendChild(createStatRow('Medium', `${data.mediumSolved} / ${data.totalMedium}`));
      statsContainer.appendChild(createStatRow('Hard', `${data.hardSolved} / ${data.totalHard}`));
      // Acceptance rate
      statsContainer.appendChild(createStatRow('Acceptance Rate', `${data.acceptanceRate}%`));
      // Ranking
      if (data.ranking !== undefined) statsContainer.appendChild(createStatRow('Ranking', data.ranking));
      // Contribution points
      if (data.contributionPoints !== undefined) statsContainer.appendChild(createStatRow('Contribution', data.contributionPoints));
      // Reputation
      if (data.reputation !== undefined) statsContainer.appendChild(createStatRow('Reputation', data.reputation));
      // Recent submissions (if available)
      if (Array.isArray(data.recentSubmissionList) && data.recentSubmissionList.length > 0) {
        const subLabel = document.createElement('div');
        subLabel.textContent = 'Recent Submissions:';
        subLabel.style.fontSize = '12px';
        subLabel.style.marginTop = '6px';
        statsContainer.appendChild(subLabel);
        statsContainer.appendChild(createSubmissionsList(data.recentSubmissionList));
      }
    } catch (err) {
      statsContainer.innerHTML = `<span style='color:red;font-size:12px;'>Failed to load LeetCode stats.</span>`;
    }
  }

  // Public API
  return {
    /**
     * Initialize the LeetCode stats module
     * @param {string} username - LeetCode username
     */
    init: (username) => {
      if (!username) return;
      updateStats(username);
    }
  };
})();

// Example usage: Replace with your LeetCode username
LeetCodeStats.init('aryan345_1');
/**
 * GeeksforGeeks Stats Component
 * Fetches and displays GeeksforGeeks stats for username "aryanjhazzgz" from the provided API
 * Usage: GFGStats.init();
 */
const GFGStats = (() => {
  // API endpoint for the specific username - using geeks-for-geeks-api.vercel.app
  const API_URL = 'https://geeks-for-geeks-api.vercel.app/aryanjhazzgz';
  
  // Helper to select the GeeksforGeeks card
  function getGFGCard() {
    return document.querySelector('.platform-card.green');
  }

  // Helper to update the main card stats
  function updateCardMainStats(card, data) {
    // Update solved count
    const solvedCount = card.querySelector('.solved-count');
    if (solvedCount && data.totalProblemsSolved !== undefined) {
      solvedCount.textContent = data.totalProblemsSolved;
    }
    
    // Update total count (assuming GFG has around 1500+ problems)
    const totalCount = card.querySelector('.total-count');
    if (totalCount) {
      const totalProblems = data.totalProblems || 1500;
      totalCount.textContent = `/${totalProblems}`;
    }
    
    // Update progress bar
    const progressFill = card.querySelector('.progress-fill');
    if (progressFill && data.totalProblemsSolved !== undefined) {
      const totalProblems = data.totalProblems || 1500;
      const percent = Math.round((data.totalProblemsSolved / totalProblems) * 100);
      progressFill.style.width = percent + '%';
    }
    
    // Update completion rate in footer
    const completionRate = card.querySelector('.completion-rate');
    if (completionRate && data.totalProblemsSolved !== undefined) {
      const totalProblems = data.totalProblems || 1500;
      const percent = Math.round((data.totalProblemsSolved / totalProblems) * 100);
      completionRate.textContent = percent + '% completed';
    }
    
    // Update platform handle
    const handle = card.querySelector('.platform-handle');
    if (handle) {
      handle.textContent = '@aryanjhazzgz';
    }
  }

  // Helper to create a stat row
  function createStatRow(label, value) {
    const row = document.createElement('div');
    row.className = 'gfg-stat-row';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.fontSize = '13px';
    row.style.margin = '2px 0';
    row.style.padding = '2px 0';
    row.innerHTML = `<span style="color: #666;">${label}</span><span style="font-weight: 600; color: #333;">${value}</span>`;
    return row;
  }

  // Helper to create institute and ranking info
  function createInstituteInfo(data) {
    const container = document.createElement('div');
    container.className = 'gfg-institute-info';
    container.style.marginTop = '8px';
    container.style.padding = '8px';
    container.style.backgroundColor = '#e8f5e8';
    container.style.borderRadius = '6px';
    container.style.border = '1px solid #c3e6c3';

    const title = document.createElement('div');
    title.textContent = 'Institute & Ranking:';
    title.style.fontSize = '12px';
    title.style.fontWeight = '600';
    title.style.marginBottom = '6px';
    title.style.color = '#2d5a2d';
    container.appendChild(title);

    // Add institute info
    if (data.institute !== undefined) {
      container.appendChild(createStatRow('Institute', data.institute));
    }
    if (data.instituteRank !== undefined) {
      container.appendChild(createStatRow('Institute Rank', `#${data.instituteRank}`));
    }

    return container;
  }

  // Helper to create coding scores
  function createCodingScores(data) {
    const container = document.createElement('div');
    container.className = 'gfg-coding-scores';
    container.style.marginTop = '8px';
    container.style.padding = '8px';
    container.style.backgroundColor = '#d1ecf1';
    container.style.borderRadius = '6px';
    container.style.border = '1px solid #bee5eb';

    const title = document.createElement('div');
    title.textContent = 'Coding Scores:';
    title.style.fontSize = '12px';
    title.style.fontWeight = '600';
    title.style.marginBottom = '6px';
    title.style.color = '#0c5460';
    container.appendChild(title);

    // Add coding scores
    if (data.codingScore !== undefined) {
      container.appendChild(createStatRow('Overall Score', data.codingScore));
    }
    if (data.monthlyScore !== undefined) {
      container.appendChild(createStatRow('Monthly Score', data.monthlyScore));
    }

    return container;
  }

  // Helper to create additional stats
  function createAdditionalStats(data) {
    const container = document.createElement('div');
    container.className = 'gfg-additional-stats';
    container.style.marginTop = '8px';
    container.style.padding = '8px';
    container.style.backgroundColor = '#f8f9fa';
    container.style.borderRadius = '6px';
    container.style.border = '1px solid #e9ecef';

    const title = document.createElement('div');
    title.textContent = 'Problem Statistics:';
    title.style.fontSize = '12px';
    title.style.fontWeight = '600';
    title.style.marginBottom = '6px';
    title.style.color = '#495057';
    container.appendChild(title);

    // Add problem stats
    if (data.totalProblemsSolved !== undefined) {
      container.appendChild(createStatRow('Total Solved', data.totalProblemsSolved));
    }
    if (data.easySolved !== undefined) {
      container.appendChild(createStatRow('Easy', data.easySolved));
    }
    if (data.mediumSolved !== undefined) {
      container.appendChild(createStatRow('Medium', data.mediumSolved));
    }
    if (data.hardSolved !== undefined) {
      container.appendChild(createStatRow('Hard', data.hardSolved));
    }

    return container;
  }

  // Main function to fetch and update stats
  async function updateStats() {
    const card = getGFGCard();
    if (!card) {
      console.error('GFG card not found');
      return;
    }

    // Create loading indicator
    const statsContainer = document.createElement('div');
    statsContainer.className = 'gfg-extra-stats';
    statsContainer.style.marginTop = '8px';
    statsContainer.innerHTML = '<span style="font-size:12px;color:#888;">Loading GeeksforGeeks stats...</span>';
    
    // Remove any existing stats container
    const existingStats = card.querySelector('.gfg-extra-stats');
    if (existingStats) {
      existingStats.remove();
    }
    
    card.appendChild(statsContainer);

    try {
      // Use sample data since API is not working
      const data = {
        "institute": "Jaipur Engineering College and Research Centre Jaipur",
        "instituteRank": 196,
       
        "codingScore": 541,
        "monthlyScore": 108,
        "totalProblemsSolved": 207,
        "easySolved": 120,
        "mediumSolved": 70,
        "hardSolved": 17
      };
      
      console.log('GFG Sample Data:', data);

      // Update main card stats
      updateCardMainStats(card, data);
      
      // Clear loading message
      statsContainer.innerHTML = '';

      // Add institute and ranking info
      if (data.institute !== undefined || data.instituteRank !== undefined) {
        statsContainer.appendChild(createInstituteInfo(data));
      }

      // Add coding scores
      if (data.codingScore !== undefined || data.monthlyScore !== undefined) {
        statsContainer.appendChild(createCodingScores(data));
      }

      // Add problem statistics
      if (data.totalProblemsSolved !== undefined || data.easySolved !== undefined || data.mediumSolved !== undefined || data.hardSolved !== undefined) {
        statsContainer.appendChild(createAdditionalStats(data));
      }

      // Add success indicator
      const successIndicator = document.createElement('div');
      successIndicator.style.fontSize = '11px';
      successIndicator.style.color = '#28a745';
      successIndicator.style.marginTop = '6px';
      successIndicator.style.fontStyle = 'italic';
      successIndicator.textContent = '✓ Data loaded from sample JSON';
      statsContainer.appendChild(successIndicator);

    } catch (error) {
      console.error('Error loading GFG stats:', error);
      statsContainer.innerHTML = `
        <div style="color: #dc3545; font-size: 12px; padding: 8px; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px;">
          <strong>Error loading GFG stats:</strong><br>
          ${error.message}<br>
          <small>Please check if the username 'aryanjhazzgz' exists on GeeksforGeeks or try a different username.</small>
        </div>
      `;
    }
  }

  // Public API
  return {
    /**
     * Initialize the GeeksforGeeks stats module
     */
    init: () => {
      console.log('Initializing GFG Stats for username: aryanjhazzgz');
      updateStats();
    },

    /**
     * Refresh the stats manually
     */
    refresh: () => {
      updateStats();
    }
  };
})();

/**
 * GeeksforGeeks Stats Module (V2)
 * Fetches and displays GeeksforGeeks stats for a given username using geeks-for-geeks-stats-api.vercel.app.
 * Usage: GFGProfileStatsV2.init('your_gfg_username');
 */

/**
 * HackerRank Stats Component
 * Fetches and displays HackerRank stats from the HackerRank API
 * Usage: HackerRankStats.init();
 */
// Remove the entire HackerRankStats module and any code that appends error messages or extra stats to the HackerRank card.
// Only keep the fetchHackerRankData function and ensure it does not show any error or loading message in the UI.

async function fetchHackerRankData() {
    try {
        const response = await fetch('https://hackerrank-badges.vercel.app/api/aryanjhamb1703');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // Example structure: { badges: { totalSolved: 123, totalQuestions: 500, ... } }
        // Adjust these paths based on the actual API response structure
        const solved = data.badges?.totalSolved || 0;
        const total = data.badges?.totalQuestions || 500; // fallback to 500 if not present
        const handle = 'aryanjhamb1703';
        const percent = total ? ((solved / total) * 100).toFixed(1) : 0;

        document.getElementById('hr-platform-name').textContent = 'HackerRank';
        document.getElementById('hr-platform-handle').textContent = '@' + handle;
        document.getElementById('hr-solved-count').textContent = solved;
        document.getElementById('hr-total-count').textContent = `/${total}`;
        document.getElementById('hr-progress-bar').style.width = `${percent}%`;
        document.getElementById('hr-completion-rate').textContent = `${percent}% completed`;
    } catch (error) {
        // Do not show any error or loading message in the UI
        document.getElementById('hr-completion-rate').textContent = '';
        // Optionally, you can hide the card or leave it as is
    }
}

window.addEventListener('DOMContentLoaded', fetchHackerRankData);

/**
 * Custom API Stats Component
 * Fetches and displays stats from a custom API with Bearer token authentication
 * Usage: CustomAPIStats.init();
 */
const CustomAPIStats = (() => {
  // API endpoint configuration
  const API_URL = 'https://api.example.com/x/api/v3/users';
  const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
  
  // Helper to select the HackerRank card
  function getTargetCard() {
    return document.querySelector('.platform-card.yellow'); // HackerRank card
  }

  // Helper to update the main card stats
  function updateCardMainStats(card, data) {
    // Update solved count (adjust field names based on your API response)
    const solvedCount = card.querySelector('.solved-count');
    if (solvedCount && data.solvedCount !== undefined) {
      solvedCount.textContent = data.solvedCount;
    }
    
    // Update total count
    const totalCount = card.querySelector('.total-count');
    if (totalCount) {
      const totalProblems = data.totalProblems || 500;
      totalCount.textContent = `/${totalProblems}`;
    }
    
    // Update progress bar
    const progressFill = card.querySelector('.progress-fill');
    if (progressFill && data.solvedCount !== undefined) {
      const totalProblems = data.totalProblems || 500;
      const percent = Math.round((data.solvedCount / totalProblems) * 100);
      progressFill.style.width = percent + '%';
    }
    
    // Update completion rate in footer
    const completionRate = card.querySelector('.completion-rate');
    if (completionRate && data.solvedCount !== undefined) {
      const totalProblems = data.totalProblems || 500;
      const percent = Math.round((data.solvedCount / totalProblems) * 100);
      completionRate.textContent = percent + '% completed';
    }
    
    // Update platform handle
    const handle = card.querySelector('.platform-handle');
    if (handle) {
      handle.textContent = '@aryanjhamb1703';
    }
  }

  // Helper to create a stat row
  function createStatRow(label, value) {
    const row = document.createElement('div');
    row.className = 'custom-stat-row';
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.fontSize = '13px';
    row.style.margin = '2px 0';
    row.style.padding = '2px 0';
    row.innerHTML = `<span style="color: #666;">${label}</span><span style="font-weight: 600; color: #333;">${value}</span>`;
    return row;
  }

  // Helper to create custom stats section
  function createCustomStats(data) {
    const container = document.createElement('div');
    container.className = 'custom-stats-section';
    container.style.marginTop = '8px';
    container.style.padding = '8px';
    container.style.backgroundColor = '#fff3cd';
    container.style.borderRadius = '6px';
    container.style.border = '1px solid #ffeaa7';

    const title = document.createElement('div');
    title.textContent = 'Custom API Stats:';
    title.style.fontSize = '12px';
    title.style.fontWeight = '600';
    title.style.marginBottom = '6px';
    title.style.color = '#856404';
    container.appendChild(title);

    // Add custom stats based on your API response
    // Modify these based on your actual data structure
    if (data.solvedCount !== undefined) {
      container.appendChild(createStatRow('Solved Problems', data.solvedCount));
    }
    if (data.ranking !== undefined) {
      container.appendChild(createStatRow('Ranking', data.ranking));
    }
    if (data.score !== undefined) {
      container.appendChild(createStatRow('Score', data.score));
    }
    if (data.level !== undefined) {
      container.appendChild(createStatRow('Level', data.level));
    }
    if (data.submissions !== undefined) {
      container.appendChild(createStatRow('Submissions', data.submissions));
    }
    if (data.comments !== undefined) {
      container.appendChild(createStatRow('Comments', data.comments));
    }

    return container;
  }

  // Main function to fetch and update stats
  async function updateStats() {
    const card = getTargetCard();
    if (!card) {
      console.error('HackerRank card not found');
      return;
    }

    // Create loading indicator
    const statsContainer = document.createElement('div');
    statsContainer.className = 'custom-extra-stats';
    statsContainer.style.marginTop = '8px';
    statsContainer.innerHTML = '<span style="font-size:12px;color:#888;">Loading custom API stats...</span>';
    
    // Remove any existing stats container
    const existingStats = card.querySelector('.custom-extra-stats');
    if (existingStats) {
      existingStats.remove();
    }
    
    card.appendChild(statsContainer);

    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Custom API Response:', data);

      // Update main card stats
      updateCardMainStats(card, data);
      
      // Clear loading message
      statsContainer.innerHTML = '';

      // Add custom stats
      statsContainer.appendChild(createCustomStats(data));

      // Add success indicator
      const successIndicator = document.createElement('div');
      successIndicator.style.fontSize = '11px';
      successIndicator.style.color = '#28a745';
      successIndicator.style.marginTop = '6px';
      successIndicator.style.fontStyle = 'italic';
      successIndicator.textContent = '✓ Data loaded from custom API';
      statsContainer.appendChild(successIndicator);

    } catch (error) {
      console.error('Error fetching custom API stats:', error);
      statsContainer.innerHTML = `
        <div style="color: #dc3545; font-size: 12px; padding: 8px; background: #f8d7da; border: 1px solid #f5c6cb; border-radius: 4px;">
          <strong>Error loading custom API stats:</strong><br>
          ${error.message}<br>
          <small>Please check your API endpoint and Bearer token.</small>
        </div>
      `;
    }
  }

  // Public API
  return {
    /**
     * Initialize the custom API stats module
     */
    init: () => {
      console.log('Initializing Custom API Stats for HackerRank profile/aryanjhamb1703');
      updateStats();
    },

    /**
     * Refresh the stats manually
     */
    refresh: () => {
      updateStats();
    }
  };
})();

async function fetchCodeChefData() {
    try {
        const response = await fetch('https://codechef-api.vercel.app/handle/aryanjhamb');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // API returns data at the root
        const user = data;

        // Profile image
        const profileImg = document.getElementById('cc-profile-img');
        if (user.profile) {
            profileImg.src = user.profile;
            profileImg.style.display = 'inline-block';
        } else {
            profileImg.style.display = 'none';
        }

        // Name row
        document.getElementById('cc-name-row').textContent = user.name ? `Name: ${user.name}` : '';
        // Current rating
        document.getElementById('cc-rating-row').textContent = user.currentRating ? `Current Rating: ${user.currentRating}` : '';
        // Highest rating
        document.getElementById('cc-highest-rating-row').textContent = user.highestRating ? `Highest Rating: ${user.highestRating}` : '';
        // Stars
        document.getElementById('cc-stars-row').textContent = user.stars ? `Stars: ${user.stars}` : '';
        // Country with flag
        const countryRow = document.getElementById('cc-country-row');
        if (user.countryName && user.countryFlag) {
            countryRow.innerHTML = `<img src="${user.countryFlag}" alt="flag" style="width:18px;height:12px;margin-right:6px;vertical-align:middle;">${user.countryName}`;
        } else if (user.countryName) {
            countryRow.textContent = user.countryName;
        } else {
            countryRow.textContent = '';
        }
        // Global rank
        document.getElementById('cc-global-rank-row').textContent = user.globalRank ? `Global Rank: ${user.globalRank}` : '';
        // Country rank
        document.getElementById('cc-country-rank-row').textContent = user.countryRank ? `Country Rank: ${user.countryRank}` : '';
    } catch (error) {
        // Hide all dynamic fields on error
        document.getElementById('cc-profile-img').style.display = 'none';
        document.getElementById('cc-name-row').textContent = '';
        document.getElementById('cc-rating-row').textContent = '';
        document.getElementById('cc-highest-rating-row').textContent = '';
        document.getElementById('cc-stars-row').textContent = '';
        document.getElementById('cc-country-row').textContent = '';
        document.getElementById('cc-global-rank-row').textContent = '';
        document.getElementById('cc-country-rank-row').textContent = '';
        // Optionally log error
        console.error('Failed to fetch CodeChef data:', error);
    }
}

window.addEventListener('DOMContentLoaded', fetchCodeChefData);

document.addEventListener('DOMContentLoaded', function() {
  const aryanName = document.getElementById('aryan-name');
  const modal = document.getElementById('photo-modal');
  const modalImg = document.getElementById('modal-img');
  const closeModal = document.querySelector('.close-modal');

  if (aryanName) {
    aryanName.addEventListener('click', function() {
      modal.classList.add('show');
      modalImg.src = '647b63185048189.655cebdc599cc.jpg';
      modalImg.alt = 'Aryan Jhamb';
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', function() {
      modal.classList.remove('show');
    });
  }

  // Optional: close modal on background click
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('show');
      }
    });
  }

  // CodeChef modal logic
  const codechefHandle = document.getElementById('cc-handle');
  const codechefModal = document.getElementById('codechef-modal');
  const closeCodechefModal = document.querySelector('.close-card-modal');
  const codechefCardContent = document.getElementById('codechef-card-content');

  if (codechefHandle) {
    codechefHandle.style.cursor = 'pointer';
    codechefHandle.addEventListener('click', async function(e) {
      e.preventDefault();
      codechefModal.classList.add('show');
      codechefCardContent.innerHTML = '<div style="color:#fff;text-align:center;">Loading...</div>';
      try {
        const response = await fetch('https://codechef-api.vercel.app/handle/aryanjhamb');
        if (!response.ok) throw new Error('Network response was not ok');
        const user = await response.json();
        codechefCardContent.innerHTML = `
          <div class="codolio-card-header">
            <span class="codolio-logo"><b>Code</b><span style="color:#ffb86c;">Chef</span></span>
            <span class="codolio-card-title">CARD</span>
          </div>
          <div class="codolio-card-photo-wrapper">
            <img src="${user.profile || ''}" alt="${user.name || 'CodeChef User'}" class="codolio-card-photo" />
            <span class="codolio-owl">🍳</span>
          </div>
          <div class="codolio-card-name">
            ${user.name || 'Unknown'}
          </div>
          <div class="codolio-card-username">@${user.username || 'aryanjhamb1703'}</div>
          <div class="codolio-card-stats">
            <div>
              <div class="codolio-card-stat-label">Current Rating</div>
              <div class="codolio-card-stat-value">${user.currentRating || '-'}</div>
            </div>
            <div>
              <div class="codolio-card-stat-label" style="color:#1ec773;">Stars</div>
              <div class="codolio-card-stat-value" style="color:#1ec773;">${user.stars || '-'}</div>
            </div>
          </div>
          <div class="codolio-card-findme">${user.countryName ? `<img src='${user.countryFlag}' alt='flag' style='width:18px;height:12px;vertical-align:middle;margin-right:6px;'>${user.countryName}` : ''}</div>
          <div class="codolio-card-socials">
            <span>Global Rank: ${user.globalRank || '-'}</span>
            <span>Country Rank: ${user.countryRank || '-'}</span>
          </div>
          <div class="codolio-card-tags">
            <span>Highest Rating: ${user.highestRating || '-'}</span>
          </div>
        `;
      } catch (error) {
        codechefCardContent.innerHTML = '<div style="color:#fff;text-align:center;">Failed to load CodeChef data.</div>';
      }
    });
  }

  if (closeCodechefModal) {
    closeCodechefModal.addEventListener('click', function() {
      codechefModal.classList.remove('show');
    });
  }

  if (codechefModal) {
    codechefModal.addEventListener('click', function(e) {
      if (e.target === codechefModal) {
        codechefModal.classList.remove('show');
      }
    });
  }
});

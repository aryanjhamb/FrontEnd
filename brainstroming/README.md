# DSA Tracker Dashboard - React Version

A beautiful and interactive DSA (Data Structures and Algorithms) progress tracking dashboard built with React.

## Features

- 📊 **Interactive Dashboard** - Track your DSA progress across multiple platforms
- 🎯 **Striver 450 Progress** - Monitor your progress through the popular Striver's 450 DSA sheet
- 📈 **Monthly Progress Charts** - Visualize your weekly and monthly achievements
- 🌐 **Multi-Platform Support** - Track progress on LeetCode, GeeksforGeeks, CodeStudio, HackerRank, Codeforces, and AtCoder
- 🔥 **Streak Tracking** - Monitor your daily coding streak
- ✨ **Beautiful Animations** - Smooth animations powered by Anime.js
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dsa-tracker-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar
│   ├── WelcomeHeader.js    # Welcome message and streak widget
│   ├── StriverCard.js      # Striver 450 progress card
│   ├── TotalCard.js        # Total questions completed card
│   ├── MonthlyProgress.js  # Monthly progress chart
│   ├── PlatformBreakdown.js # Platform-wise breakdown
│   └── PlatformCard.js     # Individual platform card
├── utils/
│   └── animations.js       # Animation utilities
├── styles.css              # Global styles
├── App.js                  # Main app component
└── index.js               # React entry point
```

## Key Components

### Sidebar
- Navigation menu with different sections
- Animated logo with bouncing text effect
- Active state management

### Welcome Header
- Personalized welcome message
- Daily progress indicators
- Streak widget with fire animation

### Striver Card
- Circular progress indicator
- Progress bar with shimmer effect
- Action buttons for external links

### Total Card
- Sparkline chart showing recent activity
- Monthly and weekly statistics
- Achievement badge

### Monthly Progress
- Interactive line chart
- Tooltip on hover
- Goal tracking

### Platform Breakdown
- Grid of platform cards
- Progress tracking for each platform
- External link integration

## Technologies Used

- **React 18** - Modern React with hooks
- **CSS3** - Custom styling with animations
- **Anime.js** - Smooth animations and transitions
- **Font Awesome** - Icons
- **Responsive Design** - Mobile-first approach

## Customization

### Adding New Platforms
To add a new coding platform, update the `platforms` array in `PlatformBreakdown.js`:

```javascript
{
  name: 'New Platform',
  logo: '🆕',
  handle: '@your_handle',
  solved: 100,
  total: 1000,
  progress: 10,
  color: 'purple',
  url: 'https://platform.com/profile',
  isActive: true
}
```

### Updating Progress Data
Modify the data in respective components:
- `StriverCard.js` - Update progress percentage and numbers
- `TotalCard.js` - Update total solved and sparkline data
- `MonthlyProgress.js` - Update weekly progress data
- `PlatformBreakdown.js` - Update platform statistics

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modern dashboard designs
- Uses Striver's 450 DSA sheet as a reference
- Built with performance and user experience in mind 
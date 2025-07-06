# 🚀 Ace Hub - Enhanced Dashboard

A modern, responsive dashboard for students with AI tools, games, and productivity apps.

## ✨ Features

- **🤖 AI Tools Hub**: 23+ educational AI tools for coding, math, writing, and research
- **🎮 Games Hub**: 17+ educational and brain-training games
- **📱 App Launcher**: Quick access to school and productivity apps
- **📊 System Analytics**: Real-time performance monitoring
- **🎨 Modern Design**: Glassmorphism effects, animations, and responsive layout

## 🛠️ Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Advanced animations, gradients, and responsive design
- **Vanilla JavaScript**: Interactive functionality and real-time updates
- **GitHub Pages**: Static hosting

## 📁 File Structure

```
ace-hub/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ace-hub.git
   cd ace-hub
   ```

2. **Open in browser**
   ```bash
   # Open index.html in your preferred browser
   open index.html
   # OR
   python -m http.server 8000  # For a local server
   ```

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/ (root)` folder
   - Your site will be available at: `https://yourusername.github.io/ace-hub`

## 🎯 Sections Overview

### 🤖 AI Tools (23 tools)
- **Main Assistants**: ChatGPT, Claude, Gemini, Microsoft Copilot
- **Math & Science**: Photomath, Symbolab, Mathway, Calculator
- **Coding**: GitHub Copilot, Codeium, Cursor, Codecademy
- **Writing**: QuillBot, Hemingway, Google Docs, Wordtune
- **Research**: Perplexity, Phind, Google Scholar, Semantic Scholar
- **Study Tools**: Quizlet, Khan Academy, Socratic, Coursera
- **Languages**: Babbel, Google Translate, DeepL, Memrise
- **Science**: PhET, Desmos, GeoGebra, Wikipedia

### 🎮 Games Hub (17 games)
- **Chess**: ChessKid, Chess.com, Lichess
- **Word Games**: Wordle, Wordle Unlimited, Word Scramble
- **Puzzles**: Sudoku (NYT), Sudoku.com, Jigsaw Puzzles
- **Classic**: Minesweeper, Tetris, Solitaire
- **Brain Training**: Lumosity, Elevate, Peak
- **Casual**: 2048, Cool Math Games

### 📱 Main Apps
- **Campus**: Infinite Campus portal
- **Clever**: Educational platform access
- **Gmail**: Email management
- **YouTube**: Video content
- **Google Drive**: Cloud storage
- **GitHub**: Code repositories

## 🎨 Design Features

### Visual Effects
- **Glassmorphism**: Frosted glass effects with backdrop blur
- **Gradient Animations**: Smooth color transitions and rotating borders
- **3D Hover Effects**: Mouse tracking for immersive interactions
- **Micro-animations**: Shimmer effects, ripples, and smooth transitions

### Responsive Design
- **Mobile-first**: Optimized for all screen sizes
- **Flexible Grid**: Adaptive layouts for different devices
- **Touch-friendly**: Large tap targets and smooth interactions

## ⚡ Performance

- **Real-time Monitoring**: FPS counter and network latency tracking
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Efficient Code**: Vanilla JavaScript for minimal overhead
- **Fast Loading**: Optimized assets and minimal dependencies

## 🎮 Interactive Features

### Keyboard Shortcuts
- **Escape**: Close all open panels
- **Mouse Tracking**: 3D tilt effects on cards

### Panel System
- **Stats Panel**: System performance metrics
- **AI Panel**: Scrollable grid of AI tools
- **Games Panel**: Educational and fun games
- **Tools Panel**: Ready for future expansion

## 🔧 Customization

### Adding New Apps
1. Open `index.html`
2. Add new app item in the sidebar:
```html
<div class="app-item" onclick="openApp('URL', 'Name')">
    <img src="icon-url" alt="App Name">
    <span class="app-name">App Name</span>
</div>
```

### Adding New AI Tools/Games
1. Find the appropriate panel in `index.html`
2. Add new item to the grid:
```html
<a href="URL" target="_blank" class="ai-item">
    <img src="icon-url" alt="Tool Name">
    <span class="ai-name">Tool Name</span>
</a>
```

### Styling Modifications
- Edit `styles.css` for visual changes
- Modify CSS custom properties for theme adjustments
- Update animations and transitions as needed

## 📱 Browser Support

- **Chrome**: Full support
- **Firefox**: Full support
- **Safari**: Full support
- **Edge**: Full support
- **Mobile browsers**: Responsive design optimized

## 🌟 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] User customization settings
- [ ] Bookmark management
- [ ] Calendar integration
- [ ] Note-taking functionality
- [ ] Custom app categories

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainer.

---

**Built with ❤️ for students by students**
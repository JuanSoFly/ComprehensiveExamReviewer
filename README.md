# Academic Reviewer - Premium Exam Companion

**A sophisticated, library-inspired study tool with 300 questions**

---

## Design Philosophy: Academic Noir

This isn't just another exam reviewer. It's a **premium study companion** designed to evoke the atmosphere of a distinguished university library - rich burgundy leather, antique gold accents, and the weight of academic tradition.

### Visual Identity
- **Typography**: Cinzel (Display) + Crimson Pro (Body) - elegant, scholarly fonts
- **Color Palette**: Deep burgundy, antique gold, charcoal, parchment
- **Textures**: Subtle paper grain, leather embossing effects
- **Motion**: Staggered fade-ins, typewriter effects, page-turn animations
- **Layout**: Asymmetric grid with decorative borders and overlapping elements

---

## Key Features

### Core Functionality
- [OK] **1000+ Exam Questions** across multiple categories
- [OK] **Immediate Feedback** with detailed rationalizations
- [OK] **Progress Tracking** with persistent localStorage
- [OK] **Session Timer** to track study time
- [OK] **Text-to-Speech** for auditory learners

### Premium Enhancements
- [THEATER MASK] **Academic Noir Theme** - Dark mode by default with light mode toggle
- [KEYBOARD] **Keyboard Shortcuts** - Navigate like a pro
  - `←` / `→` or `Enter`: Navigate questions
  - `1-4`: Select answers instantly
  - `Space`: Reveal answer
  - `T`: Toggle theme
  - `Shift+R`: Reset score
  - `?`: Show keyboard shortcuts
- [CLAPPER BOARD] **Staggered Animations** - Every element reveals with purpose
- [MOBILE PHONE] **Touch Gestures** - Swipe navigation with visual indicators
- [SPEAKER] **Voice Reading** - Listen to questions and explanations
- [BULLSEYE] **Typewriter Effect** - Questions appear character by character

---

## Quick Start

### Local Development
```bash
# Clone or download the project
cd ComprehensiveExamReviewer

# Simply open in browser
open index.html

# Or use a local server
python3 -m http.server 8000
```

### PWA Installation
1. Open in Chrome/Edge/Safari
2. Install as app (if supported)
3. Works offline after first load

---

## Design System

### Color Variables
```css
--color-ink: #1a0f0f;           /* Deep charcoal */
--color-burgundy: #4a0404;      /* Rich burgundy */
--color-gold: #d4af37;          /* Antique gold */
--color-parchment: #f4e8d0;     /* Warm cream */
```

### Typography
```css
--font-display: 'Cinzel', serif;    /* Headers */
--font-body: 'Crimson Pro', serif;  /* Body text */
--font-mono: 'Courier New', monospace; /* Numbers */
```

---

## Technologies Used

-   **HTML5**: Semantic structure with modern markup
-   **CSS3**: Advanced styling with CSS variables, animations, and responsive design
-   **JavaScript**: Modular architecture with enhanced interactions
-   **JSON**: 1000+ questions with detailed rationalizations
-   **Web Fonts**: Cinzel + Crimson Pro from Google Fonts
-   **PWA**: Web manifest for standalone installation

---

## File Structure

```
ComprehensiveExamReviewer/
├── index.html              # Main HTML structure
├── style.css               # Academic Noir CSS (987 lines)
├── script.js               # Enhanced JavaScript logic
├── questions.json          # 1000+ questions
├── assets/
│   ├── site.webmanifest    # PWA configuration
│   ├── favicon-*.png       # Icons
│   └── android-chrome-*.png # App icons
└── README.md               # This file
```

---

## User Experience Flow

### First Load
1. Loading overlay with spinner
2. Font loading detection
3. Questions fetch from JSON
4. Staggered reveal animations
5. First question with typewriter effect

### During Quiz
1. Question appears with character-by-character animation
2. Options fade in with stagger (80ms delay each)
3. User selects answer → immediate feedback
4. Rationalization panel slides down
5. Correct answer glows with success color
6. Score updates with subtle scale animation
7. Session timer continues running

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` / `→` | Previous / Next question |
| `Enter` | Next question |
| `1-4` | Select answer 1-4 |
| `Space` | Reveal answer |
| `T` | Toggle theme |
| `Shift+R` | Reset score |
| `?` | Show shortcuts guide |

---

## Responsive Design

| Device | Layout |
|--------|--------|
| **Desktop (>=768px)** | Two-column: Question + Rationalization |
| **Tablet (480-767px)** | Single column, stacked navigation |
| **Mobile (<480px)** | Compact, swipe indicators, touch-friendly |

---

## Visual Details

### Background Effects
- **Noise Texture**: Subtle grain overlay (SVG filter)
- **Ornaments**: Circular decorative borders in corners
- **Gradient Border**: 3px gold gradient on panels

### Interactive States
- **Hover**: Translate Y(-2px), shadow glow
- **Focus**: Gold outline with offset
- **Active**: Scale down slightly
- **Disabled**: 30% opacity, no pointer events

### Answer Feedback
- **Correct**: Green background + border + left accent
- **Wrong**: Red background + border + left accent
- **Selected**: Gold border + translate X(6px)
- **Disabled**: Grayed out, no interaction

---

## Performance Optimizations

### Font Loading
- Preconnect to Google Fonts
- `font-display: optional` prevents invisible text
- System font fallback during load
- Font detection adds `.fonts-loaded` class

### Asset Loading
- Preload critical fonts
- Inline critical CSS
- SVG data URIs for small graphics

### Animation Performance
- CSS transforms (GPU accelerated)
- Opacity changes (no layout recalc)
- Reduced motion support for accessibility

---

## Accessibility Features

### Semantic HTML
- `<main>`, `<nav>`, `<section>`, `<footer>`
- ARIA labels on interactive elements
- Proper heading hierarchy

### Keyboard Navigation
- Full keyboard support
- Focus indicators
- Logical tab order

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
    /* Disable animations */
}
```

### Color Contrast
- WCAG AA compliant
- High contrast in both themes

---

## PWA Features

### Manifest
- Name: "Academic Reviewer"
- Short name: "Reviewer"
- Theme color: Deep burgundy (#1a0f0f)
- Background color: Deep burgundy (#1a0f0f)
- Display: Standalone (no browser chrome)

### Icons
- 192x192 (Android home screen)
- 512x512 (Splash screen)
- Apple touch icon (iOS)
- Favicon (browser tab)

### Offline Support
- Questions cached in memory
- Progress stored in localStorage
- Works without internet after load

---

## Troubleshooting

### Fonts Not Loading
- Check internet connection
- Clear browser cache
- Check console for CORS errors

### Questions Not Loading
- Verify `questions.json` exists
- Check file paths
- Look for JSON syntax errors

### Storage Issues
- Clear localStorage: `localStorage.clear()`
- Check browser privacy settings

---

## Future Plans

### Planned Features
- [ ] Category selection screen
- [ ] Quiz vs Review modes
- [ ] Bookmark favorite questions
- [ ] Export results as PDF
- [ ] Search functionality
- [ ] Statistics dashboard

---

## Contact

**Juan Teodoro De Vera**
📧 [juanteodoro.devera@gmail.com](mailto:juanteodoro.devera@gmail.com)
Building tools for academic excellence

---

## Thank You

Thank you for using Academic Reviewer. May your studies be productive and your exams successful!

**"The beautiful thing about learning is that no one can take it away from you."**
— B.B. King

---

## Version History

### v2.0 - Academic Noir (Current)
- Complete visual redesign
- Premium typography (Cinzel + Crimson Pro)
- Enhanced animations and micro-interactions
- Keyboard shortcuts
- Session timer
- Improved accessibility
- PWA improvements

### v1.0 - Original
- Basic functionality
- Simple UI
- Score tracking
- Text-to-speech

---

**Built with heart and coffee for serious students**

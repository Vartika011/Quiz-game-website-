# 🧠 Interactive Quiz Builder & Player

A modern, responsive React application for creating, managing, and taking interactive quizzes. Built with React, Tailwind CSS, and featuring a clean, intuitive user interface.

## ✨ Features

### 🎯 Core Functionality
- **Quiz Creation**: Build custom quizzes with multiple question types
- **Quiz Management**: Edit, delete, and organize your quizzes
- **Interactive Quiz Player**: Take quizzes with real-time feedback
- **Score Tracking**: Detailed results and performance analytics
- **Local Storage**: All data persisted in browser storage

### 🚀 Advanced Features
- **Multiple Question Types**: Multiple choice, True/False, Short answer
- **Timer Support**: Optional timers per question or entire quiz
- **Question Shuffling**: Randomize question order for variety
- **Progress Tracking**: Visual progress bars and completion status
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Clean transitions and hover effects

### 🎨 UI/UX Highlights
- **Modern Design**: Clean, professional interface with Tailwind CSS
- **Intuitive Navigation**: Easy-to-use quiz creation and management
- **Real-time Feedback**: Immediate feedback on quiz answers
- **Detailed Analytics**: Comprehensive score breakdown and insights
- **Accessibility**: Keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **Frontend**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Create React App with CRACO
- **Storage**: localStorage (with Firebase integration available)

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   yarn install
   ```

4. **Start the development server**
   ```bash
   yarn start
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🎮 How to Use

### Creating a Quiz
1. Click "Create New Quiz" on the home page
2. Enter quiz title, description, and category
3. Configure quiz settings (timer, shuffle options)
4. Add questions with multiple choice options
5. Set correct answers and explanations
6. Save your quiz

### Taking a Quiz
1. Browse available quizzes on the home page
2. Click "Start Quiz" on any quiz
3. Answer questions one by one
4. View your results and detailed review
5. Retake quizzes to improve your score

### Managing Quizzes
- **Edit**: Click the edit icon on any quiz card
- **Delete**: Click the delete icon to remove quizzes
- **Search**: Use the search bar to find specific quizzes
- **Filter**: Filter by category or sort by different criteria

## 📊 Sample Data

The application comes with 5 pre-loaded quizzes:

1. **JavaScript Fundamentals** (5 questions)
   - Variable declarations, operators, array methods
   
2. **World Geography** (4 questions)
   - Capitals, continents, rivers, mountains
   
3. **Science Basics** (4 questions)
   - Physics, chemistry, biology concepts
   
4. **React Development** (4 questions)
   - JSX, hooks, component lifecycle
   
5. **General Knowledge** (4 questions)
   - Space, art, geography, world records

## 🏗️ Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── Navbar.js           # Navigation component
│   │   ├── QuizCreator.js      # Quiz creation interface
│   │   ├── QuizList.js         # Quiz listing and management
│   │   ├── QuizPlayer.js       # Interactive quiz player
│   │   └── ScoreReview.js      # Results and analytics
│   ├── firebase/               # Firebase integration (optional)
│   │   ├── config.js
│   │   └── quizService.js
│   ├── hooks/
│   │   └── use-toast.js        # Toast notification hook
│   ├── lib/
│   │   └── utils.js           # Utility functions
│   ├── mock.js                # Sample data and localStorage helpers
│   ├── App.js                 # Main application component
│   └── index.js               # Application entry point
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Adding New Question Types
1. Update the question type options in `QuizCreator.js`
2. Add rendering logic in `QuizPlayer.js`
3. Update the question type colors in the UI

### Styling
- Modify `tailwind.config.js` for custom themes
- Update component styles in individual files
- Add new UI components in `src/components/ui/`

### Data Storage
- **Current**: localStorage for browser-based storage
- **Firebase**: Available for cloud storage (see `FIREBASE_SETUP.md`)
- **Custom**: Easy to integrate other storage solutions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set build command: `yarn build`
3. Set output directory: `build`
4. Deploy automatically on push

### Netlify
1. Build the project: `yarn build`
2. Upload the `build` folder to Netlify
3. Configure redirects for React Router

### Manual Deployment
```bash
yarn build
# Upload the 'build' folder to your hosting provider
```

## 🔧 Development

### Available Scripts
- `yarn start` - Start development server
- `yarn build` - Build for production
- `yarn test` - Run tests
- `yarn eject` - Eject from Create React App

### Adding Features
1. Create new components in `src/components/`
2. Add routes in `App.js`
3. Update localStorage helpers in `mock.js`
4. Style with Tailwind CSS classes

## 🐛 Troubleshooting

### Common Issues
- **Port already in use**: Change port with `PORT=3001 yarn start`
- **Build errors**: Clear cache with `yarn start --reset-cache`
- **Styling issues**: Check Tailwind CSS configuration

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the component documentation

---

**Happy Quizzing! 🎉**

Built with ❤️ using React and Tailwind CSS
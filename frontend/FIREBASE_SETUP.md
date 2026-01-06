# Firebase Setup Instructions

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "quiz-app")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## 2. Enable Firestore Database

1. In your Firebase project, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" for development (you can secure it later)
4. Select a location for your database (choose the closest to your users)
5. Click "Done"

## 3. Get Firebase Configuration

1. In your Firebase project, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Enter an app nickname (e.g., "quiz-app-web")
6. Click "Register app"
7. Copy the Firebase configuration object

## 4. Update Firebase Configuration

Replace the placeholder values in `src/firebase/config.js` with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

## 5. Set Up Firestore Security Rules (Optional but Recommended)

In the Firestore Database section, go to "Rules" tab and update the rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to quizzes collection
    match /quizzes/{document} {
      allow read, write: if true; // For development - make more restrictive for production
    }
    
    // Allow read/write access to quizAttempts collection
    match /quizAttempts/{document} {
      allow read, write: if true; // For development - make more restrictive for production
    }
  }
}
```

## 6. Test the Integration

1. Start your development server: `yarn start`
2. Create a new quiz
3. Take the quiz
4. Check your Firestore database to see the data being stored

## Data Structure

### Quizzes Collection
```javascript
{
  title: "Quiz Title",
  description: "Quiz Description",
  category: "Programming",
  questions: [
    {
      id: "q1",
      type: "multiple-choice",
      question: "What is...?",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0,
      explanation: "Explanation text"
    }
  ],
  settings: {
    timePerQuestion: 30,
    timerEnabled: true,
    shuffleQuestions: false
  },
  createdAt: "Firebase Timestamp",
  updatedAt: "Firebase Timestamp"
}
```

### Quiz Attempts Collection
```javascript
{
  quizId: "quiz-document-id",
  quizTitle: "Quiz Title",
  score: 8,
  totalQuestions: 10,
  percentage: 80,
  answers: [
    {
      questionId: "q1",
      selectedAnswer: 0,
      correct: true,
      timeSpent: 15
    }
  ],
  timeSpent: 120,
  completedAt: "Firebase Timestamp",
  createdAt: "Firebase Timestamp"
}
```

## Production Considerations

1. **Security Rules**: Implement proper security rules for production
2. **Authentication**: Consider adding user authentication
3. **Data Validation**: Add server-side validation
4. **Backup**: Set up regular backups
5. **Monitoring**: Enable Firebase monitoring and alerts

## Troubleshooting

- **Permission Denied**: Check your Firestore security rules
- **Network Errors**: Verify your Firebase configuration
- **Data Not Loading**: Check browser console for errors
- **CORS Issues**: Ensure your domain is added to Firebase authorized domains

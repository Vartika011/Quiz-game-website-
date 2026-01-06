import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './config';

// Collection names
const QUIZZES_COLLECTION = 'quizzes';
const ATTEMPTS_COLLECTION = 'quizAttempts';

// Quiz operations
export const quizService = {
  // Get all quizzes
  async getAllQuizzes() {
    try {
      const quizzesRef = collection(db, QUIZZES_COLLECTION);
      const q = query(quizzesRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting quizzes:', error);
      throw error;
    }
  },

  // Get a single quiz by ID
  async getQuizById(quizId) {
    try {
      const quizRef = doc(db, QUIZZES_COLLECTION, quizId);
      const quizSnap = await getDoc(quizRef);
      
      if (quizSnap.exists()) {
        return {
          id: quizSnap.id,
          ...quizSnap.data()
        };
      } else {
        throw new Error('Quiz not found');
      }
    } catch (error) {
      console.error('Error getting quiz:', error);
      throw error;
    }
  },

  // Create a new quiz
  async createQuiz(quizData) {
    try {
      const quizRef = collection(db, QUIZZES_COLLECTION);
      const docRef = await addDoc(quizRef, {
        ...quizData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error creating quiz:', error);
      throw error;
    }
  },

  // Update an existing quiz
  async updateQuiz(quizId, quizData) {
    try {
      const quizRef = doc(db, QUIZZES_COLLECTION, quizId);
      await updateDoc(quizRef, {
        ...quizData,
        updatedAt: serverTimestamp()
      });
      
      return quizId;
    } catch (error) {
      console.error('Error updating quiz:', error);
      throw error;
    }
  },

  // Delete a quiz
  async deleteQuiz(quizId) {
    try {
      const quizRef = doc(db, QUIZZES_COLLECTION, quizId);
      await deleteDoc(quizRef);
      
      return true;
    } catch (error) {
      console.error('Error deleting quiz:', error);
      throw error;
    }
  }
};

// Quiz attempt operations
export const attemptService = {
  // Save a quiz attempt
  async saveAttempt(attemptData) {
    try {
      const attemptsRef = collection(db, ATTEMPTS_COLLECTION);
      const docRef = await addDoc(attemptsRef, {
        ...attemptData,
        completedAt: serverTimestamp(),
        createdAt: serverTimestamp()
      });
      
      return docRef.id;
    } catch (error) {
      console.error('Error saving attempt:', error);
      throw error;
    }
  },

  // Get all attempts for a specific quiz
  async getAttemptsByQuizId(quizId) {
    try {
      const attemptsRef = collection(db, ATTEMPTS_COLLECTION);
      const q = query(
        attemptsRef, 
        where('quizId', '==', quizId),
        orderBy('completedAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting attempts:', error);
      throw error;
    }
  },

  // Get a specific attempt by ID
  async getAttemptById(attemptId) {
    try {
      const attemptRef = doc(db, ATTEMPTS_COLLECTION, attemptId);
      const attemptSnap = await getDoc(attemptRef);
      
      if (attemptSnap.exists()) {
        return {
          id: attemptSnap.id,
          ...attemptSnap.data()
        };
      } else {
        throw new Error('Attempt not found');
      }
    } catch (error) {
      console.error('Error getting attempt:', error);
      throw error;
    }
  },

  // Get all attempts (for admin/analytics purposes)
  async getAllAttempts() {
    try {
      const attemptsRef = collection(db, ATTEMPTS_COLLECTION);
      const q = query(attemptsRef, orderBy('completedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting all attempts:', error);
      throw error;
    }
  }
};

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import {
  ArrowLeft,
  Clock,
  CheckCircle,
  XCircle,
  SkipForward,
} from "lucide-react";
import { getQuizzesFromStorage, saveAttemptToStorage } from "../mock";
import { useToast } from "../hooks/use-toast";

const QuizPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [quiz, setQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [startTime] = useState(new Date());
  const [questionStartTime, setQuestionStartTime] = useState(new Date());

  useEffect(() => {
    const quizzes = getQuizzesFromStorage();
    const foundQuiz = quizzes.find((q) => q.id === id);

    if (!foundQuiz) {
      navigate("/");
      return;
    }

    let questions = [...foundQuiz.questions];
    if (foundQuiz.settings.shuffleQuestions) {
      questions = questions.sort(() => Math.random() - 0.5);
    }

    setQuiz({ ...foundQuiz, questions });

    if (foundQuiz.settings.timerEnabled) {
      setTimeLeft(foundQuiz.settings.timePerQuestion);
    }
  }, [id, navigate]);

  /* ---------------- TIMER ---------------- */
  useEffect(() => {
    if (timeLeft > 0 && !isAnswered && quiz?.settings.timerEnabled) {
      const timer = setTimeout(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleTimeOut();
    }
  }, [timeLeft, isAnswered, quiz?.settings.timerEnabled]);

  const handleTimeOut = useCallback(() => {
    if (isAnswered) return;

    setSelectedAnswer(null);
    setIsAnswered(true);

    toast({
      title: "Time's Up!",
      description: "Moving to next question...",
      variant: "destructive",
    });

    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  }, [isAnswered, toast]);

  /* ---------------- ANSWER ---------------- */
  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;

    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        selectedAnswer: answerIndex,
        correct: isCorrect,
        timeSpent: Math.floor(
          (new Date() - questionStartTime) / 1000
        ),
      },
    ]);

    toast({
      title: isCorrect ? "Correct!" : "Incorrect",
      description: isCorrect
        ? "Well done! Moving to next question..."
        : `Correct answer: ${currentQuestion.options[currentQuestion.correctAnswer]}`,
      variant: isCorrect ? "default" : "destructive",
    });

    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setQuestionStartTime(new Date());
      if (quiz.settings.timerEnabled) {
        setTimeLeft(quiz.settings.timePerQuestion);
      }
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const totalTimeSpent = Math.floor(
      (new Date() - startTime) / 1000
    );
    const score = answers.filter((a) => a.correct).length;
    const percentage = Math.round(
      (score / quiz.questions.length) * 100
    );

    const attempt = {
      id: `attempt_${Date.now()}`,
      quizId: quiz.id,
      quizTitle: quiz.title,
      score,
      totalQuestions: quiz.questions.length,
      percentage,
      completedAt: new Date().toISOString(),
      answers,
      timeSpent: totalTimeSpent,
    };

    saveAttemptToStorage(attempt);
    navigate(`/results/${attempt.id}`);
  };

  if (!quiz) return null;

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const progress =
    ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

  /* ---------------- OPTION STYLES ---------------- */
  const getAnswerButtonStyle = (index) => {
    if (!isAnswered) {
      return selectedAnswer === index
        ? "bg-secondary border-border text-foreground"
        : "bg-card border-border text-foreground hover:bg-secondary";
    }

    if (index === currentQuestion.correctAnswer) {
      return "bg-green-500/20 border-green-500 text-green-400";
    }

    if (
      selectedAnswer === index &&
      selectedAnswer !== currentQuestion.correctAnswer
    ) {
      return "bg-red-500/20 border-red-500 text-red-400";
    }

    return "bg-card border-border text-muted-foreground";
  };

  const getAnswerIcon = (index) => {
    if (!isAnswered) return null;

    if (index === currentQuestion.correctAnswer) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    }

    if (
      selectedAnswer === index &&
      selectedAnswer !== currentQuestion.correctAnswer
    ) {
      return <XCircle className="w-5 h-5 text-red-500" />;
    }

    return null;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Exit Quiz
          </Button>

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {quiz.title}
            </h1>
            <p className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of{" "}
              {quiz.questions.length}
            </p>
          </div>
        </div>

        {quiz.settings.timerEnabled && timeLeft !== null && (
          <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Clock className="w-5 h-5" />
            <span
              className={
                timeLeft <= 10 ? "text-red-500" : "text-foreground"
              }
            >
              {timeLeft}s
            </span>
          </div>
        )}
      </div>

      {/* PROGRESS */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} />
      </div>

      {/* QUESTION CARD */}
      <Card className="bg-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <Badge variant="secondary">
              {currentQuestion.type.replace("-", " ").toUpperCase()}
            </Badge>
            <span className="text-sm text-muted-foreground">
              Score: {answers.filter((a) => a.correct).length}/
              {currentQuestionIndex}
            </span>
          </div>

          <CardTitle className="text-xl text-foreground">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all flex justify-between items-center ${getAnswerButtonStyle(
                  index
                )}`}
              >
                <span className="text-lg">{option}</span>
                {getAnswerIcon(index)}
              </button>
            ))}
          </div>

          {isAnswered &&
            currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">
                  Explanation
                </h4>
                <p className="text-muted-foreground">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

          {isAnswered &&
            currentQuestionIndex <
              quiz.questions.length - 1 && (
              <div className="mt-6 flex justify-center">
                <Button onClick={handleNextQuestion}>
                  <SkipForward className="w-4 h-4 mr-2" />
                  Next Question
                </Button>
              </div>
            )}

          {isAnswered &&
            currentQuestionIndex ===
              quiz.questions.length - 1 && (
              <div className="mt-6 flex justify-center">
                <Button size="lg" onClick={finishQuiz}>
                  View Results
                </Button>
              </div>
            )}
        </CardContent>
      </Card>

      {/* STATS */}
      <Card className="bg-card">
        <CardContent className="p-4 grid grid-cols-3 text-center gap-4">
          {[
            {
              label: "Correct",
              value: answers.filter((a) => a.correct).length,
            },
            {
              label: "Incorrect",
              value: answers.filter((a) => !a.correct).length,
            },
            {
              label: "Remaining",
              value:
                quiz.questions.length -
                currentQuestionIndex -
                1,
            },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-xl font-bold text-foreground">
                {value}
              </div>
              <div className="text-sm text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizPlayer;

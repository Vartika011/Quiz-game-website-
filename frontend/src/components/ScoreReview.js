import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  ArrowLeft,
  RotateCcw,
  Home,
  Trophy,
  Clock,
  Target,
  CheckCircle,
  XCircle,
  Award,
} from "lucide-react";
import { getAttemptsFromStorage, getQuizzesFromStorage } from "../mock";

const ScoreReview = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const attempts = getAttemptsFromStorage();
    const foundAttempt = attempts.find((a) => a.id === attemptId);

    if (!foundAttempt) {
      navigate("/");
      return;
    }

    setAttempt(foundAttempt);
    const quizzes = getQuizzesFromStorage();
    setQuiz(quizzes.find((q) => q.id === foundAttempt.quizId));
  }, [attemptId, navigate]);

  if (!attempt || !quiz) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate("/")}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Quizzes
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quiz Results</h1>
          <p className="text-muted-foreground">{attempt.quizTitle}</p>
        </div>
      </div>

      {/* Score Card */}
      <Card className="bg-card">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-destructive text-white flex items-center justify-center text-3xl font-bold">
              D
            </div>
          </div>

          <CardTitle className="text-2xl text-foreground">
            {attempt.score}/{attempt.totalQuestions}
          </CardTitle>

          <p className="text-muted-foreground">Keep Practicing 📚</p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Percentage */}
          <div>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Score Percentage</span>
              <span>{attempt.percentage}%</span>
            </div>
            <Progress value={attempt.percentage} />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Trophy, label: "Correct", value: attempt.score },
              {
                icon: Target,
                label: "Incorrect",
                value: attempt.totalQuestions - attempt.score,
              },
              {
                icon: Clock,
                label: "Total Time",
                value: `${Math.floor(attempt.timeSpent / 60)}:${String(
                  attempt.timeSpent % 60
                ).padStart(2, "0")}`,
              },
              {
                icon: Award,
                label: "Accuracy",
                value: `${attempt.percentage}%`,
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-secondary rounded-lg p-4 text-center"
              >
                <Icon className="mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setShowDetails((v) => !v)}
            >
              {showDetails ? "Hide" : "Show"} Question Review
            </Button>

            <Button
              className="flex-1"
              onClick={() => navigate(`/play/${quiz.id}`)}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Retake Quiz
            </Button>

            <Button
              variant="secondary"
              className="flex-1"
              onClick={() => navigate("/")}
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-foreground">
            Performance Insights
          </CardTitle>
        </CardHeader>

        <CardContent className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-foreground mb-3">Strengths</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Completed the entire quiz
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">
              Areas for Improvement
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Target className="w-4 h-4 mr-2 text-yellow-500" />
                Review {quiz.category} concepts
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreReview;


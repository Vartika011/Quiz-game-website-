import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Play,
  Edit,
  Trash2,
  Search,
  Filter,
  Clock,
  Users,
} from "lucide-react";
import {
  getQuizzesFromStorage,
  saveQuizzesToStorage,
  mockCategories,
} from "../mock";
import { useToast } from "../hooks/use-toast";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const { toast } = useToast();

  useEffect(() => {
    setQuizzes(getQuizzesFromStorage());
  }, []);

  const handleDeleteQuiz = (quizId, quizTitle) => {
    const updated = quizzes.filter((q) => q.id !== quizId);
    setQuizzes(updated);
    saveQuizzesToStorage(updated);
    toast({
      title: "Quiz Deleted",
      description: `"${quizTitle}" has been successfully deleted.`,
    });
  };

  const filteredQuizzes = quizzes
    .filter((quiz) => {
      const matchesSearch =
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || quiz.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "recent")
        return new Date(b.createdAt) - new Date(a.createdAt);
      if (sortBy === "title") return a.title.localeCompare(b.title);
      if (sortBy === "questions")
        return b.questions.length - a.questions.length;
      return 0;
    });

  const getCategoryColor = () =>
    "bg-secondary text-foreground border-border";

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">
          Quiz Collection
        </h1>
        <p className="text-muted-foreground text-lg">
          Challenge yourself with interactive quizzes
        </p>
      </div>

      {/* FILTERS */}
      <Card className="bg-card">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search quizzes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {mockCategories.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="title">Title (A-Z)</SelectItem>
              <SelectItem value="questions">Question Count</SelectItem>
            </SelectContent>
          </Select>

          <Button asChild>
            <Link to="/create">Create New Quiz</Link>
          </Button>
        </CardContent>
      </Card>

      {/* QUIZ GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <Card
            key={quiz.id}
            className="bg-card hover:shadow-lg transition"
          >
            <CardHeader>
              <div className="flex justify-between mb-2">
                <Badge className={getCategoryColor()}>
                  {quiz.category}
                </Badge>

                <div className="flex gap-1 opacity-0 group-hover:opacity-100">
                  <Button
                    size="icon"
                    variant="ghost"
                    asChild
                  >
                    <Link to={`/edit/${quiz.id}`}>
                      <Edit className="w-4 h-4" />
                    </Link>
                  </Button>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() =>
                      handleDeleteQuiz(quiz.id, quiz.title)
                    }
                  >
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </div>
              </div>

              <CardTitle className="text-foreground">
                {quiz.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {quiz.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {quiz.questions.length} questions
                </div>
                {quiz.settings.timerEnabled && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {quiz.settings.timePerQuestion}s/question
                  </div>
                )}
              </div>

              <Button asChild className="w-full">
                <Link to={`/play/${quiz.id}`}>
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* STATS */}
      {filteredQuizzes.length > 0 && (
        <Card className="bg-card">
          <CardContent className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-foreground">
                {quizzes.length}
              </div>
              <div className="text-muted-foreground">
                Total Quizzes
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-foreground">
                {quizzes.reduce(
                  (sum, q) => sum + q.questions.length,
                  0
                )}
              </div>
              <div className="text-muted-foreground">
                Total Questions
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-foreground">
                {
                  new Set(
                    quizzes.map((q) => q.category)
                  ).size
                }
              </div>
              <div className="text-muted-foreground">
                Categories
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-foreground">
                {filteredQuizzes.length}
              </div>
              <div className="text-muted-foreground">
                Showing
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuizList;

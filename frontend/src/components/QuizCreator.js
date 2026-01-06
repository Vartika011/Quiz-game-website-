import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Plus, Trash2, Save, ArrowLeft, Clock, Shuffle } from 'lucide-react';
import { getQuizzesFromStorage, saveQuizzesToStorage, mockCategories } from '../mock';
import { useToast } from '../hooks/use-toast';

const QuizCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditing = Boolean(id);

  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    category: '',
    questions: [],
    settings: {
      timePerQuestion: 30,
      timerEnabled: false,
      shuffleQuestions: false
    }
  });

  const [currentQuestion, setCurrentQuestion] = useState({
    type: 'multiple-choice',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0,
    explanation: ''
  });

  useEffect(() => {
    if (isEditing) {
      const quizzes = getQuizzesFromStorage();
      const quiz = quizzes.find(q => q.id === id);
      if (quiz) {
        setQuizData(quiz);
      } else {
        navigate('/');
      }
    }
  }, [id, isEditing, navigate]);

  const handleQuizInfoChange = (field, value) => {
    setQuizData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSettingsChange = (setting, value) => {
    setQuizData(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        [setting]: value
      }
    }));
  };

  const handleQuestionChange = (field, value, index = null) => {
    if (field === 'options' && index !== null) {
      setCurrentQuestion(prev => ({
        ...prev,
        options: prev.options.map((opt, i) => i === index ? value : opt)
      }));
    } else {
      setCurrentQuestion(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const addQuestion = () => {
    if (!currentQuestion.question.trim()) {
      toast({
        title: "Error",
        description: "Please enter a question.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestion.type === 'multiple-choice' && currentQuestion.options.some(opt => !opt.trim())) {
      toast({
        title: "Error", 
        description: "Please fill in all answer options.",
        variant: "destructive",
      });
      return;
    }

    const newQuestion = {
      ...currentQuestion,
      id: `q${Date.now()}`,
      options: currentQuestion.type === 'true-false' ? ['True', 'False'] : currentQuestion.options
    };

    setQuizData(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));

    // Reset form
    setCurrentQuestion({
      type: 'multiple-choice',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
      explanation: ''
    });

    toast({
      title: "Question Added",
      description: "Question has been added to your quiz.",
    });
  };

  const removeQuestion = (questionId) => {
    setQuizData(prev => ({
      ...prev,
      questions: prev.questions.filter(q => q.id !== questionId)
    }));

    toast({
      title: "Question Removed",
      description: "Question has been removed from your quiz.",
    });
  };

  const saveQuiz = () => {
    if (!quizData.title.trim() || !quizData.category || quizData.questions.length === 0) {
      toast({
        title: "Error",
        description: "Please fill in quiz title, category, and add at least one question.",
        variant: "destructive",
      });
      return;
    }

    const quizzes = getQuizzesFromStorage();
    
    if (isEditing) {
      const updatedQuizzes = quizzes.map(q => 
        q.id === id ? { ...quizData, id } : q
      );
      saveQuizzesToStorage(updatedQuizzes);
      toast({
        title: "Quiz Updated",
        description: "Your quiz has been successfully updated.",
      });
    } else {
      const newQuiz = {
        ...quizData,
        id: Date.now().toString(),
        createdAt: new Date().toISOString().split('T')[0]
      };
      saveQuizzesToStorage([...quizzes, newQuiz]);
      toast({
        title: "Quiz Created",
        description: "Your quiz has been successfully created.",
      });
    }

    navigate('/');
  };

  const getQuestionTypeColor = (type) => {
    const colors = {
      'multiple-choice': 'bg-blue-100 text-blue-800',
      'true-false': 'bg-green-100 text-green-800',
      'short-answer': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Quizzes
        </Button>
        <h1 className="text-3xl font-bold text-slate-900">
          {isEditing ? 'Edit Quiz' : 'Create New Quiz'}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quiz Information */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center">
              Quiz Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Quiz Title *</Label>
              <Input
                id="title"
                value={quizData.title}
                onChange={(e) => handleQuizInfoChange('title', e.target.value)}
                placeholder="Enter quiz title..."
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={quizData.description}
                onChange={(e) => handleQuizInfoChange('description', e.target.value)}
                placeholder="Brief description of the quiz..."
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="category">Category *</Label>
              <Select value={quizData.category} onValueChange={(value) => handleQuizInfoChange('category', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {mockCategories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Settings */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              <h3 className="font-semibold">Quiz Settings</h3>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-slate-500" />
                  <Label htmlFor="timer">Enable Timer</Label>
                </div>
                <Switch
                  id="timer"
                  checked={quizData.settings.timerEnabled}
                  onCheckedChange={(checked) => handleSettingsChange('timerEnabled', checked)}
                />
              </div>

              {quizData.settings.timerEnabled && (
                <div>
                  <Label htmlFor="timePerQuestion">Time per Question (seconds)</Label>
                  <Input
                    id="timePerQuestion"
                    type="number"
                    value={quizData.settings.timePerQuestion}
                    onChange={(e) => handleSettingsChange('timePerQuestion', parseInt(e.target.value) || 30)}
                    min="10"
                    max="300"
                    className="mt-1"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shuffle className="w-4 h-4 text-slate-500" />
                  <Label htmlFor="shuffle">Shuffle Questions</Label>
                </div>
                <Switch
                  id="shuffle"
                  checked={quizData.settings.shuffleQuestions}
                  onCheckedChange={(checked) => handleSettingsChange('shuffleQuestions', checked)}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Add Question */}
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Add Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="questionType">Question Type</Label>
              <Select 
                value={currentQuestion.type} 
                onValueChange={(value) => handleQuestionChange('type', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                  <SelectItem value="true-false">True/False</SelectItem>
                  <SelectItem value="short-answer">Short Answer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="questionText">Question *</Label>
              <Textarea
                id="questionText"
                value={currentQuestion.question}
                onChange={(e) => handleQuestionChange('question', e.target.value)}
                placeholder="Enter your question..."
                className="mt-1"
              />
            </div>

            {currentQuestion.type === 'multiple-choice' && (
              <div>
                <Label>Answer Options *</Label>
                <div className="space-y-2 mt-1">
                  {currentQuestion.options.map((option, index) => (
                    <div key={index} className="flex space-x-2">
                      <Input
                        value={option}
                        onChange={(e) => handleQuestionChange('options', e.target.value, index)}
                        placeholder={`Option ${index + 1}...`}
                        className={currentQuestion.correctAnswer === index ? 'border-green-300 bg-green-50' : ''}
                      />
                      <Button
                        type="button"
                        variant={currentQuestion.correctAnswer === index ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => handleQuestionChange('correctAnswer', index)}
                        className="whitespace-nowrap"
                      >
                        Correct
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentQuestion.type === 'true-false' && (
              <div>
                <Label>Correct Answer</Label>
                <Select 
                  value={currentQuestion.correctAnswer.toString()} 
                  onValueChange={(value) => handleQuestionChange('correctAnswer', parseInt(value))}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">True</SelectItem>
                    <SelectItem value="1">False</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label htmlFor="explanation">Explanation (Optional)</Label>
              <Textarea
                id="explanation"
                value={currentQuestion.explanation}
                onChange={(e) => handleQuestionChange('explanation', e.target.value)}
                placeholder="Explain why this is the correct answer..."
                className="mt-1"
              />
            </div>

            <Button onClick={addQuestion} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Question
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Questions List */}
      {quizData.questions.length > 0 && (
        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle>Questions ({quizData.questions.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quizData.questions.map((question, index) => (
                <div key={question.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge className={`${getQuestionTypeColor(question.type)} text-xs`}>
                        {question.type.replace('-', ' ')}
                      </Badge>
                      <span className="text-sm text-slate-500">Question {index + 1}</span>
                    </div>
                    <p className="font-medium text-slate-900 truncate">{question.question}</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Correct: {question.type === 'true-false' 
                        ? (question.correctAnswer === 0 ? 'True' : 'False')
                        : question.options[question.correctAnswer]
                      }
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeQuestion(question.id)}
                    className="hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={saveQuiz} size="lg" className="px-8">
          <Save className="w-4 h-4 mr-2" />
          {isEditing ? 'Update Quiz' : 'Create Quiz'}
        </Button>
      </div>
    </div>
  );
};

export default QuizCreator;
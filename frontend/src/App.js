import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizList from "./components/QuizList";
import QuizCreator from "./components/QuizCreator";
import QuizPlayer from "./components/QuizPlayer";
import ScoreReview from "./components/ScoreReview";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App min-h-screen bg-slate-900 text-white">

      <BrowserRouter>
        <Navbar />

        <main className="container mx-auto px-4 py-8 max-w-6xl">
          <Routes>
            <Route path="/" element={<QuizList />} />
            <Route path="/create" element={<QuizCreator />} />
            <Route path="/edit/:id" element={<QuizCreator />} />
            <Route path="/play/:id" element={<QuizPlayer />} />
            <Route
              path="/results/:attemptId"
              element={<ScoreReview />}
            />
          </Routes>
        </main>

        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;

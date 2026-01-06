import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Plus, Home } from 'lucide-react';
import logo from '../logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-[hsl(var(--background))] shadow-sm border-b border-[hsl(var(--border))]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO + TITLE */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white">
              <img
                src={logo}
                alt="BrainPlay Logo"
                className="w-7 h-7-125 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-[hsl(var(--foreground))]">
              BrainPlay
            </span>
          </Link>

          {/* BUTTONS */}
          <div className="flex items-center space-x-4">
            <Button
              variant={location.pathname === '/' ? 'default' : 'ghost'}
              asChild
              className="transition-all duration-200 hover:scale-105"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Quizzes
              </Link>
            </Button>

            <Button
              variant={location.pathname === '/create' ? 'default' : 'ghost'}
              asChild
              className="transition-all duration-200 hover:scale-105"
            >
              <Link to="/create">
                <Plus className="w-4 h-4 mr-2" />
                Create Quiz
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

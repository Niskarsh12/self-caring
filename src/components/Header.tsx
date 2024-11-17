import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <div className="absolute -inset-1 bg-purple-600/20 blur-lg rounded-full -z-10" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            SelfCare.ai
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#about" className="text-gray-600 hover:text-purple-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-purple-600 transition-colors">Contact</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}
import React, { useState, useEffect } from 'react';
//import './TypeWriter.css'; // Add a CSS file for additional styles.

interface TypeWriterProps {
  phrases: string[];
  staticText: string;
  className?: string;
}

export function TypeWriter({ phrases, staticText, className = '' }: TypeWriterProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 120; // Adjusted for smoother effect
    const pauseDuration = 1500; // Pause before starting to delete
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting && currentText === currentPhrase) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((current) => (current + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((current) =>
        isDeleting ? current.slice(0, -1) : currentPhrase.slice(0, current.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <h1 className={`typewriter ${className}`}>
      {staticText}
      <span className="dynamic-text">
        {' '}{currentText}
        <span className="cursor">|</span>
      </span>
    </h1>
  );
}

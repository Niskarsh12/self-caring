import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

export function ConnectingLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const updatePaths = () => {
      const cards = Array.from(document.querySelectorAll('.floating-card'));
      if (!svgRef.current || cards.length === 0) return;

      const svg = svgRef.current;
      const svgRect = svg.getBoundingClientRect();
      
      // Starting point from top
      const startPoint: Point = {
        x: svgRect.width / 2,
        y: 0
      };

      // Get card centers
      const cardPoints: Point[] = cards.map(card => {
        const rect = card.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - svgRect.left,
          y: rect.top + rect.height / 2 - svgRect.top
        };
      });

      // Create path
      let pathD = `M ${startPoint.x} ${startPoint.y}`;
      
      cardPoints.forEach((point, index) => {
        const prevPoint = index === 0 ? startPoint : cardPoints[index - 1];
        const controlPoint1 = {
          x: prevPoint.x,
          y: (prevPoint.y + point.y) / 2
        };
        const controlPoint2 = {
          x: point.x,
          y: (prevPoint.y + point.y) / 2
        };
        pathD += ` C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${point.x} ${point.y}`;
      });

      const path = svg.querySelector('path');
      if (path) {
        path.setAttribute('d', pathD);
      }
    };

    // Initial update
    updatePaths();

    // Update on resize and scroll
    window.addEventListener('resize', updatePaths);
    window.addEventListener('scroll', updatePaths);

    return () => {
      window.removeEventListener('resize', updatePaths);
      window.removeEventListener('scroll', updatePaths);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-[5]"
      style={{ minHeight: '100%' }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="animate-gradient-stop-1">
            <animate
              attributeName="stop-color"
              values="#8B5CF6;#EC4899;#3B82F6;#8B5CF6"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="50%" className="animate-gradient-stop-2">
            <animate
              attributeName="stop-color"
              values="#EC4899;#3B82F6;#8B5CF6;#EC4899"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" className="animate-gradient-stop-3">
            <animate
              attributeName="stop-color"
              values="#3B82F6;#8B5CF6;#EC4899;#3B82F6"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        d=""
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="connecting-line"
        strokeLinecap="round"
        strokeDasharray="5,5"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;10"
          dur="0.5s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
"use client";

import { useEffect, useState, useRef } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  delay: number;
  side: 'left' | 'right';
}

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const leftIndicatorRef = useRef<HTMLDivElement>(null);
  const leftTrailRef = useRef<HTMLDivElement>(null);
  const rightIndicatorRef = useRef<HTMLDivElement>(null);
  const rightTrailRef = useRef<HTMLDivElement>(null);
  const progressLineLeftRef = useRef<HTMLDivElement>(null);
  const progressLineRightRef = useRef<HTMLDivElement>(null);
  const sparkleIdRef = useRef(0);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    let rafId: number;
    
    const updateScrollProgress = () => {
      rafId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollableHeight = documentHeight - windowHeight;
        const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
        const clampedProgress = Math.min(100, Math.max(0, progress));
        
        // Calculate position percentage for the indicator
        const positionPercent = scrollableHeight > 0 
          ? (scrollTop / scrollableHeight) * 100 
          : 0;
        const clampedPosition = Math.min(100, Math.max(0, positionPercent));
        
        // Calculate inverted position for right side (opposite direction)
        const invertedPosition = 100 - clampedPosition;
        
        // Detect scroll direction and create sparkles
        const scrollDelta = Math.abs(scrollTop - lastScrollTop.current);
        const isScrolling = scrollDelta > 0;
        lastScrollTop.current = scrollTop;
        
        if (isScrolling && Math.random() > 0.7) {
          // Create sparkles from both sides
          const leftY = (clampedPosition / 100) * window.innerHeight;
          const rightY = (invertedPosition / 100) * window.innerHeight;
          
          // Create 2-4 sparkles per side
          const sparkleCount = Math.floor(Math.random() * 3) + 2;
          
          for (let i = 0; i < sparkleCount; i++) {
            // Left side sparkles
            const leftAngle = (Math.random() * Math.PI * 2);
            const leftDistance = 30 + Math.random() * 50;
            const leftX = Math.cos(leftAngle) * leftDistance;
            const leftYOffset = Math.sin(leftAngle) * leftDistance;
            
            setSparkles((prev) => [
              ...prev,
              {
                id: sparkleIdRef.current++,
                x: 0,
                y: leftY,
                angle: leftAngle,
                distance: leftDistance,
                delay: Math.random() * 0.2,
                side: 'left',
              },
            ]);
            
            // Right side sparkles
            const rightAngle = (Math.random() * Math.PI * 2);
            const rightDistance = 30 + Math.random() * 50;
            const rightX = Math.cos(rightAngle) * rightDistance;
            const rightYOffset = Math.sin(rightAngle) * rightDistance;
            
            setSparkles((prev) => [
              ...prev,
              {
                id: sparkleIdRef.current++,
                x: window.innerWidth,
                y: rightY,
                angle: rightAngle,
                distance: rightDistance,
                delay: Math.random() * 0.2,
                side: 'right',
              },
            ]);
          }
        }
        
        setScrollProgress(clampedProgress);
        
        // Directly update DOM elements for instant response
        if (leftIndicatorRef.current) {
          leftIndicatorRef.current.style.top = `${clampedPosition}%`;
        }
        if (leftTrailRef.current) {
          leftTrailRef.current.style.top = `${clampedPosition}%`;
        }
        if (rightIndicatorRef.current) {
          rightIndicatorRef.current.style.top = `${invertedPosition}%`;
        }
        if (rightTrailRef.current) {
          rightTrailRef.current.style.top = `${invertedPosition}%`;
        }
        if (progressLineLeftRef.current) {
          progressLineLeftRef.current.style.height = `${clampedProgress}%`;
        }
        if (progressLineRightRef.current) {
          progressLineRightRef.current.style.height = `${clampedProgress}%`;
        }
        
        // Update CSS variables for other uses
        document.documentElement.style.setProperty(
          "--scroll-progress",
          `${clampedProgress}%`
        );
      });
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    
    // Update on resize
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const percentage = Math.round(scrollProgress);

  return (
    <>
      {/* Left side scrollbar */}
      <div className="scrollbar-container scrollbar-left">
        <div 
          ref={progressLineLeftRef}
          className="scrollbar-progress-line" 
        />
        <div 
          ref={leftTrailRef}
          className="scrollbar-trail"
        />
        <div 
          ref={leftIndicatorRef}
          className="scrollbar-indicator"
        />
      </div>
      
      {/* Right side scrollbar */}
      <div className="scrollbar-container scrollbar-right">
        <div 
          ref={progressLineRightRef}
          className="scrollbar-progress-line" 
        />
        <div 
          ref={rightTrailRef}
          className="scrollbar-trail"
        />
        <div 
          ref={rightIndicatorRef}
          className="scrollbar-indicator"
        />
      </div>
      
      <div className="scrollbar-percentage">{percentage}%</div>
      
      {/* Sparkle particles */}
      {sparkles.map((sparkle) => {
        const endX = Math.cos(sparkle.angle) * sparkle.distance;
        const endY = Math.sin(sparkle.angle) * sparkle.distance;
        
        return (
          <div
            key={sparkle.id}
            className="scrollbar-sparkle"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              '--sparkle-translate-x': `${endX}px`,
              '--sparkle-translate-y': `${endY}px`,
              '--sparkle-delay': `${sparkle.delay}s`,
            } as React.CSSProperties}
            onAnimationEnd={() => {
              setSparkles((prev) => prev.filter((s) => s.id !== sparkle.id));
            }}
          />
        );
      })}
    </>
  );
}


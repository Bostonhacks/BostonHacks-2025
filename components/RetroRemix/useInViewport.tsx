'use client';

import { useEffect, useRef, useState } from 'react';

interface WindowsAnimationTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export default function WindowsAnimationTrigger({ children, className }: WindowsAnimationTriggerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className={className}
      data-animate={isVisible}
    >
      {children}
    </div>
  );
}


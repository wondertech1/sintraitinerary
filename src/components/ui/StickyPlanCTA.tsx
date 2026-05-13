'use client';

import { useEffect, useState } from 'react';
import { MapPin, X } from 'lucide-react';

interface StickyPlanCTAProps { label?: string; href?: string; }

export function StickyPlanCTA({ label = 'Plan My Trip', href = '/plan-my-trip' }: StickyPlanCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      setIsVisible(scrollPercentage > 30 && !isDismissed);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="relative">
        <button onClick={() => setIsDismissed(true)} className="absolute -top-2 -right-2 w-6 h-6 bg-gray-900 text-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors" aria-label="Dismiss">
          <X className="w-4 h-4" />
        </button>
        <a href={href} className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#fbbf24] text-gray-900 font-semibold px-5 py-3 rounded-xl shadow-lg transition-colors text-sm sm:text-base">
          <MapPin className="w-5 h-5" />
          {label}
        </a>
      </div>
    </div>
  );
}

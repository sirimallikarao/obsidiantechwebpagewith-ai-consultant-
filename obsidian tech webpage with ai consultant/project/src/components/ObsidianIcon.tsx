import React from 'react';
import { Hexagon, Diamond } from 'lucide-react';

export function ObsidianIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Hexagon className="w-full h-full text-purple-500 stroke-2" />
      <Diamond className="absolute inset-0 w-full h-full text-purple-500 stroke-2 scale-50" />
    </div>
  );
}
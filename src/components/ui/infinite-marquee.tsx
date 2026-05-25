"use client";

import React from "react";

export function InfiniteMarquee({ 
  items, 
  reverse = false, 
  speed = "30s" 
}: { 
  items: string[], 
  reverse?: boolean, 
  speed?: string 
}) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden w-full select-none group [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div 
        className={`flex min-w-full shrink-0 items-center justify-around gap-6 ${reverse ? 'animate-[marquee-reverse_linear_infinite]' : 'animate-[marquee_linear_infinite]'} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {duplicatedItems.map((item, i) => (
          <div key={i} className="px-6 py-4 glass-card rounded-xl text-lg font-mono whitespace-nowrap text-foreground flex-shrink-0 cursor-none">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
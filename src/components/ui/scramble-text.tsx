"use client";

import { useState, useEffect } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

// 1. Added 'delay' to the TypeScript type definition here
export function ScrambleText({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string; 
  className?: string; 
  delay?: number; // 👈 Tells TypeScript that delay is a number and is optional
}) {
  const [displayText, setDisplayText] = useState(""); // Start empty so it doesn't flash the full text

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    const scramble = () => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    };

    // 2. Wrap the interval in a timeout to respect the delay prop (multiplied by 1000 for milliseconds)
    timeout = setTimeout(() => {
      interval = setInterval(scramble, 30);
    }, delay * 1000);

    // 3. Clean up both the timeout and interval if the component unmounts
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, delay]); // Added 'delay' to the dependency array

  return <span className={className}>{displayText}</span>;
}
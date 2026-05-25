"use client";

import { useState, useEffect } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export function ScrambleText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const scramble = () => {
      setDisplayText((prev) =>
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

      iteration += 1 / 3; // Controls the speed of the effect
    };

    const startScramble = () => {
      interval = setInterval(scramble, 30);
    };

    if (delay > 0) {
      timeout = setTimeout(startScramble, delay * 1000);
    } else {
      startScramble();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      clearInterval(interval);
    };
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
}
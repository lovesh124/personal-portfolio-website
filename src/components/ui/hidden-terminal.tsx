"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/data/resume";
import { useSound } from "@/hooks/use-sound";
import React from "react";

interface CommandHistory {
  command: string;
  output: string | React.JSX.Element;
}

export function HiddenTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    { command: "", output: "Welcome to the LOVESH_OS v1.0.0 Terminal.\nType 'help' for available commands." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const { playType, playHover } = useSound();

  // Listen for tilde key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // open on standard ` or ~ key, or Ctrl+`
      if (e.key === '`' || e.key === '~' || (e.ctrlKey && e.key === '`')) {
        // Prevent default so we don't type a backtick in the input
        e.preventDefault();
        setIsOpen((prev) => !prev);
        playHover();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playHover]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      playHover(); // Use as enter sound
      
      let output: string | React.JSX.Element = "";
      
      if (cmd === '') {
        output = "";
      } else if (cmd === 'help') {
        output = "Available commands: about, skills, projects, clear, exit";
      } else if (cmd === 'about') {
        output = `${resumeData.name} - ${resumeData.title}\n${resumeData.contact.location} | ${resumeData.contact.email}`;
      } else if (cmd === 'skills') {
        output = resumeData.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('\n');
      } else if (cmd === 'projects') {
        output = resumeData.projects.map(p => `- ${p.name}: ${p.tech}`).join('\n');
      } else if (cmd === 'clear') {
        setHistory([]);
        setInput("");
        return;
      } else if (cmd === 'exit') {
        setIsOpen(false);
        setInput("");
        return;
      } else {
        output = `Command not found: ${cmd}. Type 'help' for a list of commands.`;
      }

      setHistory(prev => [...prev, { command: '> ' + input, output }]);
      setInput("");
    } else {
      // Play type sound on ordinary keystrokes
      if (e.key.length === 1 || e.key === 'Backspace') {
        playType();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-[600px] h-[350px] glass-card rounded-xl p-5 font-mono text-xs text-accent overflow-hidden flex flex-col z-[100] border border-[#06b6d4]/30 shadow-[0_0_40px_rgba(6,182,212,0.15)] bg-black/60 backdrop-blur-3xl"
        >
          <div className="flex justify-between items-center mb-3 pb-3 border-b border-[#06b6d4]/30 opacity-70">
            <span>LOVESH_OS v1.0.0</span>
            <button onClick={() => { setIsOpen(false); playHover(); }} className="hover:text-white transition-colors cursor-none">[X]</button>
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-3 whitespace-pre-wrap flex flex-col custom-scrollbar">
            {history.map((item, i) => (
              <div key={i} className="space-y-1">
                {item.command && <div className="text-white opacity-80">{item.command}</div>}
                <div className="text-[#06b6d4]/90 leading-relaxed">{item.output}</div>
              </div>
            ))}
            
            <div className="flex items-center gap-2 mt-2">
              <span className="text-white opacity-90">{'>'}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                onBlur={() => isOpen && inputRef.current?.focus()} // Keep focus locking
                className="bg-transparent border-none outline-none flex-1 text-[#06b6d4] focus:ring-0 w-full cursor-none"
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            <div ref={bottomRef} className="h-4 w-full flex-shrink-0" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
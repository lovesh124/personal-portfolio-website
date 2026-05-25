"use client";

import { useCallback, useRef } from 'react';

export function useSound() {
  const audioCtx = useRef<AudioContext | null>(null);

  const initAudio = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.current.state === 'suspended') {
      audioCtx.current.resume();
    }
  };

  const playHover = useCallback(() => {
    try {
      initAudio();
      if (!audioCtx.current) return;
      const osc = audioCtx.current.createOscillator();
      const gainNode = audioCtx.current.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.current.currentTime + 0.05);
      
      gainNode.gain.setValueAtTime(0.015, audioCtx.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.05);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.current.destination);
      
      osc.start();
      osc.stop(audioCtx.current.currentTime + 0.05);
    } catch(e) {}
  }, []);

  const playClick = useCallback(() => {
    try {
      initAudio();
      if (!audioCtx.current) return;
      const osc = audioCtx.current.createOscillator();
      const gainNode = audioCtx.current.createGain();
      
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, audioCtx.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, audioCtx.current.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.03, audioCtx.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.1);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.current.destination);
      
      osc.start();
      osc.stop(audioCtx.current.currentTime + 0.1);
    } catch(e) {}
  }, []);

  const playType = useCallback(() => {
    try {
      initAudio();
      if (!audioCtx.current) return;
      const osc = audioCtx.current.createOscillator();
      const gainNode = audioCtx.current.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(400, audioCtx.current.currentTime);
      
      gainNode.gain.setValueAtTime(0.008, audioCtx.current.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.current.currentTime + 0.03);
      
      osc.connect(gainNode);
      gainNode.connect(audioCtx.current.destination);
      
      osc.start();
      osc.stop(audioCtx.current.currentTime + 0.03);
    } catch(e) {}
  }, []);

  return { playHover, playClick, playType };
}

"use client";

import { useEffect, useRef } from 'react';

const unlockEvents: Array<keyof DocumentEventMap> = ['pointerdown', 'keydown', 'touchstart'];

/**
 * Handles playback of the ambient audio loop whenever the site is open.
 * Attempts autoplay on mount and falls back to starting once the user interacts.
 */
const AmbientAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/ambient-loop.m4a');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.35;
    audioRef.current = audio;

    const tryPlay = () => audio.play().catch(() => undefined);

    // Autoplay on mount (may fail silently due to browser policies)
    tryPlay();

    const handleVisibilityChange = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        audioRef.current.pause();
      } else {
        tryPlay();
      }
    };

    const unlockOnInteraction = () => {
      tryPlay().then(() => {
        unlockEvents.forEach(event =>
          document.removeEventListener(event, unlockOnInteraction)
        );
      });
    };

    unlockEvents.forEach(event =>
      document.addEventListener(event, unlockOnInteraction, { once: true })
    );
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      unlockEvents.forEach(event =>
        document.removeEventListener(event, unlockOnInteraction)
      );
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  return null;
};

export default AmbientAudio;

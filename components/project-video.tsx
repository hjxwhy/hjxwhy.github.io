'use client';

import { useEffect, useRef } from 'react';

export function ProjectVideo({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 761px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      if (desktop.matches && !reducedMotion.matches) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    syncPlayback();
    desktop.addEventListener('change', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);

    return () => {
      desktop.removeEventListener('change', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="work-video"
      muted
      loop
      playsInline
      controls
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

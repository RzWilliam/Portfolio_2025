import React, { useEffect, useRef } from 'react';

interface LoaderProps {
  duration?: number; // ms
  logoSrc: string;
  onFinish?: () => void;
  // allow nullable ref since callers may useRef<HTMLImageElement | null>()
  logoRef?: React.RefObject<HTMLImageElement | null>;
  // when true the overlay fades out (opacity transition)
  fade?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ duration = 2000, logoSrc, onFinish, logoRef, fade = false }) => {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // animate progress bar width from 0 to 100% over `duration`
    const el = progressRef.current;
    if (!el) return;
    // force reflow then set width to 100%
    el.style.transition = `width ${duration}ms linear`;
    requestAnimationFrame(() => {
      el.style.width = '100%';
    });

    // call onFinish when duration passed (parent will handle the logo transform)
    const t = window.setTimeout(() => onFinish && onFinish(), duration);
    return () => window.clearTimeout(t);
  }, [duration, onFinish]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      style={{ opacity: fade ? 0 : 1, transition: 'opacity 700ms ease' }}
    >
      <div className="flex flex-col items-center gap-6">
        <img
          ref={logoRef}
          src={logoSrc}
          alt="logo"
          className="w-36 h-36 object-contain will-change-transform"
          style={{ transformOrigin: 'center center' }}
        />

        <div className="w-64 h-2 bg-white/10 rounded overflow-hidden">
          <div ref={progressRef} className="h-full bg-white w-0" />
        </div>
      </div>
    </div>
  );
};

export default Loader;

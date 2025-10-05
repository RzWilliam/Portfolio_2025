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

const Loader: React.FC<LoaderProps> = ({
  duration = 1000,
  logoSrc,
  onFinish,
  logoRef,
  fade = false,
}) => {
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
    <>
      {/* Cercle noir en arrière-plan */}
      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-50 transition-[width,height] duration-[2000ms] ease-in-out bg-black ${
          fade ? 'w-40 h-40' : 'w-[3000px] h-[3000px]'
        }`}
        style={{ willChange: 'width, height' }}
      />

      {/* Contenu (logo + barre) par-dessus */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] flex flex-col items-center gap-6">
        <img
          ref={logoRef}
          src={logoSrc}
          alt="logo"
          className="w-[145.60px] h-[145.60px] object-contain will-change-transform"
          style={{ transformOrigin: 'center center' }}
        />

        <div className={`absolute -bottom-4 w-64 h-2 bg-white/10 rounded overflow-hidden ${fade ? 'hidden transition-opacity duration-500' : ''}`}>
          <div ref={progressRef} className="h-full bg-white w-0" />
        </div>
      </div>
    </>
  );
};

export default Loader;

"use client";
import { useEffect, useRef } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-space-with-computers-41687-large.mp4" type="video/mp4" />
        <source src="/office-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Light corporate overlay to keep text fully readable */}
      <div className="absolute inset-0 bg-slate-50/50 backdrop-blur-[0.5px]" />
    </div>
  );
}
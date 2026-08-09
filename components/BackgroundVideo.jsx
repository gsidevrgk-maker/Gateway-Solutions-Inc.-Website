"use client";
export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        {/* Using a reliable high-speed public MP4 stream for StackBlitz preview testing */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-office-space-with-computers-41687-large.mp4" type="video/mp4" />
        {/* Fallback to local file for production on Vercel */}
        <source src="/office-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Light overlay to keep text crisp */}
      <div className="absolute inset-0 bg-slate-50/40 backdrop-blur-[0.5px]" />
    </div>
  );
}
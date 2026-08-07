'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Cinematic 3D Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover opacity-80"
      >
        {/* We are using a high-end royalty-free 3D tech network video for the prototype */}
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-background-27898-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Deep gradient overlay to ensure perfect text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto space-y-10 animate-fade-in-up mt-16">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight drop-shadow-2xl leading-tight">
          Enterprise{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Technology
          </span>
          <br /> Solutions.
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
          Providing Information Technology Staffing and Technical Services
          continuously for over 8 years. We implement critical business
          objectives with laser precision.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] border border-blue-500">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Explore Our Expertise</span>
          </button>

          <button className="px-8 py-4 bg-transparent border-2 border-slate-300 text-white rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all hover:scale-105">
            Staffing Solutions
          </button>
        </div>
      </div>
    </section>
  );
}

// Hero is a server component — no interactivity needed here.
// The animations are CSS keyframe-based, no JS required.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20 grid-bg overflow-hidden"
    >
      {/* Subtle glow — kept to ONE, not three */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        {/* Eyebrow */}
        <p
          className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-6"
          style={{ opacity: 0, animation: "heroUp 0.6s ease forwards 0.1s" }}
        >
          // IEEE Student Branch · College of Engineering Chengannur
        </p>

        {/* Headline */}
        <h1
          className="font-display font-black leading-none mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
            opacity: 0,
            animation: "heroUp 0.6s ease forwards 0.3s",
          }}
        >
          30 Years of
          <br />
          <span className="text-cyan">Engineering</span>
          <br />
          <span className="text-blue-900 font-semibold">with Purpose.</span>
        </h1>

        {/* Subtext */}
        <p
          className="text-muted text-base leading-relaxed max-w-lg mb-10"
          style={{ opacity: 0, animation: "heroUp 0.6s ease forwards 0.5s" }}
        >
          IEEE SB CEC has been running workshops, hackathons, and industry
          sessions since 1996. One of the most active student branches in Kerala
          — six chapters, one community.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4"
          style={{ opacity: 0, animation: "heroUp 0.6s ease forwards 0.7s" }}
        >
          <a
            href="#contact"
            className="clip-cta font-mono text-xs uppercase tracking-widest bg-electric hover:bg-cyan hover:text-navy-900 text-white px-8 py-4 transition-all duration-200"
          >
            Join Us →
          </a>
          <a
            href="#events"
            className="font-mono text-xs uppercase tracking-widest border border-blue-900/40 hover:border-electric text-muted hover:text-white px-8 py-4 transition-all duration-200"
          >
            See Events
          </a>
        </div>

        {/* Stats — separated clearly so they don't compete with headline */}
        <div
          className="mt-16 pt-8 border-t border-blue-900/20 grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ opacity: 0, animation: "heroUp 0.6s ease forwards 0.9s" }}
        >
          {[
            { num: "1996", label: "Founded" },
            { num: "1,666", label: "Instagram followers" },
            { num: "₹50K", label: "Rev-A-Thon prize pool" },
            { num: "$800", label: "RAS chapter grant" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-display font-black text-2xl text-cyan mb-1">
                {num}
              </div>
              <div className="font-mono text-[0.6rem] text-blue-900/70 uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

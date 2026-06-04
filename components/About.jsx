import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="bg-navy-800 border-t border-blue-900/15 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <FadeIn>
          <p className="font-mono text-[0.65rem] text-electric uppercase tracking-[0.2em] mb-4">
            // About
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-8">
            Advancing Technology
            <br />
            <span className="text-cyan">for Humanity</span>
          </h2>
          <p className="text-muted leading-relaxed mb-5">
            IEEE SB CEC is the student branch of the Institute of Electrical
            and Electronics Engineers at College of Engineering Chengannur.
            Affiliated to the Kerala Section, Region 10 — we run six active
            technical societies.
          </p>
          <p className="text-muted leading-relaxed">
            Our events are practical: overnight PCB workshops, robotics
            hackathons, photography + signal processing, industry visits. Most
            members stay involved all four years — not just for the CV line, but
            because the community is worth staying for.
          </p>
        </FadeIn>

        {/* Card */}
        <FadeIn delay={120}>
          <div className="relative bg-navy-700 border border-blue-900/30 p-8 corner-accent">
            {/* Faint watermark */}
            <div className="font-display font-black text-6xl text-electric/10 leading-none mb-6 select-none">
              IEEE
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Our mission: give students real experience, real connections, and
              real skills before they graduate. The awards are a byproduct of
              that.
            </p>
            {/* Values — simplified, no hover effects */}
            <div className="grid grid-cols-2 gap-2">
              {[
                "Innovation",
                "Collaboration",
                "Leadership",
                "Impact",
                "Inclusivity",
                "Excellence",
              ].map((v) => (
                <div
                  key={v}
                  className="border-l-2 border-electric bg-electric/5 px-3 py-2 font-mono text-[0.62rem] uppercase tracking-wider text-blue-200"
                >
                  {v}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

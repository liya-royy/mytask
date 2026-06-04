import FadeIn from "./FadeIn";
import { timeline } from "../lib/data";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-28 px-6 bg-navy-900 border-t border-blue-900/15"
    >
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[0.65rem] text-electric uppercase tracking-[0.2em] mb-4">
            // 30 Years
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl mb-20">
            A Legacy of
            <br />
            <span className="text-cyan">Possibilities.</span>
          </h2>
        </FadeIn>

        {/* Timeline list */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-blue-900/30" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 80}>
                <div className="flex gap-8 pl-8 relative">
                  {/* Dot */}
                  <div
                    className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-navy-900 ${
                      i === timeline.length - 1
                        ? "bg-cyan"
                        : "bg-electric"
                    }`}
                  />

                  {/* Year */}
                  <div className="w-16 flex-shrink-0 pt-0.5">
                    <span className="font-display font-black text-base text-cyan">
                      {item.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <h3 className="font-display font-bold text-base text-white mb-2">
                      {item.label}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import FadeIn from "./FadeIn";
import { events } from "../lib/data";

export default function Events() {
  return (
    <section
      id="events"
      className="py-28 px-6 bg-navy-900 border-t border-blue-900/15"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[0.65rem] text-electric uppercase tracking-[0.2em] mb-4">
            // Events
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl mb-16">
            What We Actually Do
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((ev, i) => (
            <FadeIn key={ev.title} delay={i * 70}>
              <div className="bg-navy-700 border border-blue-900/25 hover:border-electric/40 transition-colors duration-300 flex flex-col h-full">
                {/* Image area */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  {ev.image ? (
                    <Image
                      src={ev.image}
                      alt={ev.title}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    // Fallback placeholder — no emoji, just clean brand text
                    <div className="w-full h-full bg-navy-900 flex items-center justify-center">
                      <span className="font-display font-black text-3xl text-electric/15 tracking-widest">
                        IEEE
                      </span>
                    </div>
                  )}
                  <span
                    className={`absolute top-3 right-3 font-mono text-[0.58rem] uppercase tracking-wider text-white px-2 py-0.5 ${ev.tagColor}`}
                  >
                    {ev.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-mono text-[0.6rem] text-cyan uppercase tracking-widest mb-1">
                    {ev.date}
                  </p>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {ev.title}
                  </h3>
                  <p className="font-mono text-[0.58rem] text-electric mb-3 tracking-wider">
                    {ev.sub}
                  </p>
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {ev.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

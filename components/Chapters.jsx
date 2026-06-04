import FadeIn from "./FadeIn";
import { chapters } from "../lib/data";

export default function Chapters() {
  return (
    <section
      id="chapters"
      className="bg-navy-800 border-t border-blue-900/15 py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[0.65rem] text-electric uppercase tracking-[0.2em] mb-4">
            // Our Chapters
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl mb-4">
            Six Societies.
            <br />
            <span className="text-cyan">One Branch.</span>
          </h2>
          <p className="text-muted max-w-md leading-relaxed mb-16">
            Each chapter runs its own events and has its own ExCom — but we
            work together under IEEE SB CEC.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {chapters.map((ch, i) => (
            <FadeIn key={ch.short} delay={i * 60}>
              <div className="border border-blue-900/20 p-6 hover:bg-navy-700/50 transition-colors duration-200">
                <div
                  className={`font-display font-black text-2xl mb-2 ${ch.color}`}
                >
                  {ch.short}
                </div>
                <div className="font-mono text-[0.65rem] text-blue-200/70 uppercase tracking-wider leading-relaxed">
                  IEEE {ch.name}
                </div>
                <div className="font-mono text-[0.55rem] text-blue-900/60 mt-1">
                  SBC CEC
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

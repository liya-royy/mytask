import FadeIn from "./FadeIn";
import { testimonials } from "../lib/data";

// Avatar gradient colors for each member
const gradients = [
  "from-blue-500 to-cyan-400",
  "from-violet-500 to-blue-500",
  "from-cyan-400 to-emerald-400",
];

export default function Testimonials() {
  return (
    <section className="bg-navy-800 border-t border-blue-900/15 py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-mono text-[0.65rem] text-electric uppercase tracking-[0.2em] mb-4">
            // Members
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl mb-16">
            What members say
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 80}>
              <div className="bg-navy-700 border border-blue-900/20 p-7 h-full flex flex-col">
                {/* Opening quote mark — decorative */}
                <div className="font-display font-black text-5xl text-electric/20 leading-none mb-4">
                  "
                </div>

                {/* Quote text — casual and short */}
                <p className="text-blue-100/80 text-sm leading-relaxed italic flex-1 mb-6">
                  {t.text}
                </p>

                {/* Person */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center font-display font-black text-xs text-navy-900 flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">
                      {t.name}
                    </div>
                    <div className="font-mono text-[0.58rem] text-blue-900/70 uppercase tracking-wider">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

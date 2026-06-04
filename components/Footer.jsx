export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-navy-950 border-t border-blue-900/15 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand + contact */}
          <div>
            <div className="font-display font-black text-xl tracking-wider mb-4">
              <span className="text-cyan">IEEE </span>
              <span className="text-white">SB CEC</span>
            </div>
            <p className="text-blue-900/70 text-sm leading-relaxed mb-1">
              College of Engineering Chengannur
            </p>
            <p className="text-blue-900/70 text-sm mb-4">
              Chengannur, Kerala — 689121
            </p>
            <a
              href="mailto:ieee@cecieee.org"
              className="text-electric text-sm hover:text-cyan transition-colors"
            >
              ieee@cecieee.org
            </a>

            {/* Social links */}
            <div className="flex gap-2 mt-5">
              {[
                { label: "in", href: "https://linkedin.com" },
                { label: "ig", href: "https://instagram.com/ieeesbcec" },
                { label: "🌐", href: "https://cecieee.org" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-blue-900/30 hover:border-electric flex items-center justify-center font-mono text-[0.65rem] text-blue-900/60 hover:text-cyan transition-all duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Societies */}
          <div>
            <h4 className="font-mono text-[0.6rem] text-electric uppercase tracking-[0.15em] mb-5">
              Societies
            </h4>
            <ul className="space-y-2.5">
              {[
                "Computer Society",
                "WIE AG",
                "IAS SBC",
                "RAS SBC",
                "SPS SBC",
                "SSCS SBC",
              ].map((s) => (
                <li
                  key={s}
                  className="text-blue-900/60 text-sm hover:text-muted transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[0.6rem] text-electric uppercase tracking-[0.15em] mb-5">
              Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "cecieee.org", href: "https://cecieee.org" },
                {
                  label: "Join IEEE",
                  href: "https://ieee.org/membership",
                },
                {
                  label: "Instagram @ieeesbcec",
                  href: "https://instagram.com/ieeesbcec",
                },
                {
                  label: "Call for Volunteers",
                  href: "https://cecieee.org/callforvolunteers",
                },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900/60 text-sm hover:text-muted transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-900/10 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="font-mono text-[0.58rem] text-blue-900/40 tracking-wider">
            © 2026{" "}
            <span className="text-blue-900/60">IEEE SB CEC</span> · All
            rights reserved
          </p>
          <p className="font-mono text-[0.58rem] text-blue-900/40 tracking-wider">
            Celebrating{" "}
            <span className="text-blue-900/60">30 Years</span> · A Legacy
            of Possibilities
          </p>
        </div>
      </div>
    </footer>
  );
}

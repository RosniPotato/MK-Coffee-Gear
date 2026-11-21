import Logo from './Logo';

const cols = [
  {
    title: 'Gear',
    links: ['MK-01 Espresso Machine', 'MK-02 Burr Grinder', 'MK-03 Kettle', 'MK-04 Tamper'],
  },
  {
    title: 'Studio',
    links: ['Philosophy', 'Craft', 'Atelier visits', 'Press kit'],
  },
  {
    title: 'Support',
    links: ['Servicing', 'Replacement parts', 'Warranty', 'Manuals'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#fafafa] border-t border-[#fafafa]/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <Logo className="h-16 w-auto opacity-90" />
            </div>
            <p className="text-sm leading-relaxed opacity-50 max-w-sm mb-8">
              Precision brewing equipment, designed in Copenhagen and machined
              in Bergamo. Built to be kept, serviced, and never replaced.
            </p>
            <p className="text-[10px] tracking-ultra uppercase opacity-40">
              Copenhagen — Bergamo — Worldwide
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-[10px] tracking-ultra uppercase opacity-40 mb-5">
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#gear"
                        className="text-sm opacity-70 hover:opacity-100 link-underline"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-[#fafafa]/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-[10px] tracking-ultra uppercase opacity-40">
            © {new Date().getFullYear()} MK Coffee Gear
          </p>
          <div className="flex gap-6">
            <a href="#top" className="text-[10px] tracking-ultra uppercase opacity-40 hover:opacity-100">
              Imprint
            </a>
            <a href="#top" className="text-[10px] tracking-ultra uppercase opacity-40 hover:opacity-100">
              Privacy
            </a>
            <a href="#top" className="text-[10px] tracking-ultra uppercase opacity-40 hover:opacity-100">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

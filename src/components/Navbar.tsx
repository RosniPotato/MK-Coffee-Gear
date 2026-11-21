import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { label: 'Gear', href: '#gear' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onDetailPage = false }: { onDetailPage?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dark = scrolled || onDetailPage;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        dark
          ? 'bg-[#0a0a0a] text-[#fafafa] py-4'
          : 'bg-transparent text-[#0a0a0a] py-6'
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between">
        <a href="#top" className="group flex items-center shrink-0" aria-label="MK Coffee Gear home">
          <Logo className="h-8 lg:h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-[11px] tracking-ultra uppercase opacity-80 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden md:inline-block text-[11px] tracking-ultra uppercase px-5 py-2.5 border transition-colors duration-300 ${
            dark
              ? 'border-[#fafafa]/30 hover:bg-[#fafafa] hover:text-[#0a0a0a]'
              : 'border-[#0a0a0a]/30 hover:bg-[#0a0a0a] hover:text-[#fafafa]'
          }`}
        >
          Inquire
        </a>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-6 space-y-5 bg-[#0a0a0a] text-[#fafafa]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm tracking-[0.2em] uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

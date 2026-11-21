import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', note: '' });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Showcase site — no backend wired. Acknowledge locally.
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#fafafa] text-[#0a0a0a] py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: invitation */}
          <div className="lg:col-span-6 reveal-obs">
            <p className="text-[11px] tracking-ultra uppercase opacity-50 mb-6">
              Contact
            </p>
            <h2 className="font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tightest mb-8">
              Begin a
              <br />
              <span className="italic">conversation.</span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed opacity-70 max-w-md mb-12">
              We do not sell through retailers. To request a piece, arrange a
              viewing at our Copenhagen atelier, or ask about servicing an
              existing machine, write to us directly.
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-[10px] tracking-ultra uppercase opacity-40 mb-1">
                  Atelier
                </p>
                <p className="text-sm">Refshalevej 163A, 1432 Copenhagen</p>
              </div>
              <div>
                <p className="text-[10px] tracking-ultra uppercase opacity-40 mb-1">
                  Correspondence
                </p>
                <a
                  href="mailto:atelier@mkcoffeegear.com"
                  className="link-underline text-sm"
                >
                  atelier@mkcoffeegear.com
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-ultra uppercase opacity-40 mb-1">
                  Hours
                </p>
                <p className="text-sm">By appointment, Wed – Sat</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6 reveal-obs">
            {sent ? (
              <div className="border border-[#0a0a0a]/15 p-12 lg:p-16 h-full flex flex-col justify-center animate-fade-in">
                <p className="font-display text-3xl lg:text-4xl tracking-tightest mb-4">
                  Thank you.
                </p>
                <p className="text-sm leading-relaxed opacity-70 max-w-sm">
                  Your message has reached the atelier. We reply to every
                  inquiry personally, usually within two working days.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: '', email: '', note: '' });
                  }}
                  className="mt-8 self-start link-underline text-[11px] tracking-ultra uppercase"
                >
                  Write another
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="border border-[#0a0a0a]/15 p-8 lg:p-12 space-y-8"
              >
                <Field
                  label="Your name"
                  id="name"
                  value={form.name}
                  onChange={update('name')}
                  required
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  required
                />
                <div>
                  <label
                    htmlFor="note"
                    className="block text-[10px] tracking-ultra uppercase opacity-40 mb-3"
                  >
                    What can we help with?
                  </label>
                  <textarea
                    id="note"
                    value={form.note}
                    onChange={update('note')}
                    rows={4}
                    className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-2 text-sm focus:border-[#0a0a0a] outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 text-[11px] tracking-ultra uppercase bg-[#0a0a0a] text-[#fafafa] px-7 py-4 hover:gap-5 transition-all duration-300"
                >
                  Send Inquiry
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = 'text',
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] tracking-ultra uppercase opacity-40 mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-transparent border-b border-[#0a0a0a]/20 py-2 text-sm focus:border-[#0a0a0a] outline-none transition-colors"
      />
    </div>
  );
}

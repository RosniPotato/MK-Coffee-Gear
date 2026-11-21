import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center bg-[#fafafa] text-[#0a0a0a] overflow-hidden"
    >
      {/* Faint grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#0a0a0a 1px, transparent 1px), linear-gradient(90deg, #0a0a0a 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: headline */}
          <div className="lg:col-span-7">
            <p className="text-[11px] tracking-ultra uppercase opacity-60 mb-8 animate-fade-in">
              Copenhagen — Est. 2019
            </p>
            <h1 className="font-display font-light text-[14vw] sm:text-[10vw] lg:text-[7.5vw] leading-[0.92] tracking-tightest">
              <span className="block animate-fade-up">Brewing,</span>
              <span className="block animate-fade-up italic" style={{ animationDelay: '0.15s' }}>
                reduced to
              </span>
              <span
                className="block animate-fade-up"
                style={{ animationDelay: '0.3s' }}
              >
                its essentials.
              </span>
            </h1>
          </div>

          {/* Right: subcopy */}
          <div className="lg:col-span-5 lg:pl-8">
            <div
              className="animate-fade-up"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="text-base lg:text-lg leading-relaxed max-w-md opacity-80 mb-8">
                MK Coffee Gear designs and manufactures precision equipment for
                the people who treat coffee as a discipline. No screens, no
                shortcuts — only instruments built to last a lifetime.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#gear"
                  className="inline-flex items-center gap-3 text-[11px] tracking-ultra uppercase border border-[#0a0a0a] px-6 py-3.5 hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors duration-300"
                >
                  Explore the Gear
                </a>
                <a
                  href="#philosophy"
                  className="link-underline text-[11px] tracking-ultra uppercase opacity-70 hover:opacity-100"
                >
                  Our Philosophy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[9px] tracking-ultra uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}

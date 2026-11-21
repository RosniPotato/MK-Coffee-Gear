const principles = [
  {
    n: '01',
    title: 'Material honesty',
    body: 'Stainless, ceramic, walnut. We choose materials that age into character rather than out of function. Nothing is plated to imitate something it is not.',
  },
  {
    n: '02',
    title: 'Mechanical clarity',
    body: 'Every mechanism is visible and serviceable. If a part moves, you can understand it by watching it, and replace it yourself when the time comes.',
  },
  {
    n: '03',
    title: 'Permanence',
    body: 'We do not release annual revisions to drive sales. A machine bought today is supported, serviced, and upgraded for as long as you own it.',
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#0a0a0a] text-[#fafafa] py-28 lg:py-40 grain"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sticky heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 reveal-obs">
              <p className="text-[11px] tracking-ultra uppercase text-[#fafafa]/50 mb-6">
                Philosophy
              </p>
              <h2 className="font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tightest mb-8 text-[#fafafa]">
                We make less,
                <br />
                <span className="italic text-[#fafafa]/80">on purpose.</span>
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-[#fafafa]/70 max-w-md">
                In a category crowded with touchscreens and yearly refreshes,
                MK stands for restraint. Our catalog is small because each piece
                has to earn its place — and hold it for decades.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="lg:col-span-7 space-y-px">
            {principles.map((p) => (
              <article
                key={p.n}
                className="reveal-obs group py-10 lg:py-12 border-t border-[#fafafa]/15 last:border-b"
              >
                <div className="flex gap-8">
                  <span className="font-display text-2xl text-[#fafafa]/25 w-12 shrink-0">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="font-display text-3xl lg:text-4xl tracking-tightest mb-4 text-[#fafafa] transition-transform duration-500 group-hover:translate-x-2">
                      {p.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#fafafa]/70 max-w-lg">
                      {p.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

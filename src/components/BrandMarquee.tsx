import { brands } from '@/data/catalog';

export default function BrandMarquee() {
  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] border-y border-[#fafafa]/10">
      <p className="text-center text-[10px] tracking-ultra uppercase opacity-40 pt-6">
        Brands we offer
      </p>
      <div className="overflow-hidden py-5">
        <div className="marquee-track flex whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex shrink-0">
              {[...brands, ...brands].map((b, i) => (
                <span
                  key={`${b.id}-${i}`}
                  className="font-display text-3xl lg:text-4xl tracking-tightest mx-8 opacity-70"
                >
                  {b.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

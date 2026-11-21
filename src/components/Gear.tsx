import { useState } from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { brands } from '@/data/catalog';
import type { BrandProduct } from '@/data/products';
import { productPath } from './ProductDetail';
import ProductArt from './ProductArt';

export default function Gear() {
  const [activeId, setActiveId] = useState<string>(brands[0].id);
  const active = brands.find((b) => b.id === activeId) ?? brands[0];
  const products = active.categories[0]?.products ?? [];

  return (
    <section id="gear" className="bg-[#fafafa] text-[#0a0a0a]">
      {/* Header */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-24 lg:pt-32 pb-12">
        <div className="reveal-obs">
          <p className="text-[11px] tracking-ultra uppercase opacity-50 mb-5">
            The Collection
          </p>
          <h2 className="font-display font-light text-4xl lg:text-6xl leading-[0.95] tracking-tightest">
            Brands we
            <br />
            <span className="italic opacity-70">stand behind.</span>
          </h2>
        </div>
      </div>

      {/* Brand tabs */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-nowrap overflow-x-auto gap-2 reveal-obs pb-2 -mb-2">
          {brands.map((b) => {
            const on = b.id === activeId;
            return (
              <button
                key={b.id}
                onClick={() => setActiveId(b.id)}
                className={`group inline-flex items-center gap-2 px-4 py-2.5 border whitespace-nowrap transition-colors duration-300 ${
                  on
                    ? 'bg-[#0a0a0a] text-[#fafafa] border-[#0a0a0a]'
                    : 'border-[#0a0a0a]/20 hover:border-[#0a0a0a]/50'
                }`}
              >
                <span className="font-display text-sm tracking-tightest">
                  {b.name}
                </span>
                {on && <Check size={12} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product grid */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-10 pb-24">
        <p className="text-sm leading-relaxed opacity-60 max-w-md mb-8 reveal-obs">
          {active.tagline}
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} brandId={active.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product: p, brandId }: { product: BrandProduct; brandId: string }) {
  return (
    <a
      href={productPath(brandId, p.slug)}
      className="group border border-[#0a0a0a]/10 hover:border-[#0a0a0a]/40 transition-colors duration-300 flex flex-col bg-white"
    >
      <div className="relative aspect-[4/3] flex items-center justify-center overflow-hidden border-b border-[#0a0a0a]/10">
        <ProductArt
          art={p.art}
          className="w-1/2 h-1/2 text-[#0a0a0a] transition-transform duration-500 group-hover:scale-105"
        />
        {p.badge && (
          <span className="absolute top-4 left-4 text-[9px] tracking-ultra uppercase bg-[#0a0a0a] text-[#fafafa] px-3 py-1.5">
            {p.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight size={16} />
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <span className="text-[9px] tracking-ultra uppercase opacity-40 mb-2">
          {p.category}
        </span>
        <h5 className="text-sm leading-snug mb-2">{p.name}</h5>
        <p className="text-[12px] leading-relaxed opacity-50 mb-5 line-clamp-3">
          {p.description}
        </p>
        <div className="mt-auto">
          <span className="inline-flex items-center gap-1.5 text-[9px] tracking-ultra uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            View details
            <ArrowUpRight size={11} />
          </span>
        </div>
      </div>
    </a>
  );
}

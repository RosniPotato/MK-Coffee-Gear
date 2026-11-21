import { useState } from 'react';
import { brands } from '@/data/catalog';
import type { Brand, BrandProduct } from '@/data/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductArt from './ProductArt';

export interface ProductRoute {
  brandId: string;
  productSlug: string;
}

export function findProduct(
  brandId: string,
  productSlug: string,
): { brand: Brand; product: BrandProduct } | null {
  const brand = brands.find((b) => b.id === brandId);
  if (!brand) return null;
  for (const cat of brand.categories) {
    const product = cat.products.find((p) => p.slug === productSlug);
    if (product) return { brand, product };
  }
  return null;
}

export function productPath(brandId: string, productSlug: string): string {
  return `#/product/${brandId}/${productSlug}`;
}

export function parseHash(): ProductRoute | null {
  const m = window.location.hash.match(/^#\/product\/([\w-]+)\/([\w-]+)$/);
  if (!m) return null;
  return { brandId: m[1], productSlug: m[2] };
}

export function navigate(path: string) {
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

interface Props {
  route: ProductRoute;
  onBack: () => void;
}

export default function ProductDetail({ route, onBack }: Props) {
  const found = findProduct(route.brandId, route.productSlug);

  if (!found) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fafafa] text-[#0a0a0a] pt-32">
        <div className="text-center">
          <p className="font-display text-2xl mb-4">Product not found.</p>
          <button
            onClick={onBack}
            className="text-[11px] tracking-ultra uppercase border border-[#0a0a0a]/30 px-5 py-2.5 hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors duration-300"
          >
            Back to collection
          </button>
        </div>
      </div>
    );
  }

  const { brand, product } = found;

  const allProducts = brand.categories.flatMap((c) => c.products);
  const idx = allProducts.findIndex((p) => p.slug === product.slug);
  const prev = idx > 0 ? allProducts[idx - 1] : null;
  const next = idx < allProducts.length - 1 ? allProducts[idx + 1] : null;

  return (
    <div className="bg-[#fafafa] text-[#0a0a0a]">
      {/* Breadcrumb / back */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pt-28 lg:pt-32 pb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[11px] tracking-ultra uppercase opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowLeft size={14} />
          {brand.name} collection
        </button>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Art panel */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="relative aspect-square flex items-center justify-center bg-white border border-[#0a0a0a]/10 overflow-hidden">
              <ProductArt
                art={product.art}
                className="w-1/2 h-1/2 text-[#0a0a0a]"
              />
              {product.badge && (
                <span className="absolute top-6 left-6 text-[9px] tracking-ultra uppercase bg-[#0a0a0a] text-[#fafafa] px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info panel */}
          <div>
            <p className="text-[11px] tracking-ultra uppercase opacity-50 mb-4">
              {brand.name} — {product.category}
            </p>
            <h1 className="font-display font-light text-4xl lg:text-6xl leading-[0.95] tracking-tightest mb-6">
              {product.name}
            </h1>
            <p className="text-base lg:text-lg leading-relaxed opacity-70 mb-8">
              {product.description}
            </p>

            <div className="h-px bg-[#0a0a0a]/10 mb-8" />

            <p className="text-base leading-relaxed opacity-60 mb-10">
              {product.details}
            </p>

            {/* Specs */}
            <div className="border-t border-[#0a0a0a]/15">
              <p className="text-[11px] tracking-ultra uppercase opacity-50 pt-6 mb-4">
                Specifications
              </p>
              <dl className="divide-y divide-[#0a0a0a]/10">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="grid grid-cols-3 gap-4 py-4"
                  >
                    <dt className="text-[11px] tracking-ultra uppercase opacity-50">
                      {s.label}
                    </dt>
                    <dd className="col-span-2 text-sm leading-relaxed">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block text-[11px] tracking-ultra uppercase bg-[#0a0a0a] text-[#fafafa] px-8 py-3.5 hover:bg-[#0a0a0a]/85 transition-colors duration-300"
              >
                Enquire about this product
              </a>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-[#0a0a0a]/15 pt-8">
          {prev ? (
            <ProductNav
              brandId={brand.id}
              product={prev}
              label="Previous"
              align="left"
            />
          ) : (
            <div />
          )}
          {next ? (
            <ProductNav
              brandId={brand.id}
              product={next}
              label="Next"
              align="right"
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

function ProductNav({
  brandId,
  product,
  label,
  align,
}: {
  brandId: string;
  product: BrandProduct;
  label: string;
  align: 'left' | 'right';
}) {
  return (
    <button
      onClick={() => navigate(productPath(brandId, product.slug))}
      className={`group flex items-center gap-4 ${
        align === 'right' ? 'flex-row-reverse text-right' : ''
      }`}
    >
      <ProductArt
        art={product.art}
        className={`w-12 h-12 text-[#0a0a0a] opacity-60 group-hover:opacity-100 transition-opacity ${
          align === 'right' ? 'rotate-180' : ''
        }`}
      />
      <div className={align === 'right' ? 'text-right' : ''}>
        <p className="text-[9px] tracking-ultra uppercase opacity-40 mb-1">
          {label}
        </p>
        <p className="font-display text-base tracking-tightest">
          {product.name}
        </p>
      </div>
      {align === 'right' ? (
        <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
      ) : null}
    </button>
  );
}

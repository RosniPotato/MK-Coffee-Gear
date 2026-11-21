import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import Gear from '@/components/Gear';
import Philosophy from '@/components/Philosophy';
import Craft from '@/components/Craft';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProductDetail, {
  parseHash,
  navigate,
  type ProductRoute,
} from '@/components/ProductDetail';
import JournalDetail, { parseJournalHash } from '@/components/JournalDetail';
import { useReveal } from '@/hooks/useReveal';

type Route = { kind: 'product' } & ProductRoute | { kind: 'journal'; slug: string };

function currentRoute(): Route | null {
  const product = parseHash();
  if (product) return { kind: 'product', ...product };
  const slug = parseJournalHash();
  if (slug) return { kind: 'journal', slug };
  return null;
}

function App() {
  const [route, setRoute] = useState<Route | null>(currentRoute());

  useReveal();

  useEffect(() => {
    const onHash = () => {
      const next = currentRoute();
      setRoute(next);
      if (next) window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const onDetailPage = route !== null;

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#0a0a0a]">
      <Navbar onDetailPage={onDetailPage} />
      <main>
        {route?.kind === 'product' ? (
          <ProductDetail
            route={{ brandId: route.brandId, productSlug: route.productSlug }}
            onBack={() => navigate('#gear')}
          />
        ) : route?.kind === 'journal' ? (
          <JournalDetail
            route={{ slug: route.slug }}
            onBack={() => navigate('#journal')}
          />
        ) : (
          <>
            <Hero />
            <BrandMarquee />
            <Gear />
            <Philosophy />
            <Craft />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { ArrowUpRight } from 'lucide-react';
import { featuredPost, posts as journalPosts, postPath } from '@/data/journal';

const featured = featuredPost;

function Tag({ children }: { children: string }) {
  return (
    <span className="text-[9px] tracking-ultra uppercase opacity-50 border border-[#fafafa]/20 px-3 py-1.5">
      {children}
    </span>
  );
}

export default function Craft() {
  return (
    <section id="journal" className="bg-[#0a0a0a] text-[#fafafa] grain">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-28 lg:py-36">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 reveal-obs">
          <div>
            <p className="text-[11px] tracking-ultra uppercase opacity-50 mb-5">
              The Journal
            </p>
            <h2 className="font-display font-light text-5xl lg:text-7xl leading-[0.95] tracking-tightest">
              Notes from
              <br />
              <span className="italic opacity-70">the bench.</span>
            </h2>
          </div>
          <a
            href="#journal"
            className="group inline-flex items-center gap-2 text-[10px] tracking-ultra uppercase opacity-60 hover:opacity-100 transition-opacity pb-2"
          >
            All entries
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Featured post */}
        <a
          href={postPath(featuredPost.slug)}
          className="reveal-obs group cursor-pointer border border-[#fafafa]/10 hover:border-[#fafafa]/30 transition-colors duration-300 mb-6 block"
        >
          <div className="grid lg:grid-cols-2">
            {/* Visual panel */}
            <div className="relative min-h-[320px] lg:min-h-[440px] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#fafafa]/10 bg-gradient-to-br from-[#fafafa]/[0.04] to-transparent">
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, #fafafa 0%, transparent 55%), radial-gradient(circle at 70% 70%, #fafafa 0%, transparent 45%)',
                }}
              />
              <div className="relative text-center px-8">
                <div className="font-display text-[120px] lg:text-[180px] leading-none opacity-[0.06] select-none">
                  01
                </div>
                <p className="text-[10px] tracking-ultra uppercase opacity-40 -mt-4">
                  Featured
                </p>
              </div>
            </div>

            {/* Text panel */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <Tag>{featured.category}</Tag>
                <span className="text-[10px] tracking-ultra uppercase opacity-40">
                  {featured.date} · {featured.read} read
                </span>
              </div>
              <h3 className="font-display text-3xl lg:text-4xl tracking-tightest leading-[1.05] mb-6 transition-transform duration-500 group-hover:translate-x-1">
                {featured.title}
              </h3>
              <p className="text-base leading-relaxed opacity-60 max-w-md mb-8">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-[10px] tracking-ultra uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Read entry
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </div>
        </a>

        {/* Recent posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {journalPosts.map((p, i) => (
            <a
              key={p.slug}
              href={postPath(p.slug)}
              className="reveal-obs group cursor-pointer border border-[#fafafa]/10 hover:border-[#fafafa]/30 transition-colors duration-300 flex flex-col"
            >
              {/* Visual top */}
              <div className="relative h-44 flex items-center justify-center overflow-hidden border-b border-[#fafafa]/10 bg-gradient-to-br from-[#fafafa]/[0.04] to-transparent">
                <div
                  className="absolute inset-0 opacity-[0.04] pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 40%, #fafafa 0%, transparent 60%)',
                  }}
                />
                <div className="relative font-display text-6xl font-light opacity-[0.08] leading-none select-none">
                  {String(i + 2).padStart(2, '0')}
                </div>
              </div>
              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <Tag>{p.category}</Tag>
                </div>
                <h4 className="font-display text-xl tracking-tightest leading-snug mb-3 transition-transform duration-500 group-hover:translate-x-1">
                  {p.title}
                </h4>
                <p className="text-[13px] leading-relaxed opacity-55 mb-6 line-clamp-3">
                  {p.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] tracking-ultra uppercase opacity-40">
                    {p.date} · {p.read}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

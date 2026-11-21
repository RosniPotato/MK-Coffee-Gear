import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { allPosts, findPost, postPath, parseJournalHash } from '@/data/journal';
import type { JournalPost } from '@/data/journal';

export { parseJournalHash };

function navigate(path: string) {
  window.location.hash = path;
  window.scrollTo({ top: 0 });
}

export interface JournalRoute {
  slug: string;
}

interface Props {
  route: JournalRoute;
  onBack: () => void;
}

export default function JournalDetail({ route, onBack }: Props) {
  const post = findPost(route.slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#fafafa] text-[#0a0a0a] pt-32">
        <div className="text-center">
          <p className="font-display text-2xl mb-4">Entry not found.</p>
          <button
            onClick={onBack}
            className="text-[11px] tracking-ultra uppercase border border-[#0a0a0a]/30 px-5 py-2.5 hover:bg-[#0a0a0a] hover:text-[#fafafa] transition-colors duration-300"
          >
            Back to journal
          </button>
        </div>
      </div>
    );
  }

  const idx = allPosts.findIndex((p) => p.slug === post.slug);
  const next = allPosts[(idx + 1) % allPosts.length];

  return (
    <div className="bg-[#0a0a0a] text-[#fafafa] grain min-h-screen">
      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl px-6 lg:px-12 pt-32 lg:pt-40 pb-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[11px] tracking-ultra uppercase opacity-60 hover:opacity-100 transition-opacity mb-12"
          >
            <ArrowLeft size={14} />
            The Journal
          </button>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] tracking-ultra uppercase border border-[#fafafa]/20 px-3 py-1.5 opacity-70">
              {post.category}
            </span>
            <span className="text-[10px] tracking-ultra uppercase opacity-40">
              {post.date} · {post.read} read
            </span>
          </div>

          <h1 className="font-display font-light text-4xl lg:text-6xl leading-[0.95] tracking-tightest mb-8 text-[#fafafa]">
            {post.title}
          </h1>

          <p className="text-lg leading-relaxed text-[#fafafa]/70 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="h-px bg-[#fafafa]/15" />
        </div>

        {/* Body */}
        <article className="mx-auto max-w-3xl px-6 lg:px-12 py-12">
          {post.pull && (
            <blockquote className="font-display italic text-2xl lg:text-3xl leading-snug tracking-tightest text-[#fafafa]/90 border-l-2 border-[#fafafa]/30 pl-6 mb-12">
              {post.pull}
            </blockquote>
          )}

          <div className="space-y-7">
            {post.body.map((para, i) => (
              <p
                key={i}
                className={`leading-[1.75] ${
                  i === 0
                    ? 'text-lg text-[#fafafa]/85'
                    : 'text-base text-[#fafafa]/70'
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Footer meta */}
          <div className="mt-16 pt-8 border-t border-[#fafafa]/15 flex items-center justify-between">
            <p className="text-[10px] tracking-ultra uppercase text-[#fafafa]/40">
              MK Coffee Journal — {post.date}
            </p>
          </div>
        </article>

        {/* Next entry */}
        <div className="mx-auto max-w-3xl px-6 lg:px-12 pb-28">
          <button
            onClick={() => navigate(postPath(next.slug))}
            className="group w-full text-left border border-[#fafafa]/15 hover:border-[#fafafa]/40 transition-colors duration-300 p-8 lg:p-10"
          >
            <p className="text-[10px] tracking-ultra uppercase text-[#fafafa]/40 mb-3">
              Next entry
            </p>
            <div className="flex items-center justify-between gap-6">
              <h3 className="font-display text-2xl lg:text-3xl tracking-tightest leading-snug text-[#fafafa] transition-transform duration-500 group-hover:translate-x-1">
                {next.title}
              </h3>
              <ArrowUpRight
                size={22}
                className="shrink-0 text-[#fafafa]/40 group-hover:text-[#fafafa] transition-colors"
              />
            </div>
            <p className="text-[13px] leading-relaxed text-[#fafafa]/50 mt-4 max-w-lg">
              {next.excerpt}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

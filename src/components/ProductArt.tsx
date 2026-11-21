import type { ArtKey } from '@/data/products';

interface Props {
  art: ArtKey;
  className?: string;
}

/**
 * Minimalist technical line-art for each product. Monochrome, stroke-only,
 * drawn on a 400x500 viewBox so they share a consistent frame.
 */
export default function ProductArt({ art, className = '' }: Props) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg
      viewBox="0 0 400 500"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {art === 'machine' && (
        <g {...common}>
          {/* E61 group head */}
          <path d="M200 300 v60" />
          <path d="M180 360 h40 v22 a20 20 0 0 1 -40 0 z" />
          {/* portafilter */}
          <path d="M186 382 h28 l-4 38 h-20 z" />
          {/* body */}
          <path d="M120 120 h160 a16 16 0 0 1 16 16 v180 a24 24 0 0 1 -24 24 h-144 a24 24 0 0 1 -24 -24 v-180 a16 16 0 0 1 16 -16 z" />
          {/* drip tray */}
          <path d="M108 420 h184 v20 a8 8 0 0 1 -8 8 h-168 a8 8 0 0 1 -8 -8 z" />
          {/* gauge */}
          <circle cx="270" cy="180" r="26" />
          <path d="M270 180 l14 -10" />
          <path d="M252 188 a26 26 0 0 1 36 0" />
          {/* paddle lever */}
          <path d="M296 180 h34" />
          <circle cx="296" cy="180" r="4" />
          {/* steam wand */}
          <path d="M136 156 v70 a10 10 0 0 0 10 10 h8" />
          {/* top badge */}
          <path d="M150 120 v-14 a8 8 0 0 1 8 -8 h84 a8 8 0 0 1 8 8 v14" />
          <text x="200" y="150" textAnchor="middle" fontSize="13" letterSpacing="3" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">MK</text>
          {/* feet */}
          <path d="M132 448 v10 M268 448 v10" />
        </g>
      )}

      {art === 'grinder' && (
        <g {...common}>
          {/* hopper */}
          <path d="M160 80 h80 v30 l-10 40 h-60 l-10 -40 z" />
          <path d="M170 80 v-10 h60 v10" />
          {/* collar */}
          <path d="M156 150 h88 v14 h-88 z" />
          {/* body column */}
          <path d="M168 164 h64 v150 a12 12 0 0 1 -12 12 h-40 a12 12 0 0 1 -12 -12 z" />
          {/* adjustment ring */}
          <path d="M160 230 h80" />
          <path d="M164 222 l-8 -8 M236 222 l8 -8" />
          {/* chute / portafilter fork */}
          <path d="M180 326 v20 h40 v-20" />
          <path d="M170 346 h60" />
          <path d="M176 346 v18 M224 346 v18" />
          {/* base */}
          <path d="M150 360 h100 v18 a6 6 0 0 1 -6 6 h-88 a6 6 0 0 1 -6 -6 z" />
          <text x="200" y="300" textAnchor="middle" fontSize="13" letterSpacing="3" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">MK</text>
          {/* dial ticks */}
          <path d="M232 210 v-6 M232 250 v6" />
          {/* feet */}
          <path d="M168 384 v8 M232 384 v8" />
        </g>
      )}

      {art === 'kettle' && (
        <g {...common}>
          {/* body */}
          <path d="M150 230 a70 70 0 0 1 140 0 v30 a70 70 0 0 1 -140 0 z" />
          {/* lid */}
          <path d="M150 232 a70 70 0 0 1 140 0" />
          <path d="M212 162 v-16" />
          <circle cx="212" cy="140" r="5" />
          {/* gooseneck spout */}
          <path d="M290 250 q40 0 40 -40 v-70 q0 -18 -18 -18 h-14" />
          <path d="M298 122 v20 M298 122 h-18" />
          {/* handle */}
          <path d="M150 240 q-50 0 -50 60 q0 40 30 50" />
          <path d="M150 270 q-26 0 -26 30 q0 26 18 36" />
          {/* base shadow */}
          <path d="M158 300 h124" opacity="0.4" />
          <text x="220" y="270" textAnchor="middle" fontSize="13" letterSpacing="3" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">MK</text>
        </g>
      )}

      {art === 'tamper' && (
        <g {...common}>
          {/* handle knob */}
          <path d="M200 120 v40" />
          <path d="M188 160 h24 v8 a12 12 0 0 1 -24 0 z" />
          {/* shaft */}
          <path d="M196 168 h8 v120 h-8 z" />
          {/* collar */}
          <path d="M188 288 h24 v8 h-24 z" />
          {/* base */}
          <path d="M176 296 h48 v30 a6 6 0 0 1 -6 6 h-36 a6 6 0 0 1 -6 -6 z" />
          <path d="M176 326 h48" opacity="0.4" />
          {/* calibration spring indicator */}
          <path d="M200 200 v-28" />
          <circle cx="200" cy="172" r="3" />
          <text x="200" y="250" textAnchor="middle" fontSize="13" letterSpacing="3" fill="currentColor" stroke="none" fontFamily="Inter, sans-serif">MK</text>
          {/* shadow */}
          <path d="M176 340 h48" opacity="0.3" />
        </g>
      )}
    </svg>
  );
}

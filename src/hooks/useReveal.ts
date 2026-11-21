import { useEffect } from 'react';

/**
 * Adds `is-visible` to any element with the `reveal-obs` class once it scrolls
 * into view. Uses a MutationObserver so elements mounted later (e.g. returning
 * to the brand grid from a brand detail view) are also picked up.
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const observeAll = () => {
      document
        .querySelectorAll('.reveal-obs:not(.is-visible)')
        .forEach((el) => io.observe(el));
    };

    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}

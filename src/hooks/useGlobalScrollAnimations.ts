import { useEffect } from "react";

/**
 * Global scroll-triggered animation system.
 *
 * Approach:
 * - Elements with [data-reveal] are hidden (opacity: 0, transformed) by default.
 * - When they enter the viewport, the class "revealed" is added which triggers CSS transitions.
 * - Children with [data-reveal-child] inside a [data-reveal-group] stagger sequentially.
 * - A MutationObserver watches for new elements added to the DOM (e.g. lazy-loaded sections).
 */

const REVEALED_CLASS = "revealed";

let revealTimeout: number | null = null;
let revealQueue: HTMLElement[] = [];

export const useGlobalScrollAnimations = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // Collect all newly intersecting elements
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            if (!el.classList.contains(REVEALED_CLASS)) {
              revealQueue.push(el);
              io.unobserve(el);
            }
          }
        });

        if (revealQueue.length > 0 && !revealTimeout) {
          revealTimeout = window.setTimeout(() => {
            // Sort by vertical position (top to bottom) then horizontal (left to right)
            revealQueue.sort((a, b) => {
              const rectA = a.getBoundingClientRect();
              const rectB = b.getBoundingClientRect();
              if (Math.abs(rectA.top - rectB.top) > 50) {
                return rectA.top - rectB.top;
              }
              return rectA.left - rectB.left;
            });

            // Reveal them with a stagger
            revealQueue.forEach((el, i) => {
              // Try to find a custom stagger, otherwise default to 100ms
              let stagger = 100;
              const group = el.closest("[data-stagger]");
              if (group) {
                stagger = parseInt((group as HTMLElement).dataset.stagger ?? "100");
              }
              
              setTimeout(() => {
                el.classList.add(REVEALED_CLASS);
              }, i * stagger);
            });

            revealQueue = [];
            revealTimeout = null;
          }, 50); // Wait 50ms to batch intersections
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    function scanAndObserve() {
      // Find all items that need revealing
      document.querySelectorAll("[data-reveal], [data-reveal-child]").forEach((el) => {
        if (!el.classList.contains(REVEALED_CLASS)) {
          io.observe(el);
        }
      });
    }

    // Initial scan
    scanAndObserve();

    // Watch for DOM changes (new sections added dynamically)
    const mo = new MutationObserver(() => {
      scanAndObserve();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
};

export default useGlobalScrollAnimations;

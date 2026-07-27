import { useEffect, useRef } from "react";

export const useScrollAnimation = (
  options: {
    threshold?: number;
    rootMargin?: string;
  } = {},
) => {
  const ref = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = "0px 0px -100px 0px" } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            // Apply animations based on data attributes
            const animationType = element.dataset.animation;
            const delayStagger = element.dataset.delayStagger
              ? parseInt(element.dataset.delayStagger)
              : 0;

            if (animationType) {
              element.classList.add(animationType);

              // For child elements with stagger effect
              if (delayStagger > 0) {
                const children = element.querySelectorAll("[data-animate]");
                children.forEach((child, index) => {
                  const childElement = child as HTMLElement;
                  const childAnimation = childElement.dataset.animate;
                  if (childAnimation) {
                    setTimeout(() => {
                      childElement.classList.add(childAnimation);
                    }, index * delayStagger);
                  }
                });
              }
            }

            // Stop observing once animated
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};

// Utility hook for animating multiple elements
export const useScrollAnimateChildren = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const children = element.querySelectorAll("[data-animate]");
            const delayStagger = parseInt(
              element.dataset.delayStagger || "100",
            );

            children.forEach((child, index) => {
              const childElement = child as HTMLElement;
              const animation = childElement.dataset.animate;
              if (animation) {
                setTimeout(() => {
                  childElement.classList.add(animation);
                }, index * delayStagger);
              }
            });

            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    document.querySelectorAll("[data-animate-group]").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

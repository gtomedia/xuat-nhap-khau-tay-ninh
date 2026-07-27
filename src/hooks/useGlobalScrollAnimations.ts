import { useEffect } from "react";

/**
 * Initialize scroll animations globally
 * Automatically applies animations to elements with animation class patterns
 */
export const useGlobalScrollAnimations = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            // Check for animation classes in the element or its children
            const animationClasses = [
              "animate-fade-up",
              "animate-fade-left",
              "animate-fade-right",
              "animate-zoom",
            ];

            // Trigger animation for the element itself
            for (const animClass of animationClasses) {
              if (element.classList.contains(animClass)) {
                // Element already has the class, just make sure it triggers
                element.style.animation = "none";
                setTimeout(() => {
                  element.style.animation = "";
                }, 10);
                break;
              }
            }

            // Trigger animations for children with stagger effect
            const animatedChildren = element.querySelectorAll("[data-animate]");
            if (animatedChildren.length > 0) {
              const staggerDelay = parseInt(element.dataset.stagger || "80");
              animatedChildren.forEach((child, index) => {
                const childEl = child as HTMLElement;
                const animation = childEl.dataset.animate;
                if (animation) {
                  setTimeout(() => {
                    childEl.classList.add(animation);
                  }, index * staggerDelay);
                }
              });
              observer.unobserve(element);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    // Observe all elements with animation classes
    const animationSelectors = [
      ".animate-fade-up",
      ".animate-fade-left",
      ".animate-fade-right",
      ".animate-zoom",
      "[data-animate-group]",
    ];

    animationSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        observer.observe(element);
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};

export default useGlobalScrollAnimations;

"use client";

import { useEffect } from "react";

const LOAD_SELECTOR = "[data-load-reveal]";
const SCROLL_SELECTOR = "[data-reveal], [data-line-reveal]";

export function MotionOrchestrator() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const loadElements = Array.from(
      document.querySelectorAll<HTMLElement>(LOAD_SELECTOR),
    );
    const scrollElements = Array.from(
      document.querySelectorAll<HTMLElement>(SCROLL_SELECTOR),
    );

    const revealAll = () => {
      [...loadElements, ...scrollElements].forEach((element) => {
        element.classList.add("is-revealed");
      });
    };

    if (mediaQuery.matches) {
      revealAll();
      return;
    }

    document.documentElement.classList.add("motion-safe");

    const loadFrame = window.requestAnimationFrame(() => {
      loadElements.forEach((element) => {
        element.classList.add("is-revealed");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    scrollElements.forEach((element) => observer.observe(element));

    return () => {
      window.cancelAnimationFrame(loadFrame);
      observer.disconnect();
      document.documentElement.classList.remove("motion-safe");
    };
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

export default function AnimationProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.animateDelay
              ? parseInt(el.dataset.animateDelay, 10)
              : 0;
            setTimeout(() => el.classList.add("animated"), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll("[data-animate]").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return null;
}

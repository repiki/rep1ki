"use client";
import { useEffect } from "react";

export function TextEntrance() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main p, main .btn, main .text-link, main .work-card"),
    ).filter((target) => !target.closest(".service-hover-copy, .apple-card") && !target.matches(".services-list p"));
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("text-in"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    targets.forEach((target, index) => { target.classList.add("text-wait"); target.style.setProperty("--reveal-delay", `${Math.min(index % 7, 5) * 42}ms`); observer.observe(target); });
    return () => observer.disconnect();
  }, []);
  return null;
}

"use client";
import { useEffect } from "react";

export function AmbientField() {
  useEffect(() => {
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${(event.clientX / innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--pointer-y", `${(event.clientY / innerHeight) * 100}%`);
    };
    addEventListener("pointermove", onMove, { passive: true });
    return () => removeEventListener("pointermove", onMove);
  }, []);
  return <div className="ambient-field" aria-hidden="true" />;
}

"use client";

import { useEffect, useRef } from "react";

interface ClippedCircleProps {
  className?: string;
  circleClassName?: string;
  circleSize?: number;
}

export function ClippedCircle({
  className = "",
  circleClassName = "",
  circleSize = 400,
}: ClippedCircleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const position = positionRef.current;
    const circle = circleRef.current;
    const parent = container?.parentElement;
    if (!container || !position || !circle || !parent) return;

    let frame = 0;
    let pointerX = parent.clientWidth / 2;
    let pointerY = parent.clientHeight / 2;

    const paint = () => {
      position.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      frame = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = parent.getBoundingClientRect();
      pointerX = event.clientX - bounds.left;
      pointerY = event.clientY - bounds.top;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const handlePointerEnter = (event: PointerEvent) => {
      handlePointerMove(event);
      circle.dataset.visible = "true";
    };

    const handlePointerLeave = () => {
      circle.dataset.visible = "false";
    };

    parent.addEventListener("pointerenter", handlePointerEnter);
    parent.addEventListener("pointermove", handlePointerMove);
    parent.addEventListener("pointerleave", handlePointerLeave);

    paint();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      parent.removeEventListener("pointerenter", handlePointerEnter);
      parent.removeEventListener("pointermove", handlePointerMove);
      parent.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className={`clipped-circle ${className}`} aria-hidden="true">
      <div ref={positionRef} className="clipped-circle__position">
        <div
          ref={circleRef}
          className={`clipped-circle__disc ${circleClassName}`}
          data-visible="false"
          style={{ width: circleSize, height: circleSize }}
        />
      </div>
    </div>
  );
}

export type { ClippedCircleProps };

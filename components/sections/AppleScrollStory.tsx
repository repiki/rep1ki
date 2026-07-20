"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Stage = { number: string; title: string; text: string; accent: string };

export function AppleScrollStory({
  eyebrow,
  title,
  stages,
}: {
  eyebrow: string;
  title: string;
  stages: Stage[];
}) {
  const root = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!root.current || !pin.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add("(min-width: 801px) and (prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".apple-card");
        const steps = gsap.utils.toArray<HTMLElement>(".apple-progress-step");

        gsap.set(cards.slice(1), {
          autoAlpha: 0,
          yPercent: 18,
          scale: 0.94,
          filter: "blur(6px)",
        });
        gsap.set(steps.slice(1), { opacity: 0.28, scaleX: 0.45 });

        const timeline = gsap.timeline({
          defaults: { duration: 1, ease: "none" },
          scrollTrigger: {
            trigger: pin.current,
            start: "top top",
            end: () => `+=${Math.max(stages.length, 2) * 1500}`,
            pin: true,
            scrub: 0.45,
            snap: {
              snapTo: "labels",
              duration: { min: 0.18, max: 0.42 },
              delay: 0.08,
              ease: "power2.out",
            },
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        timeline.addLabel("stage-0");
        timeline.to({}, { duration: 0.95 });

        for (let index = 0; index < cards.length - 1; index += 1) {
          const position = timeline.duration();
          timeline
            .to(
              cards[index],
              {
                autoAlpha: 0,
                yPercent: -13,
                scale: 0.9,
                filter: "blur(6px)",
                duration: 0.54,
              },
              position,
            )
            .fromTo(
              cards[index + 1],
              {
                autoAlpha: 0,
                yPercent: 18,
                scale: 0.94,
                filter: "blur(6px)",
              },
              {
                autoAlpha: 1,
                yPercent: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 0.54,
              },
              position + 0.04,
            )
            .to(steps[index], { opacity: 0.28, scaleX: 0.45, duration: 0.54 }, position)
            .to(steps[index + 1], { opacity: 1, scaleX: 1, duration: 0.54 }, position + 0.04);

          timeline.addLabel(`stage-${index + 1}`, position + 0.58);
          timeline.to({}, { duration: 0.95 });
        }
      }, root);

      return () => context.revert();
    });

    return () => media.revert();
  }, [stages.length]);

  return (
    <section className="apple-story" ref={root}>
      <div className="apple-story-head shell">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>

      <div className="apple-pin" ref={pin}>
        <div className="apple-stage-label">Scroll story</div>
        <div className="apple-cards">
          {stages.map((stage, index) => (
            <article
              className="apple-card"
              key={stage.number}
              style={{ "--stage-accent": stage.accent } as React.CSSProperties}
            >
              <div className="apple-card-art" aria-hidden="true">
                <i>{index + 1}</i>
                <span />
              </div>
              <div className="apple-card-copy">
                <span>{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="apple-progress" aria-hidden="true">
          {stages.map((stage) => (
            <span className="apple-progress-step" key={stage.number}>
              {stage.number}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

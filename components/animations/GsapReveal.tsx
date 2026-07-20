"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function GsapReveal({children}:{children:React.ReactNode}){const ref=useRef<HTMLDivElement>(null);useLayoutEffect(()=>{if(!ref.current||matchMedia("(prefers-reduced-motion: reduce)").matches)return;gsap.registerPlugin(ScrollTrigger);const ctx=gsap.context(()=>gsap.fromTo(ref.current,{opacity:0,y:24},{opacity:1,y:0,duration:.65,ease:"power3.out",scrollTrigger:{trigger:ref.current,start:"top 85%",once:true}}),ref);return()=>ctx.revert()},[]);return <div ref={ref}>{children}</div>}

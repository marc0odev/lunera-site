"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HeroArt({ alt }: { alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 900);
        el.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(${1 + y * 0.00008})`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div ref={ref} className="will-change-transform">
      {/* Versão clara: brilhos recoloridos nos tons da marca. Versão escura: brilho original. */}
      <Image
        src="/photos/hero-twin-light.webp"
        alt={alt}
        width={1672}
        height={941}
        priority
        sizes="(max-width: 1320px) 100vw, 1320px"
        quality={90}
        className="block h-auto w-full dark:hidden"
      />
      <Image
        src="/photos/hero-twin-dark.webp"
        alt=""
        aria-hidden="true"
        width={1672}
        height={941}
        priority
        sizes="(max-width: 1320px) 100vw, 1320px"
        quality={90}
        className="hidden h-auto w-full dark:block"
      />
    </div>
  );
}

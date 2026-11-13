"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Imagem da abertura (mulher e sua "gêmea" digital). Entra com o mesmo movimento das telas do site
// e anda um pouco mais devagar que a página ao rolar (parallax leve). Respeita "reduzir movimento".
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
      <Image
        src="/photos/hero-twin.webp"
        alt={alt}
        width={1672}
        height={941}
        priority
        sizes="(max-width: 1320px) 100vw, 1320px"
        quality={90}
        className="h-auto w-full [mask-image:linear-gradient(to_bottom,transparent_0%,#000_16%,#000_84%,transparent_100%)]"
      />
    </div>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Imagem da abertura (mulher e sua "gêmea" digital), sem fundo: se encaixa no tema claro e no escuro. Entra com o mesmo movimento das telas do site
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
      {/* A mesma arte nos dois temas (traço violeta da marca), como na proposta da Ana */}
      <Image
        src="/photos/hero-twin-light.webp"
        alt={alt}
        width={1672}
        height={941}
        priority
        sizes="(max-width: 1440px) 100vw, 1440px"
        quality={90}
        className="block h-auto w-full"
      />
    </div>
  );
}

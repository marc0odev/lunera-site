"use client";
import Image from "next/image";
import { useId } from "react";
import { useLang } from "@/i18n/LanguageProvider";

// Arte do site: telas REAIS do app (Phone), fotos conceituais dos locais do patch (Photo), a caixa ilustrativa, as luas e os ícones.
export function PatchShape({
  w = 64,
  className = "",
}: {
  w?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 26"
      width={w}
      height={(w * 26) / 64}
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="62"
        height="24"
        rx="12"
        fill="#F7F5FF"
        stroke="#B9AEE8"
        strokeWidth="1"
      />
      <rect
        x="5"
        y="5"
        width="54"
        height="16"
        rx="8"
        fill="none"
        stroke="#E3DDF8"
        strokeWidth="1"
      />
      <circle cx="32" cy="13" r="3.4" fill="#7D5ADF" opacity=".9" />
      <circle
        cx="32"
        cy="13"
        r="5.6"
        fill="none"
        stroke="#6AC8E6"
        strokeWidth="1"
        opacity=".9"
      />
    </svg>
  );
}

// Figura estilizada (a mesma do Lunera App). `patch` coloca o patch sobre o esterno; `pins` mostra áreas do diário.
export function PatchBox({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 150" className={className} aria-hidden="true">
      <rect x="22" y="6" width="176" height="62" rx="12" fill="#2B2670" />
      <circle cx="110" cy="38" r="15" fill="#8E86E6" />
      <circle cx="116" cy="34" r="13" fill="#2B2670" />
      <circle cx="104" cy="42" r="4" fill="#6AC8E6" />
      <rect x="8" y="58" width="204" height="84" rx="14" fill="#3F399B" />
      <rect x="22" y="70" width="176" height="58" rx="9" fill="#E9E4FB" />
      <g transform="translate(70 87)">
        <PatchShape w={80} />
      </g>
    </svg>
  );
}

const Row = ({ label, on }: { label: string; on: number }) => (
  <div className="mt-2.5">
    <p className="text-[11px] font-semibold text-foreground">{label}</p>
    <div className="mt-1 flex gap-1.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`h-2.5 flex-1 rounded-full ${i === on ? "bg-violet" : i < on ? "bg-violet/35" : "bg-mist"}`}
        />
      ))}
    </div>
  </div>
);

// Tela ilustrativa do diário
export function Moon({
  phase,
  className = "h-14 w-14",
}: {
  phase: number;
  className?: string;
}) {
  // phase = fração iluminada (0 a 1). O contorno do disco é sempre o mesmo círculo, então as cinco luas alinham pelo centro.
  const id = useId().replace(/:/g, "");
  const r = 28,
    rx = Math.abs(1 - 2 * phase) * r;
  const lit = `M32 ${32 - r} A${r} ${r} 0 0 1 32 ${32 + r} A${rx} ${r} 0 0 ${phase < 0.5 ? 0 : 1} 32 ${32 - r} Z`;
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={`block shrink-0 ${className}`}
    >
      <defs>
        <radialGradient id={`g${id}`} cx="62%" cy="30%" r="80%">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".55" stopColor="#C9BCF6" />
          <stop offset="1" stopColor="#8E86E6" />
        </radialGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="#8E86E6"
        fillOpacity=".16"
        stroke="#8E86E6"
        strokeOpacity=".35"
        strokeWidth="1"
      />
      {phase >= 1 ? (
        <circle cx="32" cy="32" r={r} fill={`url(#g${id})`} />
      ) : (
        <path d={lit} fill={`url(#g${id})`} />
      )}
    </svg>
  );
}

// Tela REAL do Lunera App (capturas em public/screens, geradas por tools/capture_all.py), em moldura de telefone.
// Troca sozinha entre claro/escuro e entre PT/EN (demais idiomas usam a captura em inglês).
export function Phone({
  name,
  alt,
  className = "",
  crop = false,
  at = "top",
}: {
  name: string;
  alt: string;
  className?: string;
  crop?: boolean;
  at?: "top" | "bottom";
}) {
  const { lang } = useLang();
  const l = lang === "PT" ? "pt" : "en";
  const img = (theme: string, cls: string) => (
    <Image
      src={`/screens/${name}-${theme}-${l}.webp`}
      alt={theme === "light" ? alt : ""}
      aria-hidden={theme === "dark" || undefined}
      width={600}
      height={1298}
      sizes="(max-width: 768px) 70vw, 320px"
      className={`${cls} ${crop ? `h-full w-full object-cover ${at === "bottom" ? "object-bottom" : "object-top"}` : "h-auto w-full"}`}
    />
  );
  return (
    <div
      className={`overflow-hidden border-[5px] border-[#17153F] bg-[#17153F] shadow-[0_24px_48px_-18px_rgba(31,27,99,.55)] ${crop ? "rounded-[26px]" : "rounded-[34px]"} ${className}`}
    >
      <div
        className={`overflow-hidden ${crop ? "h-full rounded-[21px]" : "rounded-[29px]"}`}
      >
        {img("light", "block dark:hidden")}
        {img("dark", "hidden dark:block")}
      </div>
    </div>
  );
}

// Foto conceitual dos locais de aplicação do patch.
export function Photo({
  name,
  alt,
  className = "",
  pos = "50% 50%",
}: {
  name: string;
  alt: string;
  className?: string;
  pos?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={`/photos/${name}.webp`}
        alt={alt}
        fill
        sizes="(max-width: 768px) 92vw, 460px"
        className="object-cover"
        style={{ objectPosition: pos }}
      />
    </div>
  );
}

const P = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;
export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const s = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  } as const;
  switch (name) {
    case "phone":
      return (
        <svg {...s}>
          <rect x="7" y="3" width="10" height="18" rx="2.5" {...P} />
          <path d="M11 18h2" {...P} />
        </svg>
      );
    case "users":
      return (
        <svg {...s}>
          <circle cx="9" cy="9" r="3" {...P} />
          <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5s4.9 1.5 5.5 4.5" {...P} />
          <circle cx="17" cy="8" r="2.4" {...P} />
          <path d="M16 13.5c2.6-.2 4.2 1.2 4.7 3.5" {...P} />
        </svg>
      );
    case "chip":
      return (
        <svg {...s}>
          <rect x="7" y="7" width="10" height="10" rx="2" {...P} />
          <path
            d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"
            {...P}
          />
        </svg>
      );
    case "link":
      return (
        <svg {...s}>
          <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" {...P} />
          <path d="M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1" {...P} />
        </svg>
      );
    case "shield":
      return (
        <svg {...s}>
          <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" {...P} />
          <path d="M9 12l2 2 4-4" {...P} />
        </svg>
      );
    case "store":
      return (
        <svg {...s}>
          <path d="M4 9l1.5-5h13L20 9" {...P} />
          <path d="M5 9v11h14V9" {...P} />
          <path d="M10 20v-6h4v6" {...P} />
        </svg>
      );
    case "nodes":
      return (
        <svg {...s}>
          <circle cx="12" cy="5" r="2.2" {...P} />
          <circle cx="5.5" cy="18" r="2.2" {...P} />
          <circle cx="18.5" cy="18" r="2.2" {...P} />
          <path d="M11 7l-4.3 9M13 7l4.3 9M8 18h8" {...P} />
        </svg>
      );
    case "pulse":
      return (
        <svg {...s}>
          <path d="M3 12h4l2-5 4 10 2-5h6" {...P} />
        </svg>
      );
    case "sliders":
      return (
        <svg {...s}>
          <path d="M4 7h9M17 7h3M4 17h3M11 17h9" {...P} />
          <circle cx="15" cy="7" r="2" {...P} />
          <circle cx="9" cy="17" r="2" {...P} />
        </svg>
      );
    case "report":
      return (
        <svg {...s}>
          <rect x="5" y="3" width="14" height="18" rx="2.5" {...P} />
          <path d="M9 16v-3M12 16V9M15 16v-5" {...P} />
        </svg>
      );
    case "chat":
      return (
        <svg {...s}>
          <path d="M5 5h14v10H11l-4 4v-4H5z" {...P} />
          <path d="M9 9h6M9 12h4" {...P} />
        </svg>
      );
    default:
      return null;
  }
}

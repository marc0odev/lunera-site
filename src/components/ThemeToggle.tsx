"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";

// Botão claro/escuro. O tema inicial (sistema ou escolha salva) é aplicado por um script no <head>, antes da pintura.
export default function ThemeToggle() {
  const { t } = useLang();
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    setMode(
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light",
    );
  }, []);
  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("lunera.theme", next);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mode === "dark" ? t("theme.toLight") : t("theme.toDark")}
      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-card text-accent transition hover:opacity-80"
    >
      {mode === "dark" ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

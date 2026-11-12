"use client";
import { useEffect, useRef, useState } from "react";
import { LANGUAGES } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LanguageProvider";

export default function LanguageSwitcher({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("lang.label")}: ${lang}`}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 shrink-0 items-center gap-1 rounded-full border border-line bg-card px-2.5 text-sm font-bold text-foreground sm:gap-1.5 sm:px-3"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
        </svg>
        {lang}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-48 overflow-hidden rounded-2xl border border-line bg-card shadow-xl shadow-indigo/20"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 border-t border-line px-4 py-3 text-left text-[15px] first:border-t-0 hover:bg-mist"
              >
                <span
                  className={`w-7 text-sm font-bold ${l.code === lang ? "text-accent" : "text-muted"}`}
                >
                  {l.code}
                </span>
                <span className="flex-1">{l.name}</span>
                {l.code === lang && (
                  <span className="text-accent" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

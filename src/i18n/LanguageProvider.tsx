"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionary, LANGUAGES, type Lang } from "./dictionary";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};
const LanguageContext = createContext<Ctx | null>(null);
const KEY = "lunera.lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("EN"); // padrão: inglês (igual no servidor e no cliente)

  useEffect(() => {
    const saved = window.localStorage.getItem(KEY) as Lang | null;
    if (saved && saved in dictionary) setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = LANGUAGES.find(
      (l) => l.code === lang,
    )!.htmlLang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(KEY, l);
    } catch {}
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (key) => dictionary[lang][key] ?? dictionary.EN[key] ?? key,
    }),
    [lang, setLang],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}

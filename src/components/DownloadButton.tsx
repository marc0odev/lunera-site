"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { QRCodeSVG } from "qrcode.react";
import { APP } from "@/data/contact";
import { useLang } from "@/i18n/LanguageProvider";

type OS = "android" | "ios" | "desktop";

// Botão "Baixar o app" + janela com as opções para cada plataforma:
// Android: instalador .apk (se houver) ou instalar pelo navegador; iPhone: abrir e "Adicionar à Tela de Início";
// computador: abrir no navegador (e QR para abrir no celular).
export default function DownloadButton({ className }: { className: string }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [os, setOs] = useState<OS>("desktop");
  const [webUrl, setWebUrl] = useState(APP.web);
  const dialog = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    dialog.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus();
    };
  }, [open]);

  // Descobre o aparelho no clique (o que estiver mais perto da pessoa aparece primeiro)
  const openDialog = () => {
    const ua = navigator.userAgent;
    const ios =
      /iPhone|iPad|iPod/i.test(ua) ||
      (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
    setOs(/Android/i.test(ua) ? "android" : ios ? "ios" : "desktop");
    if (APP.web.startsWith("/"))
      setWebUrl(new URL(APP.web, window.location.origin).href);
    setOpen(true);
  };

  const row =
    "flex w-full items-start gap-4 rounded-3xl border border-line bg-card p-5 text-left";
  const go =
    "mt-3 inline-flex items-center justify-center rounded-full bg-[linear-gradient(100deg,var(--color-primary),var(--color-violet))] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90";
  const soon = (
    <span className="mt-3 inline-block rounded-full border border-dashed border-line px-4 py-2 text-sm text-muted">
      {t("dl.soon")}
    </span>
  );
  const options: Record<OS, React.ReactNode> = {
    android: (
      <div key="android" className={row}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="mt-0.5 shrink-0 text-accent"
        >
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </svg>
        <div>
          <p className="font-semibold">{t("dl.android")}</p>
          <p className="mt-1 text-sm text-muted">
            {APP.apk ? t("dl.android.apk") : t("dl.android.web")}
          </p>
          {APP.apk ? (
            <a className={go} href={APP.apk} download>
              {t("dl.android.btn")}
            </a>
          ) : webUrl ? (
            <a className={go} href={webUrl} target="_blank" rel="noreferrer">
              {t("dl.open")}
            </a>
          ) : (
            soon
          )}
        </div>
      </div>
    ),
    ios: (
      <div key="ios" className={row}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="mt-0.5 shrink-0 text-accent"
        >
          <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
          <path d="M10.5 18.5h3" />
        </svg>
        <div>
          <p className="font-semibold">{t("dl.ios")}</p>
          <p className="mt-1 text-sm text-muted">{t("dl.ios.how")}</p>
          {webUrl ? (
            <a className={go} href={webUrl} target="_blank" rel="noreferrer">
              {t("dl.open")}
            </a>
          ) : (
            soon
          )}
        </div>
      </div>
    ),
    desktop: (
      <div key="desktop" className={row}>
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="mt-0.5 shrink-0 text-accent"
        >
          <rect x="4" y="5" width="16" height="11" rx="1.8" />
          <path d="M2.5 19h19" />
        </svg>
        <div>
          <p className="font-semibold">{t("dl.desktop")}</p>
          <p className="mt-1 text-sm text-muted">{t("dl.desktop.how")}</p>
          {webUrl ? (
            <a className={go} href={webUrl} target="_blank" rel="noreferrer">
              {t("dl.open")}
            </a>
          ) : (
            soon
          )}
        </div>
      </div>
    ),
  };
  const order: OS[] = [
    os,
    ...(["android", "ios", "desktop"] as OS[]).filter((o) => o !== os),
  ];

  return (
    <>
      <button type="button" className={className} onClick={openDialog}>
        {t("dl.cta")}
      </button>
      {open &&
        // Renderiza no <body>: dentro de blocos animados (transform) o "fixed" ficaria preso ao bloco
        createPortal(
          <div
            className="fixed inset-0 z-50 grid place-items-end bg-[#07061F]/60 backdrop-blur-sm sm:place-items-center"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <div
              ref={dialog}
              role="dialog"
              aria-modal="true"
              aria-labelledby="dl-title"
              className="max-h-[92dvh] w-full overflow-y-auto rounded-t-[32px] bg-background p-6 text-left text-foreground shadow-2xl sm:max-w-lg sm:rounded-[32px] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2
                    id="dl-title"
                    className="text-2xl font-semibold tracking-tight"
                  >
                    {t("dl.title")}
                  </h2>
                  <p className="mt-1 text-[15px] text-muted">{t("dl.sub")}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t("dl.close")}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-card"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 grid gap-3">
                {order.map((o) => options[o])}
              </div>
              {os === "desktop" && webUrl && (
                <figure className="mt-6 flex items-center gap-4 rounded-3xl bg-mist p-4">
                  <QRCodeSVG
                    value={webUrl}
                    size={104}
                    marginSize={2}
                    bgColor="#FFFFFF"
                    fgColor="#1B1763"
                    className="shrink-0 rounded-xl"
                  />
                  <figcaption className="text-sm text-muted">
                    {t("dl.qr")}
                  </figcaption>
                </figure>
              )}
              <p className="mt-5 text-xs leading-relaxed text-muted">
                {t("dl.note")}
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

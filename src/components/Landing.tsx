"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { QRCodeSVG } from "qrcode.react";
import { CONTACT, CONTACT_PHONE_LABEL, SURVEY, vcard } from "@/data/contact";
import { REFERENCES, SCIENCE_CARDS } from "@/data/science";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Reveal from "./Reveal";
import { Icon, Moon, PatchBox, Phone, Photo } from "./Art";

const btn =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition hover:opacity-90 active:scale-[.98]";
const primary = `${btn} bg-[linear-gradient(100deg,var(--color-primary),var(--color-violet))] text-white`;
const h2 =
  "text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.08] tracking-[-0.025em]";
const kick = "text-[13px] font-bold uppercase tracking-[0.16em] text-accent";

// Linha do tempo (Fase I, II e III). Prazos sugeridos a partir do início do projeto.
const PHASES = [
  {
    id: "ph1",
    bar: "bg-royal",
    dot: "border-royal bg-royal/10",
    items: [
      ["m1", "0–3", "phone"],
      ["m2", "3–6", "users"],
    ],
  },
  {
    id: "ph2",
    bar: "bg-[#E8B93C]",
    dot: "border-[#E8B93C] bg-[#E8B93C]/10",
    items: [
      ["m3", "0–9", "chip"],
      ["m4", "6–12", "link"],
      ["m5", "9–24", "shield"],
      ["m6", "18–30", "store"],
    ],
  },
  {
    id: "ph3",
    bar: "bg-[#E060A8]",
    dot: "border-[#E060A8] bg-[#E060A8]/10",
    items: [
      ["m7", "18–36", "nodes"],
      ["m8", "30–48+", "pulse"],
    ],
  },
] as const;

export default function Landing() {
  const { t } = useLang();
  const [level, setLevel] = useState("moderate");
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [refs, setRefs] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const levels = ["none", "mild", "moderate", "strong", "veryStrong"];
  // Texto branco só em fundos com contraste >= 4,5:1
  const tone: Record<string, string> = {
    none: "bg-card text-foreground",
    mild: "bg-royal text-white",
    moderate: "bg-violet text-white",
    strong: "bg-primary text-white",
    veryStrong: "bg-[#241E6B] text-white dark:bg-[#B7A6FF] dark:text-[#14123F]",
  };
  const logo = (cls: string, dark = false) => (
    <Image
      src="/logo.png"
      alt={dark ? "" : "Lunera Healthcare"}
      aria-hidden={dark || undefined}
      width={900}
      height={343}
      priority
      className={cls}
    />
  );
  // Menu
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(`Lunera · ${t("con.kicker")}`)}`;
  const nav = [
    ["about", "nav.about"],
    ["top", "nav.context"],
    ["problem", "nav.problem"],
    ["solution", "nav.solution"],
    ["science", "nav.science"],
    ["next", "nav.next"],
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-20 border-b transition-all duration-300 ${scrolled ? "border-line bg-background/80 backdrop-blur-xl" : "border-transparent bg-transparent"}`}
      >
        <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-3 px-4 sm:h-24 sm:px-6">
          <a href="#top" aria-label="Lunera Healthcare" className="shrink-0">
            {/* Logo oficial em destaque, sem caixa. No modo escuro vira a versão clara (monocromática) */}
            {logo("block h-14 w-auto sm:h-[72px] dark:hidden")}
            {logo(
              "hidden h-14 w-auto brightness-0 invert opacity-90 sm:h-[72px] dark:block",
              true,
            )}
          </a>
          <nav
            aria-label="Menu"
            className="flex min-w-0 items-center gap-2 text-[15px] font-medium text-muted sm:gap-4"
          >
            {nav.map(([id, k]) => (
              <a
                key={id}
                className="hidden whitespace-nowrap hover:text-accent xl:block"
                href={`#${id}`}
              >
                {t(k)}
              </a>
            ))}
            <a
              href="#contact"
              className={`${primary} hidden whitespace-nowrap !px-5 !py-2.5 !text-sm xl:inline-flex`}
            >
              {t("nav.join")}
            </a>
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMenu((v) => !v)}
              aria-expanded={menu}
              aria-label={t("nav.menu")}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-foreground xl:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                {menu ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
        {menu && (
          <div className="border-t border-line bg-background/95 px-6 pb-5 pt-3 backdrop-blur-xl xl:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col text-lg font-medium">
              {nav.map(([id, k]) => (
                <li key={id}>
                  <a
                    onClick={() => setMenu(false)}
                    className="block py-3 hover:text-accent"
                    href={`#${id}`}
                  >
                    {t(k)}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  onClick={() => setMenu(false)}
                  href="#contact"
                  className={`${primary} w-full`}
                >
                  {t("nav.join")}
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main id="top" className="[&_section]:scroll-mt-24">
        {/* Introdução */}
        <section className="relative overflow-hidden bg-[radial-gradient(70%_50%_at_50%_30%,var(--halo),transparent_72%)] pt-32 text-center sm:pt-40">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal>
              <p className={kick}>{t("hero.sig")}</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 text-[clamp(30px,4.8vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em]">
                {t("hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-6 max-w-[38em] text-[clamp(17px,2vw,21px)] leading-relaxed text-muted">
                {t("hero.lead")}
              </p>
              <p className="mx-auto mt-3 max-w-[38em] text-base leading-relaxed text-muted">
                {t("hero.lead2")}
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
                <a href="#contact" className={primary}>
                  {t("cta.short")}
                </a>
                <a
                  href="#journey"
                  className="text-base font-semibold text-accent hover:underline"
                >
                  {t("hero.link")} ›
                </a>
              </div>
              <p
                className="mx-auto mt-5 max-w-[40em] text-[13px] leading-relaxed text-muted"
                role="note"
              >
                {t("hero.note")}
              </p>
            </Reveal>
          </div>
          <Reveal delay={320}>
            <div className="mx-auto mt-12 grid max-w-[1040px] items-end gap-8 px-6 pb-6 md:grid-cols-[1fr_minmax(0,440px)_1fr]">
              <div className="order-2 md:order-1">
                <PatchBox className="mx-auto w-[170px] drop-shadow-[0_18px_20px_rgba(63,57,155,.28)] sm:w-[190px]" />
                <p className="mx-auto mt-3 max-w-[16em] text-[13px] font-medium leading-snug">
                  {t("hero.box")}
                </p>
                <p className="mt-1 text-xs text-muted">{t("hero.caption")}</p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/photos/sternum-hero.webp"
                  alt={t("photo.sternum")}
                  width={1150}
                  height={1438}
                  priority
                  sizes="(max-width: 768px) 92vw, 440px"
                  quality={90}
                  className="mx-auto h-auto w-full max-w-[440px] rounded-[36px] shadow-[0_30px_60px_-24px_rgba(31,27,99,.5)]"
                />
              </div>
              <div className="order-3">
                <Phone
                  name="symptom"
                  alt={t("shot.symptom")}
                  className="mx-auto w-[200px] md:ml-0"
                />
                <p className="mt-3 text-xs text-muted md:text-left">
                  {t("shot.real")}
                </p>
              </div>
            </div>
            <p className="px-6 pb-14 text-xs text-muted">{t("concept")}</p>
          </Reveal>
        </section>

        {/* Jornada da paciente */}
        <section id="journey" className="bg-mist py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <h2 className={`mx-auto max-w-[18em] ${h2}`}>
                  {t("story.title")}
                </h2>
                <p className="mx-auto mt-4 max-w-[34em] text-lg text-muted">
                  {t("story.sub")}
                </p>
              </div>
            </Reveal>
            <ol className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {["st1", "st2", "st3", "st4", "st5"].map((k, i) => (
                <li key={k} className="text-center">
                  <Reveal delay={i * 90}>
                    {i === 0 ? (
                      <Photo
                        name="sternum"
                        alt={t("photo.sternum")}
                        pos="52% 62%"
                        className="mx-auto aspect-[4/5] w-full max-w-[220px] rounded-[26px] shadow-[0_24px_48px_-18px_rgba(31,27,99,.55)]"
                      />
                    ) : (
                      <Phone
                        crop
                        at={i === 2 || i === 4 ? "bottom" : "top"}
                        name={
                          ["", "profile", "symptom", "evolution", "report"][i]
                        }
                        alt={t(`${k}.t`)}
                        className="mx-auto aspect-[4/5] w-full max-w-[220px]"
                      />
                    )}
                    <p className="mt-5 text-[13px] font-bold tracking-[0.14em] text-accent">
                      0{i + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">
                      {t(`${k}.t`)}
                    </h3>
                    <p className="mx-auto mt-1.5 max-w-[16em] text-[15px] leading-relaxed text-muted">
                      {t(`${k}.d`)}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-center text-xs text-muted">
              {t("shot.real")} {t("concept")}
            </p>
          </div>
        </section>

        {/* O problema */}
        <section id="problem" className="py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <Phone
                name="diary"
                alt={t("problem.alt")}
                className="mx-auto w-full max-w-[280px]"
              />
              <p className="mt-4 text-center text-xs text-muted">
                {t("shot.real")}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className={kick}>{t("nav.problem")}</p>
              <h2 className={`mt-3 max-w-[16em] ${h2}`}>
                {t("problem.title")}
              </h2>
              <p className="mt-5 max-w-[38em] text-lg leading-relaxed text-muted">
                {t("problem.sub")}
              </p>
              <dl className="mt-8">
                {["p1", "p2", "p3"].map((k) => (
                  <div key={k} className="mt-6">
                    <dt className="text-xl font-semibold">{t(`${k}.t`)}</dt>
                    <dd className="mt-1 max-w-[36em] text-muted">
                      {t(`${k}.d`)}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 max-w-[38em] border-l-2 border-violet pl-5 text-[17px] leading-relaxed">
                {t("problem.close")}
              </p>
            </Reveal>
          </div>
        </section>

        {/* A solução */}
        <section id="solution" className="bg-mist py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <p className={kick}>{t("nav.solution")}</p>
                <h2 className={`mx-auto mt-3 max-w-[16em] ${h2}`}>
                  {t("sol.title")}
                </h2>
                <p className="mx-auto mt-5 max-w-[38em] text-lg leading-relaxed text-muted">
                  {t("sol.sub")}
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[
                ["c1", "patch"],
                ["c2", "app"],
                ["c3", "panel"],
              ].map(([k, vis], i) => (
                <Reveal key={k} delay={i * 110}>
                  <div className="flex h-full flex-col rounded-[36px] bg-card p-8 transition-transform duration-300 hover:-translate-y-1">
                    <div className="h-[250px] overflow-hidden rounded-3xl bg-mist">
                      {vis === "patch" && (
                        <Photo
                          name="sternum"
                          alt={t("photo.sternum")}
                          pos="55% 68%"
                          className="h-full w-full"
                        />
                      )}
                      {vis === "app" && (
                        <div className="flex h-full justify-center px-6 pt-6">
                          <Phone
                            crop
                            name="diary"
                            alt={t("c2.k")}
                            className="h-[300px] w-[200px]"
                          />
                        </div>
                      )}
                      {vis === "panel" && (
                        <div className="flex h-full justify-center px-6 pt-6">
                          <Phone
                            crop
                            name="evolution-patch"
                            alt={t("c3.k")}
                            className="h-[300px] w-[200px]"
                          />
                        </div>
                      )}
                    </div>
                    <p className={`mt-6 ${kick}`}>{t(`${k}.k`)}</p>
                    <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight">
                      {t(`${k}.t`)}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {t(`${k}.d`)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mx-auto mt-8 max-w-[44em] text-center text-sm italic text-muted">
                {t("sol.note")}
              </p>
              <p className="mx-auto mt-1 text-center text-xs text-muted">
                {t("concept")}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mx-auto mt-14 max-w-3xl text-center">
                <p className="text-[17px] leading-relaxed text-muted">
                  {t("sol.v1")}
                </p>
                <p className="mt-4 text-[17px] leading-relaxed text-muted">
                  {t("sol.v2")}
                </p>
                <p className="mt-8 text-[clamp(22px,3vw,32px)] font-semibold leading-snug tracking-tight">
                  {t("sol.quote")}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Como funciona */}
        <section id="how" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className={`max-w-[15em] ${h2}`}>{t("how.title")}</h2>
              <p className="mt-5 max-w-[36em] text-lg text-muted">
                {t("how.sub")}
              </p>
            </Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {["s1", "s2", "s3"].map((k, i) => (
                <li key={k} className="relative pl-16">
                  <Reveal delay={i * 120}>
                    <span className="absolute -left-16 top-0 grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-violet),var(--color-aqua))] font-bold text-hero">
                      {i + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{t(`${k}.t`)}</h3>
                    <p className="mt-1.5 text-muted">{t(`${k}.d`)}</p>
                    {k === "s2" && (
                      <div
                        role="radiogroup"
                        aria-label={t("demo.label")}
                        className="mt-4 flex max-w-[400px] gap-0.5 rounded-xl bg-mist p-[3px]"
                      >
                        {levels.map((l) => (
                          <button
                            key={l}
                            type="button"
                            role="radio"
                            aria-checked={level === l}
                            onClick={() => setLevel(l)}
                            className={`flex-1 rounded-[9px] px-1 py-2 text-[12px] font-semibold leading-tight transition-colors ${level === l ? tone[l] : "text-muted"}`}
                          >
                            {t(`level.${l}`)}
                          </button>
                        ))}
                      </div>
                    )}
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal delay={160}>
              <div className="mt-16">
                <h3 className="text-xl font-semibold">{t("place.title")}</h3>
                <ul className="mt-6 grid gap-5 sm:grid-cols-3">
                  {(["sternum", "underbust", "back"] as const).map((n) => (
                    <li key={n}>
                      <Photo
                        name={n}
                        alt={t(`photo.${n}`)}
                        pos={n === "back" ? "50% 35%" : "50% 55%"}
                        className="aspect-[4/3] w-full rounded-[28px]"
                      />
                      <p className="mt-3 text-[15px] font-medium">
                        {t(`photo.${n}`)}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted">{t("concept")}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* A ciência */}
        <section id="science" className="bg-mist py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <p className={kick}>{t("sci.kicker")}</p>
                <h2 className={`mx-auto mt-3 max-w-[16em] ${h2}`}>
                  {t("sci.title")}
                </h2>
                <p className="mx-auto mt-5 max-w-[38em] text-lg leading-relaxed text-muted">
                  {t("sci.sub")}
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 lg:grid-cols-6">
              {SCIENCE_CARDS.map((c, i) => (
                <Reveal
                  key={c.id}
                  delay={i * 80}
                  className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
                >
                  <article
                    className={`flex h-full flex-col rounded-[32px] p-8 ${i === 4 ? "border border-violet/40 bg-[linear-gradient(135deg,var(--color-card),var(--color-mist))]" : "bg-card"}`}
                  >
                    <h3 className="text-xl font-semibold leading-snug">
                      {t(`${c.id}.t`)}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">
                      {t(`${c.id}.d`)}
                    </p>
                    <p className="mt-auto pt-5 text-[13px] font-medium leading-snug text-accent">
                      {c.source}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setRefs((v) => !v)}
                aria-expanded={refs}
                aria-controls="refs"
                className={`${primary}`}
              >
                {refs ? t("sci.btn.hide") : `${t("sci.btn")} →`}
              </button>
            </div>
            {refs && (
              <div
                id="refs"
                className="mx-auto mt-8 max-w-3xl rounded-[28px] bg-card p-7 sm:p-9"
              >
                <h3 className="text-lg font-semibold">{t("sci.refs")}</h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-muted">
                  {REFERENCES.map((r, i) => (
                    <li key={i}>
                      {r.text}
                      {r.url && (
                        <>
                          {" "}
                          <a
                            className="break-all text-accent underline"
                            href={r.url}
                            target="_blank"
                            rel="noreferrer"
                          >
                            link
                          </a>
                        </>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            <p className="mx-auto mt-8 max-w-[46em] text-center text-sm leading-relaxed text-muted">
              {t("sci.disc")}
            </p>
          </div>
        </section>

        {/* As evidências */}
        <section id="evidence" className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <p className={kick}>{t("nav.evidence")}</p>
                <h2 className={`mx-auto mt-3 max-w-[16em] ${h2}`}>
                  {t("ev.title")}
                </h2>
                <p className="mx-auto mt-5 max-w-[36em] text-lg text-muted">
                  {t("ev.sub")}
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {["a", "b", "c"].map((k, i) => (
                <Reveal key={k} delay={i * 110}>
                  <div className="h-full rounded-[32px] bg-mist p-9">
                    <p className="bg-[linear-gradient(100deg,var(--color-primary),var(--color-violet))] bg-clip-text text-5xl font-semibold tracking-tight text-transparent">
                      {t(`ev.${k}.n`)}
                    </p>
                    <p className="mt-3 text-[17px] leading-snug">
                      {t(`ev.${k}.t`)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-[44em] text-center text-sm text-muted">
              {t("ev.note")}
            </p>
            <Reveal>
              <p className="mx-auto mt-10 max-w-[36em] text-center text-xl font-medium leading-snug">
                {t("ev.diff")}
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mx-auto mt-14 max-w-3xl rounded-[36px] bg-mist p-8 text-center sm:p-10">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {t("ev.join.t")}
                </h3>
                <p className="mt-2 text-lg text-muted">{t("ev.join.s")}</p>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {(
                    [
                      ["br", SURVEY.br],
                      ["intl", SURVEY.intl],
                    ] as const
                  ).map(([k, url]) => (
                    <figure key={k} className="flex flex-col items-center">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${t(`ev.qr.${k}`)}: ${t("ev.qr.open")}`}
                        >
                          <QRCodeSVG
                            value={url}
                            size={148}
                            marginSize={2}
                            bgColor="#FFFFFF"
                            fgColor="#1B1763"
                            className="rounded-2xl"
                          />
                        </a>
                      ) : (
                        <div className="grid h-[148px] w-[148px] place-items-center rounded-2xl border-2 border-dashed border-line p-3 text-xs text-muted">
                          {t("ev.qr.soon")}
                        </div>
                      )}
                      <figcaption className="mt-3 font-semibold">
                        {t(`ev.qr.${k}`)}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Nossos próximos passos */}
        <section id="next" className="bg-mist py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="text-center">
                <p className={kick}>{t("nav.next")}</p>
                <h2 className={`mx-auto mt-3 max-w-[16em] ${h2}`}>
                  {t("next.title")}
                </h2>
                <p className="mx-auto mt-5 max-w-[34em] text-lg text-muted">
                  {t("next.sub")}
                </p>
              </div>
            </Reveal>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.7fr_1fr]">
              {PHASES.map((ph, pi) => (
                <Reveal key={ph.id} delay={pi * 120}>
                  <div className="h-full rounded-[32px] bg-card p-7">
                    <div className={`h-1.5 rounded-full ${ph.bar}`} />
                    <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em]">
                      {t(`${ph.id}.t`)}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold leading-snug">
                      {t(`${ph.id}.d`)}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{t(`${ph.id}.s`)}</p>
                    <ol
                      className={`mt-6 grid gap-6 ${ph.items.length > 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-1"}`}
                    >
                      {ph.items.map(([m, range, icon]) => (
                        <li key={m} className="text-center">
                          <div
                            className={`mx-auto grid h-14 w-14 place-items-center rounded-full border ${ph.dot} text-foreground`}
                          >
                            <Icon name={icon} />
                          </div>
                          <p className="mt-3 text-[15px] font-semibold leading-snug">
                            {t(m)}
                          </p>
                          <p className="mt-1 text-sm text-muted">
                            {range} {t("next.unit")}
                          </p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted">
              {t("next.foot")} {t("next.cond")}
            </p>
          </div>
        </section>

        {/* A origem do nome */}
        <section
          id="about"
          className="relative bg-[#14125A] py-28 text-center text-white"
        >
          <Image
            src="/moon.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,58,.55),rgba(14,12,58,.88))]" />
          <Reveal className="relative mx-auto max-w-6xl px-6">
            <h2 className={`mx-auto max-w-[15em] ${h2}`}>{t("moon.title")}</h2>
            <p className="mt-4 text-sm font-bold tracking-[0.2em] text-[#C3B5FF]">
              {t("moon.etym")}
            </p>
            <p className="mx-auto mt-3 max-w-[34em] text-xl text-[#E6E2FF]">
              {t("moon.text")}
            </p>
            <p className="mx-auto mt-2 max-w-[34em] text-lg text-[#D6D2F5]">
              {t("moon.tag")}
            </p>
            <div className="mt-8">
              <a href="#purpose" className={`${btn} bg-white text-indigo`}>
                {t("moon.btn")}
              </a>
            </div>
          </Reveal>
        </section>

        <section
          id="purpose"
          className="overflow-hidden bg-[linear-gradient(135deg,var(--color-mist),var(--background))] py-24"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.2fr_.8fr]">
            <Reveal className="min-w-0">
              {logo("block h-14 w-auto dark:hidden")}
              {logo(
                "hidden h-14 w-auto brightness-0 invert opacity-90 dark:block",
                true,
              )}
              <p className={`mt-8 ${kick}`}>{t("pur.kicker")}</p>
              <h2 className={`mt-3 ${h2}`}>{t("pur.title")}</h2>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xl font-semibold text-accent">
                <span>{t("pur.luna")}</span>
                <span aria-hidden="true" className="h-7 w-px bg-line" />
                <span>{t("pur.era")}</span>
              </div>
              <p className="mt-6 max-w-[36em] text-lg leading-relaxed text-muted">
                {t("pur.p1")}
              </p>
              <p className="mt-4 max-w-[36em] text-lg leading-relaxed text-muted">
                {t("pur.p2")}
              </p>
              <p className="mt-8 text-[clamp(22px,3vw,34px)] font-semibold leading-tight tracking-tight">
                {t("moon.tag")}
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div
                className="flex items-center justify-center gap-3 md:flex-col md:gap-5"
                aria-hidden="true"
              >
                {[0.1, 0.3, 0.5, 0.75, 1].map((p) => (
                  <Moon
                    key={p}
                    phase={p}
                    className="h-12 w-12 sm:h-16 sm:w-16 md:h-[76px] md:w-[76px]"
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Nossa próxima conversa */}
        <section id="contact" className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <Reveal>
              <div className="rounded-[40px] bg-[linear-gradient(135deg,#1B1763,#3F399B)] p-9 text-white sm:p-14">
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-[#C3B5FF]">
                  {t("con.kicker")}
                </p>
                <h2 className="mt-4 max-w-[22em] text-[clamp(26px,3.8vw,44px)] font-semibold leading-[1.12] tracking-[-0.02em]">
                  {t("con.title")}
                </h2>
                <div className="mt-6 grid max-w-3xl gap-4 text-[17px] leading-relaxed text-[#E6E2FF]">
                  <p>{t("con.p1")}</p>
                  <p>{t("con.p2")}</p>
                  <p>{t("con.p3")}</p>
                  <p>{t("con.p4")}</p>
                </div>
                <div className="mt-9 flex flex-wrap items-center gap-8">
                  <div>
                    {CONTACT.email ? (
                      <a
                        href={gmail}
                        target="_blank"
                        rel="noreferrer"
                        className={`${btn} bg-white text-indigo`}
                      >
                        {t("con.cta")} →
                      </a>
                    ) : (
                      <p className="text-xl font-semibold">{t("con.cta")}</p>
                    )}
                    {(CONTACT.email || CONTACT.phone) && (
                      <dl className="mt-5 space-y-1 text-[15px] text-[#D6D2F5]">
                        {CONTACT.email && (
                          <div>
                            <dt className="inline font-semibold">
                              {t("con.email")}:{" "}
                            </dt>
                            <dd className="inline">{CONTACT.email}</dd>
                          </div>
                        )}
                        {CONTACT.phone && (
                          <div>
                            <dt className="inline font-semibold">
                              {t("con.phone")}:{" "}
                            </dt>
                            <dd className="inline">{CONTACT_PHONE_LABEL}</dd>
                          </div>
                        )}
                      </dl>
                    )}
                    <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[15px] font-semibold">
                      <a
                        href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcard(CONTACT))}`}
                        download="lunera-contato.vcf"
                        className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                      >
                        {t("con.save")}
                      </a>
                      {CONTACT.email && (
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="underline decoration-white/40 underline-offset-4 hover:decoration-white"
                        >
                          {t("con.mailapp")}
                        </a>
                      )}
                    </p>
                  </div>
                  {(CONTACT.email || CONTACT.phone) && (
                    <figure className="text-center">
                      <QRCodeSVG
                        value={vcard(CONTACT)}
                        size={132}
                        marginSize={2}
                        bgColor="#FFFFFF"
                        fgColor="#1B1763"
                        className="rounded-2xl"
                      />
                      <figcaption className="mt-2 max-w-[12em] text-xs text-[#D6D2F5]">
                        {t("con.qr")}
                      </figcaption>
                    </figure>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-[#07061F] py-12 text-sm text-[#B9B5E6]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6">
          <div className="space-y-3">
            {logo("block h-14 w-auto brightness-0 invert opacity-90", true)}
            <p>{t("footer.copy")}</p>
          </div>
          <span className="text-base font-medium text-[#D6D2F5]">
            {t("hero.sig")}
          </span>
        </div>
      </footer>
    </>
  );
}

"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import Reveal from "./Reveal";

const btn = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition hover:opacity-90 active:scale-[.98]";
const primary = `${btn} bg-[linear-gradient(100deg,var(--color-primary),var(--color-violet))] text-white`;
const h2 = "text-[clamp(30px,4.4vw,52px)] font-semibold leading-[1.08] tracking-[-0.025em]";

// Aparelho com a tela do app (capturas reais do protótipo, em claro e escuro)
function Phone({ name, alt }: { name: string; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[270px] rounded-[40px] border border-line bg-card p-2 shadow-2xl shadow-indigo/25">
      <Image src={`/screens/${name}-light.webp`} alt={alt} width={540} height={1169} className="h-auto w-full rounded-[32px] dark:hidden" />
      <Image src={`/screens/${name}-dark.webp`} alt={alt} width={540} height={1169} className="hidden h-auto w-full rounded-[32px] dark:block" />
    </div>
  );
}

export default function Landing() {
  const { t } = useLang();
  const [note, setNote] = useState(false);
  const [level, setLevel] = useState("moderate");
  const [scrolled, setScrolled] = useState(false);
  const showNote = () => { setNote(true); window.scrollTo({ top: 0, behavior: "smooth" }); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const levels = ["none", "mild", "moderate", "severe"];
  // Texto branco só em fundos com contraste >= 4,5:1
  const tone: Record<string, string> = { none: "bg-card text-foreground", mild: "bg-royal text-white", moderate: "bg-violet text-white", severe: "bg-primary text-white" };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-20 border-b transition-all duration-300 ${scrolled ? "border-line bg-background/75 backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[68px] sm:px-6">
          <a href="#top" aria-label="Lunera Healthcare" className="shrink-0">
            {/* Logo oficial, sem caixa. No modo escuro vira a versão clara (monocromática) */}
            <Image src="/logo.png" alt="Lunera Healthcare" width={900} height={343} priority className="block h-9 w-auto sm:h-11 dark:hidden" />
            <Image src="/logo.png" alt="" aria-hidden="true" width={900} height={343} priority className="hidden h-9 w-auto brightness-0 invert opacity-90 sm:h-11 dark:block" />
          </a>
          <nav className="flex min-w-0 items-center gap-2 text-[15px] font-medium text-muted sm:gap-5">
            <a className="hidden hover:text-accent lg:block" href="#problem">{t("nav.problem")}</a>
            <a className="hidden hover:text-accent lg:block" href="#platform">{t("nav.platform")}</a>
            <a className="hidden hover:text-accent lg:block" href="#how">{t("nav.how")}</a>
            <button type="button" onClick={showNote} className={`${primary} max-sm:hidden whitespace-nowrap !px-5 !py-2.5 !text-sm`}>{t("cta.short")}</button>
            <ThemeToggle />
            <LanguageSwitcher />
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero no estilo de página de produto: título central e a caixa aberta, sem fundo, sobre um brilho suave */}
        <section className="relative overflow-hidden bg-[radial-gradient(70%_55%_at_50%_34%,var(--halo),transparent_72%)] pt-28 text-center md:pt-36">
          <div className="mx-auto max-w-4xl px-6">
            <Reveal><h1 className="text-[clamp(40px,7vw,84px)] font-semibold leading-[1.03] tracking-[-0.035em]">{t("hero.title")}</h1></Reveal>
            <Reveal delay={120}><p className="mx-auto mt-6 max-w-[34em] text-[clamp(18px,2.2vw,22px)] leading-relaxed text-muted">{t("hero.lead")}</p></Reveal>
            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
                <button type="button" onClick={showNote} className={primary}>{t("cta.download")}</button>
                <a href="#how" className="text-base font-semibold text-accent hover:underline">{t("hero.link")} ›</a>
              </div>
              {note && <p className="mx-auto mt-5 max-w-[30em] text-[13px] text-muted" role="status">{t("store.note")}</p>}
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="mx-auto mt-8 max-w-[900px] px-4 pb-20 md:mt-4">
              <Image src="/box-open.webp" alt={t("hero.alt")} width={1599} height={1570} priority
                className="mx-auto h-auto w-full max-w-[760px] drop-shadow-[0_44px_46px_rgba(63,57,155,0.3)] dark:drop-shadow-[0_34px_50px_rgba(0,0,0,0.7)]" />
            </div>
          </Reveal>
        </section>

        <section id="problem" className="py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[.9fr_1.1fr]">
            <Reveal>
              <Image src="/woman-with-patch.jpg" alt={t("problem.alt")} width={760} height={1140}
                className="mx-auto h-auto w-full max-w-[440px] rounded-[36px] shadow-2xl shadow-indigo/30" />
            </Reveal>
            <Reveal delay={140}>
              <h2 className={`max-w-[15em] ${h2}`}>{t("problem.title")}</h2>
              <p className="mt-5 max-w-[36em] text-lg text-muted">{t("problem.sub")}</p>
              <dl className="mt-8">
                {["p1", "p2", "p3"].map((k) => (
                  <div key={k} className="mt-6">
                    <dt className="text-xl font-semibold">{t(`${k}.t`)}</dt>
                    <dd className="mt-1 max-w-[34em] text-muted">{t(`${k}.d`)}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Plataforma: três blocos com as telas reais do app, cortadas na base (como em páginas de produto) */}
        <section id="platform" className="bg-mist py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal><div className="text-center">
              <h2 className={`mx-auto max-w-[16em] ${h2}`}>{t("platform.title")}</h2>
              <p className="mx-auto mt-5 max-w-[36em] text-lg text-muted">{t("platform.sub")}</p>
            </div></Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {[["c1", "today", "alt.today", "c1.t", "c1.d"], ["c2", "checkin", "alt.checkin", "c2.t", "c2.d"], ["c3", "journey", "alt.journey", "tile3.t", "tile3.d"]].map(([k, img, alt, tt, td], i) => (
                <Reveal key={k} delay={i * 110}>
                  <div className="flex h-[600px] flex-col overflow-hidden rounded-[36px] bg-card px-7 pt-10 text-center transition-transform duration-300 hover:-translate-y-1">
                    <h3 className="text-2xl font-semibold tracking-tight">{t(tt)}</h3>
                    <p className="mx-auto mt-2 max-w-[21em] text-[15px] leading-relaxed text-muted">{t(td)}</p>
                    <div className="mt-8 flex-1"><Phone name={img} alt={t(alt)} /></div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}><p className="mt-9 text-center font-medium text-accent">{t("flow")}</p></Reveal>
          </div>
        </section>

        {/* Dados reais da pesquisa da Lunera (42 mulheres de 40 anos ou mais) */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal><div className="text-center">
              <h2 className={`mx-auto max-w-[16em] ${h2}`}>{t("voice.title")}</h2>
              <p className="mx-auto mt-5 max-w-[34em] text-lg text-muted">{t("voice.sub")}</p>
            </div></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[["48%", "voice.a.t"], ["52%", "voice.b.t"], ["60%", "voice.c.t"]].map(([n, k], i) => (
                <Reveal key={k} delay={i * 110}>
                  <div className="h-full rounded-[32px] bg-mist p-9">
                    <p className="bg-[linear-gradient(100deg,var(--color-primary),var(--color-violet))] bg-clip-text text-6xl font-semibold tracking-tight text-transparent">{n}</p>
                    <p className="mt-3 text-[17px] leading-snug">{t(k)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted">{t("voice.note")}</p>
          </div>
        </section>

        <section id="how" className="bg-mist py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className={`max-w-[15em] ${h2}`}>{t("how.title")}</h2>
              <p className="mt-5 max-w-[36em] text-lg text-muted">{t("how.sub")}</p>
            </Reveal>
            <ol className="mt-12 grid gap-10 md:grid-cols-3">
              {["s1", "s2", "s3"].map((k, i) => (
                <li key={k} className="relative pl-16">
                  <Reveal delay={i * 120}>
                    <span className="absolute -left-16 top-0 grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-violet),var(--color-aqua))] font-bold text-hero">{i + 1}</span>
                    <h3 className="text-xl font-semibold">{t(`${k}.t`)}</h3>
                    <p className="mt-1.5 text-muted">{t(`${k}.d`)}</p>
                    {k === "s2" && (
                      <div role="radiogroup" aria-label={t("demo.label")} className="mt-4 flex max-w-[360px] gap-0.5 rounded-xl bg-card p-[3px]">
                        {levels.map((l) => (
                          <button key={l} type="button" role="radio" aria-checked={level === l} onClick={() => setLevel(l)}
                            className={`flex-1 rounded-[9px] px-1 py-2.5 text-[13px] font-semibold transition-colors ${level === l ? tone[l] : "text-muted"}`}>
                            {t(`level.${l}`)}
                          </button>
                        ))}
                      </div>
                    )}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative bg-[#14125A] py-28 text-center text-white">
          <Image src="/moon.jpg" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,12,58,.55),rgba(14,12,58,.88))]" />
          <Reveal className="relative mx-auto max-w-6xl px-6">
            <h2 className={`mx-auto max-w-[15em] ${h2}`}>{t("moon.title")}</h2>
            <p className="mx-auto mt-5 max-w-[34em] text-lg text-[#D6D2F5]">{t("moon.text")}</p>
            <div className="mt-8"><button type="button" onClick={showNote} className={`${btn} bg-white text-indigo`}>{t("cta.download")}</button></div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#07061F] py-11 text-sm text-[#B9B5E6]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6">
          <span>{t("footer.copy")}</span>
          <span>Advancing Women’s Precision Health</span>
        </div>
      </footer>
    </>
  );
}

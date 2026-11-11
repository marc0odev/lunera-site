"""Gera, a partir do Lunera App rodando na web:
  1) as capturas dos mockups do site (public/screens/*.webp, claro e escuro, PT e EN);
  2) as telas em alta resolução para o PowerPoint (PNG, PT e EN);
  3) a gravação do fluxo do App (MP4, no idioma de VIDEO_LANG).
Passos: no projeto do App rode `npx expo export --platform web` e sirva a pasta dist (python -m http.server 8099 dentro de dist).
Depois: pip install playwright pillow && playwright install chromium (e ffmpeg instalado) && python tools/capture_all.py
Variáveis: URL, APP_DIR (pasta do lunera-app), OUT (saída), CHROME (caminho do Chrome, opcional), VIDEO_LANG (padrão en)."""
import os, json, glob, subprocess, datetime
from playwright.sync_api import sync_playwright
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
URL = os.environ.get("URL", "http://localhost:8099/")
APP = os.environ.get("APP_DIR", os.path.join(HERE, "..", "..", "lunera-app"))
OUT = os.environ.get("OUT", os.path.join(HERE, "out"))
SITE = os.path.join(HERE, "..", "public", "screens")
CHROME = os.environ.get("CHROME")
VLANG = os.environ.get("VIDEO_LANG", "en")
for d in (SITE, OUT, os.path.join(OUT, "rec")): os.makedirs(d, exist_ok=True)
T = {l: json.load(open(os.path.join(APP, "src", "i18n", f"{l}.json"), encoding="utf-8")) for l in ("pt", "en")}

def seed():
    """Estado de exemplo só para as capturas: dia 9 de 14, com registros nos 8 dias anteriores e patch sincronizado."""
    start = (datetime.date.today() - datetime.timedelta(days=8)).isoformat()
    rec = {}
    for d in range(1, 9):
        rec[f"{d}|wake"] = {"scores": {"sleep": [3, 4, 3, 3, 2, 3, 2, 2][d - 1]}, "events": {}, "sleepQuality": [2, 1, 2, 3, 3, 2, 4, 3][d - 1], "sleepHours": [5, 5, 6, 6, 7, 6, 7, 7][d - 1], "energy": "", "ids": ["sleep"], "planVersion": 1}
        rec[f"{d}|bed"] = {"scores": {"hotFlashes": [3, 3, 4, 2, 3, 2, 2, 1][d - 1], "memory": [2, 3, 2, 2, 1, 2, 1, 1][d - 1]}, "events": {"hotFlashes": [6, 7, 8, 5, 6, 4, 4, 3][d - 1]}, "sleepQuality": "", "sleepHours": "", "energy": [2, 2, 3, 3, 3, 4, 3, 4][d - 1], "ids": ["hotFlashes", "memory"], "planVersion": 1}
    return {"profile": {"name": "Marina", "age": "49", "skin": 2, "hair": 1, "hairLength": "medium", "eyes": 1, "glasses": False, "tone": 1},
            "plan": {"days": 14, "symptoms": ["sleep", "hotFlashes", "memory"], "custom": "", "mode": "both", "times": {"wake": "07:00", "bed": "22:00", "morning": "08:00", "afternoon": "15:00", "night": "21:00"}, "assign": {}, "channel": "calendar", "startDate": start, "version": 1},
            "records": rec, "consult": {"priorities": ["hotFlashes"], "question": "", "notes": "", "includeIntimate": False, "includeFreeText": False},
            "patch": {"synced": True, "at": 1794300000000, "placement": "upperChest"}, "flags": {"placed": True, "shared": None}, "demoOffset": 0}

def run(b, lang, theme, seeded, shots, site=None, video=False):
    t = T[lang]
    kw = dict(viewport={"width": 390, "height": 844}, device_scale_factor=2)
    if video: kw.update(record_video_dir=os.path.join(OUT, "rec"), record_video_size={"width": 780, "height": 1688})
    ctx = b.new_context(**kw)
    js = f"localStorage.setItem('lunera.theme','{theme}');"
    if seeded: js += f"localStorage.setItem('lunera.v3',{json.dumps(json.dumps(seed()))});"
    ctx.add_init_script(js)
    pg = ctx.new_page(); w = pg.wait_for_timeout
    def shot(name):
        w(1300)
        if not shots and not (site and name in site): return
        f = os.path.join(OUT, "telas", lang, f"{name}.png") if shots else os.path.join(OUT, "tmp.png")
        os.makedirs(os.path.dirname(f), exist_ok=True); pg.screenshot(path=f)
        if site and name in site:
            im = Image.open(f).convert("RGB"); im = im.resize((600, int(im.height * 600 / im.width))); im.save(os.path.join(SITE, f"{site[name]}-{theme}-{lang}.webp"), quality=86)
    def tap(key, **k): pg.get_by_text(t[key], exact=True).first.click(**k)
    def tab(key): pg.get_by_role("tab", name=t[key]).click()
    pg.goto(f"{URL}?lang={lang}")
    if not seeded:  # primeira vez: abertura, início, vamos começar, posição do patch
        w(900); shot("01-abertura-logo"); w(2400); shot("02-abertura-conexao"); tap("open.skip"); shot("03-inicio-primeiro-acesso")
        tap("home.begin"); shot("04-vamos-comecar"); tap("start.go"); shot("05-posicao-do-patch")
        tab("nav.settings"); shot("06-meu-aplicativo"); tap("my.rep"); pg.get_by_label(t["rep.name"]).fill("Marina"); pg.get_by_label(t["rep.hair"] + " 3").click(); shot("07-minha-representacao")
        if video:
            tap("my.save"); w(1800); tap("nav.diary"); w(1200); tap("ob.continue"); w(1500); tap("slot.bed"); w(900); pg.mouse.wheel(0, 330); w(1200)
            pg.get_by_role("button", name=t["area.chest"]).first.click(); w(1000); pg.get_by_role("radio", name=t["scale.3"], exact=True).first.click(); w(700)
            tap("diary.select"); pg.get_by_label("+").first.click(); pg.get_by_label("+").first.click(); w(900); tap("ci.done"); w(900)
            pg.get_by_text(t["diary.save"], exact=True).scroll_into_view_if_needed(); w(600); tap("diary.save"); w(2200)
            tap("nav.evolution"); w(1600); tap("evo.src.example"); w(1200); pg.mouse.wheel(0, 520); w(1500)
            pg.get_by_text(t["patch.sync"], exact=True).scroll_into_view_if_needed(); w(600); tap("patch.sync"); w(2800); pg.mouse.wheel(0, 520); w(1800)
            tab("nav.consult"); w(1500); pg.get_by_text(t["con.review"], exact=True).scroll_into_view_if_needed(); tap("con.review"); w(2200); pg.get_by_text(t["con.prepare"], exact=True).last.click(); w(1800)
            pg.mouse.click(195, 60); w(900); pg.get_by_label(t["nav.3d"]).click(); w(2500); tap("x3.patch"); w(2200); tap("x3.join"); w(1500); tap("x3.separate"); w(1800)
    else:
        w(900); tap("open.skip"); shot("08-inicio")
        tab("nav.diary"); w(900); tap("slot.bed"); w(500); pg.mouse.wheel(0, 300); shot("09-diario-corpo")
        pg.get_by_role("button", name=t["area.chest"]).first.click(); w(700); pg.get_by_role("radio", name=t["scale.2"], exact=True).first.click(); shot("10-diario-sintoma")
        tap("ci.done"); w(500); pg.get_by_text(t["diary.save"], exact=True).scroll_into_view_if_needed(); tap("diary.save"); shot("11-acolhimento")
        tap("nav.evolution"); shot("12-evolucao"); pg.get_by_text(t["evo.cHot"], exact=True).scroll_into_view_if_needed(); pg.mouse.wheel(0, -120); shot("13-evolucao-patch")
        tab("nav.consult"); w(700); pg.get_by_text(t["con.review"], exact=True).scroll_into_view_if_needed(); tap("con.review"); shot("14-consulta-relatorio")
        if theme == "light":
            pg.mouse.click(195, 60); w(900); pg.get_by_label(t["nav.3d"]).click(); shot("15-3d-caixa"); tap("x3.patch"); shot("16-3d-patch")
            tap("x3.close"); w(700); tab("nav.home"); w(600); pg.mouse.wheel(0, 2000); w(500); tab("nav.diary"); w(300)
    ctx.close()

with sync_playwright() as p:
    b = p.chromium.launch(**({"executable_path": CHROME, "args": ["--no-sandbox"]} if CHROME else {}))
    # telas reais do App usadas no site (claro e escuro, PT e EN)
    names = {"07-minha-representacao": "profile", "08-inicio": "home", "09-diario-corpo": "diary", "10-diario-sintoma": "symptom", "12-evolucao": "evolution", "13-evolucao-patch": "evolution-patch", "14-consulta-relatorio": "report", "16-3d-patch": "patch3d"}
    for lang in (() if os.environ.get("ONLY_VIDEO") else ("pt", "en")):
        for theme in ("light", "dark"):
            run(b, lang, theme, False, theme == "light", site=names)
            run(b, lang, theme, True, theme == "light", site=names)
    run(b, VLANG, "light", False, False, video=True)
    b.close()

webm = sorted(glob.glob(os.path.join(OUT, "rec", "*.webm")), key=os.path.getmtime)[-1]
subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", webm, "-vf", "crop=iw/2:ih/2:0:0,scale=780:-2:flags=lanczos", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "21", "-movflags", "+faststart", os.path.join(OUT, f"lunera-app-demo-{VLANG}.mp4")], check=True)
print("ok")

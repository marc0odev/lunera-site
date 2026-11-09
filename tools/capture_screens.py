"""Gera as capturas do app (claro e escuro) usadas nos mockups do site (public/screens/*.webp).
Passos: no projeto do app rode `npx expo export --platform web` e sirva a pasta dist (ex.: python -m http.server 8099 dentro de dist).
Depois: pip install playwright pillow && playwright install chromium && python tools/capture_screens.py"""
from playwright.sync_api import sync_playwright
from PIL import Image
import os

URL = "http://localhost:8099/"
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "screens")
INIT = """
const d=new Date().toISOString().slice(0,10);
localStorage.setItem('lunera.onboarded','1'); localStorage.setItem('lunera.placement','upperChest'); localStorage.setItem('lunera.theme','%s');
const v={values:{brainFog:'severe',mood:'moderate',sleep:'severe',hotFlashes:'none',nightSweats:'none',palpitations:'none',fatigue:'none',joints:'none',period:'none'},count:0,done:{mind:true,sleep:true},saved:false};
localStorage.setItem('lunera.checkin.'+d+'.morning',JSON.stringify(v)); localStorage.setItem('lunera.checkin.'+d+'.evening',JSON.stringify(v));
"""
os.makedirs(OUT, exist_ok=True)
with sync_playwright() as p:
    b = p.chromium.launch()
    for mode in ("light", "dark"):
        ctx = b.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2)
        ctx.add_init_script(INIT % mode)
        pg = ctx.new_page(); pg.goto(URL); pg.wait_for_timeout(3000)
        def shot(name):
            pg.wait_for_timeout(1800); tmp = f"/tmp/{name}_{mode}.png"; pg.screenshot(path=tmp)
            im = Image.open(tmp).convert("RGB"); im = im.resize((540, int(im.height * 540 / im.width)))
            im.save(os.path.join(OUT, f"{name}-{mode}.webp"), quality=84)
        shot("today")
        pg.get_by_text("Check-in", exact=True).last.click(); shot("checkin")
        pg.get_by_text("Journey", exact=True).last.click(); shot("journey")
        ctx.close()
    b.close()

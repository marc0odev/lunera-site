"""Remove o fundo da foto da caixa aberta (gera PNG/WebP com transparência).
Uso: pip install "rembg[cpu]" onnxruntime pillow && python tools/remove_bg.py caminho/box_open.jpg"""
import sys
from PIL import Image
from rembg import remove, new_session

src = sys.argv[1]
img = Image.open(src).convert("RGB")
out = remove(img, session=new_session("isnet-general-use"), alpha_matting=True,
             alpha_matting_foreground_threshold=240, alpha_matting_background_threshold=15, alpha_matting_erode_size=8)
l, t, r, b = out.getbbox()
out = out.crop((max(l - 24, 0), max(t - 24, 0), min(r + 24, out.width), min(b + 24, out.height)))
out.save("box-open.png", optimize=True)          # usar no app (assets/box-open.png)
site = out.copy(); site.thumbnail((1700, 1700)); site.save("box-open.webp", quality=90, method=6)  # usar no site (public/box-open.webp)
print("ok", out.size)

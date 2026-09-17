import os, re, json, base64, io, sys, time
from PIL import Image

BASE = os.path.expanduser("~/mnt/Downloads--Portfolio/site")
DIST = os.path.join(BASE, "dist")
PUBLIC = os.path.join(BASE, "public")

SLUGS = ["ui-design","bento-recipe","game-find-me","game-jump","kagu-page","ketnoi",
         "lucky-money","matching-app","offshore","tiktok-camp","top-member-page",
         "trust-group","waveland","yoseka"]
LOCALES = ["en","jp","vi"]

asset_index = {}   # path -> index into ASSETS
ASSETS = []         # list of data-uri strings
t0 = time.time()

def asset_token(path):
    if path in asset_index:
        return "@@%d@@" % asset_index[path]
    local_path = os.path.join(PUBLIC, path.lstrip("/"))
    if not os.path.exists(local_path):
        return None
    size = os.path.getsize(local_path)
    ext = os.path.splitext(local_path)[1].lower()
    if ext in (".webp", ".png", ".jpg", ".jpeg") and size > 60000:
        try:
            im = Image.open(local_path)
            if im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGBA")
            max_dim = 800
            w, h = im.size
            if max(w, h) > max_dim:
                scale = max_dim / max(w, h)
                im = im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.BILINEAR)
            buf = io.BytesIO()
            im.save(buf, format="WEBP", quality=62, method=3)
            data = buf.getvalue()
            mime = "image/webp"
        except Exception:
            with open(local_path, "rb") as f:
                data = f.read()
            mime = "image/png" if ext == ".png" else "image/webp"
    else:
        with open(local_path, "rb") as f:
            data = f.read()
        mime = "image/png" if ext == ".png" else ("image/webp" if ext == ".webp" else "image/jpeg")
    uri = "data:%s;base64,%s" % (mime, base64.b64encode(data).decode())
    idx = len(ASSETS)
    ASSETS.append(uri)
    asset_index[path] = idx
    print("  asset[%d] %s (%d -> %d bytes) t=%.1fs" % (idx, path, size, len(data), time.time() - t0))
    sys.stdout.flush()
    return "@@%d@@" % idx

ASSET_RE = re.compile(r'(["\'(])(/assets/[^"\')\s]+)')

def tokenize_assets(html):
    def repl(m):
        quote, path = m.group(1), m.group(2)
        tok = asset_token(path)
        if tok is None:
            return m.group(0)
        return quote + tok
    return ASSET_RE.sub(repl, html)

LINK_RE = re.compile(r'href="/(en|jp|vi)/?([\w-]*)"')

def hashify_links(html):
    def repl(m):
        loc, slug = m.group(1), m.group(2)
        if slug == "":
            slug = "index"
        return 'href="#%s/%s"' % (loc, slug)
    return LINK_RE.sub(repl, html)

pages = {}
for loc in LOCALES:
    for slug in SLUGS:
        p = os.path.join(DIST, loc, slug, "index.html")
        with open(p, encoding="utf-8") as f:
            html = f.read()
        title_m = re.search(r"<title>(.*?)</title>", html, re.S)
        title = title_m.group(1) if title_m else slug
        body_m = re.search(r"<body[^>]*>(.*)</body>", html, re.S)
        body = body_m.group(1) if body_m else html
        body = hashify_links(body)
        body = tokenize_assets(body)
        pages["%s/%s" % (loc, slug)] = {"title": title, "html": body}

print("pages:", len(pages))
total_html_chars = sum(len(v["html"]) for v in pages.values())
total_asset_chars = sum(len(a) for a in ASSETS)
print("total html (tokenized) chars:", total_html_chars)
print("unique assets:", len(ASSETS), "total asset chars:", total_asset_chars)

out = {"pages": pages, "assets": ASSETS}
out_path = os.path.join(BASE, "preview-pages.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(out, f)
print("wrote", out_path, os.path.getsize(out_path), "bytes", "total t=%.1fs" % (time.time() - t0))

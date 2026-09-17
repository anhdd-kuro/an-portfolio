import os, re, json, base64, io
from PIL import Image

BASE = os.path.expanduser("~/mnt/Downloads--Portfolio/site")
DIST = os.path.join(BASE, "dist")
PUBLIC = os.path.join(BASE, "public")

SLUGS = ["ui-design","bento-recipe","game-find-me","game-jump","kagu-page","ketnoi",
         "lucky-money","matching-app","offshore","tiktok-camp","top-member-page",
         "trust-group","waveland","yoseka"]
LOCALES = ["en","jp","vi"]

asset_cache = {}

def load_asset_data_uri(path):
    if path in asset_cache:
        return asset_cache[path]
    local_path = os.path.join(PUBLIC, path.lstrip("/"))
    if not os.path.exists(local_path):
        asset_cache[path] = None
        return None
    ext = os.path.splitext(local_path)[1].lower()
    if ext in (".webp", ".png", ".jpg", ".jpeg"):
        try:
            im = Image.open(local_path)
            if im.mode not in ("RGB", "RGBA"):
                im = im.convert("RGBA")
            max_dim = 1000
            w, h = im.size
            if max(w, h) > max_dim:
                scale = max_dim / max(w, h)
                im = im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
            buf = io.BytesIO()
            im.save(buf, format="WEBP", quality=70, method=6)
            data = buf.getvalue()
            mime = "image/webp"
        except Exception:
            with open(local_path, "rb") as f:
                data = f.read()
            mime = "image/png" if ext == ".png" else "image/webp"
    else:
        with open(local_path, "rb") as f:
            data = f.read()
        mime = "application/octet-stream"
    uri = "data:%s;base64,%s" % (mime, base64.b64encode(data).decode())
    asset_cache[path] = uri
    return uri

ASSET_RE = re.compile(r'(["\'(])(/assets/[^"\')\s]+)')

def replace_assets(html):
    def repl(m):
        quote, path = m.group(1), m.group(2)
        uri = load_asset_data_uri(path)
        if uri is None:
            return m.group(0)
        return quote + uri
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
        body = replace_assets(body)
        pages["%s/%s" % (loc, slug)] = {"title": title, "html": body}

print("pages:", len(pages))
total_chars = sum(len(v["html"]) for v in pages.values())
print("total html chars:", total_chars)
print("unique assets inlined:", len([v for v in asset_cache.values() if v]))
print("missing assets:", [k for k, v in asset_cache.items() if v is None])

out_path = os.path.join(BASE, "preview-pages.json")
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(pages, f)
print("wrote", out_path, os.path.getsize(out_path), "bytes")

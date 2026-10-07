# Ordflow Help Center

Interactive user guide for [Ordflow](https://app.ordflow.com), built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and published to GitHub Pages.

## Preview locally

```bash
pip install -r requirements.txt
mkdocs serve
```

Then open http://127.0.0.1:8000.

## Where things live

| What | Where |
|---|---|
| Menu / page order | `mkdocs.yml` → `nav` |
| Pages | `docs/**/*.md` (plain Markdown) |
| Screenshots | `docs/assets/img/` |
| "What do I need to do?" wizard questions | `docs/javascripts/service-finder.js` → `STEPS` |
| Styling | `docs/stylesheets/extra.css` |

Anything still missing is marked with a **"To be completed"** box on the page.

## Adding a clickable screenshot

```html
<div class="hotspot-figure" markdown>
![What the screen shows](../assets/img/my-screen.png)
<button class="hotspot" style="left:20%;top:30%" data-tip="Click New order">1</button>
</div>
```

`left` and `top` are percentages of the image's width and height (where the marker centre sits).

## Publishing

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).

One-time setup:

1. In GitHub, go to **Settings → Pages → Source** and choose **GitHub Actions**.
2. Optional custom domain: add a DNS `CNAME` record `help.ordflow.com → 0s1k.github.io`, then set the domain under **Settings → Pages**.

# 🚀 ANLEITUNG — celep.ai Update (Version 1.1)

## Was wurde verbessert?

| # | Änderung | Effekt |
|---|---|---|
| 1 | Portrait nicht mehr im Code eingebettet, sondern als Datei | Startseite ~10× kleiner (20 KB statt ~200 KB) → deutlich schneller |
| 2 | **Mobiles Menü (Hamburger)** | Handy-Besucher können endlich navigieren |
| 3 | Schriften **lokal** statt von Google geladen | Schneller + DSGVO-sicher (keine Abmahngefahr mehr) |
| 4 | **Social-Media-Vorschau** (Open Graph) | Beim Teilen auf LinkedIn/WhatsApp erscheint Bild + Beschreibung |
| 5 | Inhalte bleiben sichtbar, auch wenn JavaScript blockiert ist | Robustheit + SEO |
| 6 | Hero-Animation pausiert außerhalb des Sichtfelds | Schont Akku auf Handys |
| 7 | Eigene **404-Seite** im Site-Design + korrigierte Cloudflare-Config | Besseres SEO (keine Homepage-Duplikate mehr) |
| 8 | **Favicon**, robots.txt, Sitemap, Theme-Color | Professioneller Feinschliff |
| 9 | Datenschutzerklärung §3 angepasst (Fonts jetzt lokal) | Rechtlich korrekt |

---

## ⚠️ SCHRITT 0 — Drei Bilder vorbereiten (WICHTIG, sonst fehlen Fotos!)

Das Portrait steckte bisher im Code. Jetzt braucht die Seite **3 Bilddateien**
von dir (dein Original-Foto hast du ja auf dem Computer):

| Dateiname | Format | Empfehlung |
|---|---|---|
| `portrait.jpg` | quadratisch, ca. 800×800 px | Dein Portrait-Foto |
| `avatar.jpg` | quadratisch, ca. 200×200 px | Gleiches Foto, kleiner — notfalls dasselbe Bild nochmal |
| `og.jpg` | Querformat, **1200×630 px** | Vorschaubild fürs Teilen. Notfalls: Portrait nehmen und oben/unten beschneiden |

💡 Zuschneiden geht kostenlos mit: Windows-Fotos-App ("Bearbeiten → Zuschneiden"),
macOS Vorschau, oder online z. B. squoosh.app (komprimiert gleich mit — Ziel: unter 200 KB pro Bild).

---

## SCHRITT 1 — Dateien zu GitHub hochladen (Weg A, im Browser)

1. Entpacke die ZIP-Datei `celep-ai-update.zip` auf deinem Computer.
2. Lege deine 3 Bilder aus Schritt 0 in den entpackten Ordner unter
   `public/images/` (Ordner ggf. neu anlegen).
3. Öffne dein Repository: `github.com/coldclarity/celep-ai`
4. Klicke oben rechts auf **„Add file" → „Upload files"**.
5. **Ziehe per Drag & Drop den gesamten Inhalt** des entpackten Ordners
   in das Browserfenster (in Chrome/Edge kannst du ganze Ordner ziehen —
   die Ordnerstruktur `src/pages/...` und `public/images/...` bleibt erhalten).
6. Unten bei „Commit changes": kurze Beschreibung eintragen,
   z. B. `Update v1.1: Performance, Mobile-Menü, SEO` → **„Commit changes"** klicken.
7. GitHub fragt ggf., ob bestehende Dateien überschrieben werden sollen → **Ja**.

> Diese Dateien werden ERSETZT: `package.json`, `package-lock.json`,
> `astro.config.mjs`, `wrangler.toml`, `src/pages/index.astro`,
> `src/pages/impressum.astro`, `src/pages/datenschutz.astro`
>
> Diese Dateien sind NEU: `src/pages/404.astro`, `public/robots.txt`,
> `public/favicon.svg`, `public/images/` (deine 3 Bilder)

---

## SCHRITT 2 — Deployment

**Falls die Cloudflare-Git-Integration aktiv ist:** Nichts tun — Cloudflare
baut nach dem Commit automatisch. Nach 1–2 Minuten ist celep.ai aktualisiert.

**Falls nicht (Weg B, lokal):**
```bash
git pull
npm install
npm run build
npx wrangler deploy
```

---

## SCHRITT 3 — Erfolgskontrolle (2 Minuten)

1. **celep.ai** öffnen → Portrait sichtbar? Favicon (grünes C) im Browser-Tab?
2. **Handy** (oder Browserfenster schmal ziehen): Erscheint oben rechts das
   ☰-Menü? Öffnet/schließt es sich?
3. **celep.ai/gibtsnicht** aufrufen → erscheint die neue 404-Seite?
4. **Teilen-Vorschau testen:** auf `opengraph.xyz` deine URL eingeben →
   Bild + Titel + Beschreibung sollten erscheinen.
   (Hinweis: LinkedIn/WhatsApp cachen alte Vorschauen einige Tage.)

---

## Bei Problemen

- **Build schlägt bei Cloudflare fehl?** Prüfe, ob `package-lock.json`
  mit hochgeladen wurde (die neue Version aus dem ZIP — sie enthält die
  neuen Schrift-Pakete).
- **Bilder fehlen auf der Seite?** Prüfe auf GitHub, ob sie wirklich unter
  `public/images/portrait.jpg` (klein geschrieben!) liegen.
- **Schrift sieht anders aus?** Einmal hart neu laden (Strg+Shift+R).

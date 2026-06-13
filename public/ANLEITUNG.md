# 🔧 celep.ai — Korrektur-Update (Version 1.2)

## Was war das Problem?

Beim letzten Mal sind nur die **neuen** Dateien (Magazin, 404-Seite, Favicon) auf
GitHub gelandet — die **bestehenden** Dateien wurden aber NICHT ersetzt. Dadurch:

- Das Portrait war kaputt (Bildplatzhalter mit „?").
- Die Schriften kamen weiter von Google (DSGVO-Risiko).
- Das **Magazin fehlte im Menü**.
- Die 404-Seite hätte den Build sogar zum Absturz bringen können
  (sie braucht Schrift-Pakete, die noch nicht installiert waren).

Dieses Update bringt **alle** Dateien in einen sauberen, zusammenpassenden Zustand.
Es wurde lokal gebaut und getestet — der Build läuft fehlerfrei durch. ✅

---

## ⚠️ SCHRITT 0 — Drei Bilder bereitlegen (sonst fehlen Fotos!)

Lege diese 3 Dateien in den Ordner `public/images/`:

| Dateiname | Format | Was |
|---|---|---|
| `portrait.jpg` | quadratisch, ~800×800 px | Dein Portrait (Haltung-Sektion) |
| `avatar.jpg` | quadratisch, ~200×200 px | Kleines Portrait (Kontakt-Sektion) |
| `og.jpg` | Querformat, **1200×630 px** | Teilen-Vorschau — das fertige Bild aus dem Chat |

💡 Kostenlos zuschneiden/komprimieren: **squoosh.app** (Ziel: unter 200 KB pro Bild).

---

## SCHRITT 1 — Auf GitHub hochladen

1. ZIP `celep-ai-update-v1.2.zip` auf dem Computer entpacken.
2. Deine 3 Bilder aus Schritt 0 in `public/images/` legen.
3. Repository öffnen: `github.com/coldclarity/celep-ai`
4. Oben rechts **„Add file" → „Upload files"**.
5. **Gesamten Inhalt** des entpackten Ordners per Drag & Drop ins Browserfenster ziehen.
6. Unten **„Commit changes"** — z. B. `Update v1.2: Magazin im Menü, Portrait, lokale Fonts`.
7. Wenn GitHub fragt, ob Dateien überschrieben werden sollen → **Ja**.

> ERSETZT werden u. a.: `index.astro`, `magazin.astro`, `datenschutz.astro`,
> `impressum.astro`, `404.astro`, `package.json`, `package-lock.json`,
> `astro.config.mjs`, `wrangler.toml`

---

## SCHRITT 2 — Erfolgskontrolle (nach dem automatischen Deploy)

1. **celep.ai** öffnen → Portrait sichtbar? Favicon im Tab?
2. Oben im Menü steht jetzt **„Magazin"** → draufklicken → Magazin-Seite erscheint?
3. **Handy** (oder Fenster schmal ziehen): ☰-Menü erscheint, lässt sich öffnen,
   und „Magazin" ist drin?
4. **celep.ai/gibtsnicht** aufrufen → eigene 404-Seite erscheint?
5. **opengraph.xyz** mit deiner URL testen → Bild + Titel erscheinen.

---

## Was wurde alles korrigiert?

| Bereich | Vorher | Jetzt |
|---|---|---|
| Magazin im Menü | fehlte | in Desktop- & Handy-Menü + Projekte + Footer |
| Portrait | Base64 im Code / kaputt | externe Datei, schnell ladend |
| Schriften | von Google (DSGVO-Risiko) | lokal gebündelt, keine Google-Verbindung |
| Teilen-Vorschau | keine | Open Graph + Twitter Cards mit Bild |
| Handy-Navigation | keine | Hamburger-Menü |
| Ohne JavaScript | Texte unsichtbar | Inhalte bleiben sichtbar |
| Hero-Animation | lief immer | pausiert außerhalb des Sichtfelds (Akku) |
| 404 + Cloudflare | hätte Build brechen können | sauber, eigene 404-Seite |
| Datenschutz §3 | nannte Google Fonts | „lokal eingebunden, keine Dritt-Server" |

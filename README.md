# celep.ai — Persönliche Website Burak Celep

Astro-Site, gehostet als Cloudflare Worker. Live: https://celep.ai

## Struktur
```
src/pages/index.astro        → Startseite (Hero, Haltung, Themen, Projekte, Kontakt)
src/pages/impressum.astro    → celep.ai/impressum
src/pages/datenschutz.astro  → celep.ai/datenschutz
astro.config.mjs             → Astro-Konfiguration
wrangler.toml                → Cloudflare-Worker-Konfiguration
package.json / -lock.json    → Abhängigkeiten
```

## ⚠️ Vor dem Livegang
- [ ] In `impressum.astro` und `datenschutz.astro`: Platzhalter `[STRASSE UND HAUSNUMMER]`
      und `[PLZ]` durch die echte ladungsfähige Anschrift ersetzen (§5 DDG Pflicht)

## Deployment-Wege

### A) GitHub Web (wie bisher)
Datei in GitHub bearbeiten/hochladen → Commit → Cloudflare baut automatisch
(falls Git-Integration verbunden), sonst Weg B.

### B) Lokal mit VS Code (empfohlen für kleine Korrekturen)
```bash
git clone https://github.com/coldclarity/celep-ai.git
cd celep-ai
npm install          # einmalig
npx astro dev        # Live-Vorschau auf localhost:4321
npm run build        # Produktions-Build nach ./dist
npx wrangler deploy  # Veröffentlichen (einmalig: npx wrangler login)
```

### Cloudflare Git-Integration (Workers Builds)
Workers & Pages → celep-ai → Einstellungen → Build:
- Build-Befehl: `npm run build`
- Deploy-Befehl: `npx wrangler deploy`
Dann deployt jeder GitHub-Commit automatisch.

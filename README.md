# Celep.ai — Website

Astro-Projekt für Deployment auf Webflow Cloud (oder jedem anderen Host).

## Lokal starten
```
npm install
npm run dev
```

## Deployment auf Webflow Cloud
1. Neues GitHub-Repository erstellen (z. B. `celep-ai`) und diese Dateien pushen.
2. In Webflow: **Neue App → Deploy in Webflow Cloud → Importiere ein GitHub-Repository**.
3. Repository `celep-ai` auswählen → Framework **Astro** wird erkannt.
4. Branch (main) und Mount-Pfad wählen. Bei einem Unterpfad (z. B. /app)
   in `astro.config.mjs` die `base`-Option setzen (siehe Kommentar dort).
5. Deploy — jeder weitere Push auf main deployt automatisch.

## Alternative: GitHub Pages
Die Datei `src/pages/index.astro` ist ein vollständiges HTML-Dokument.
Für GitHub Pages genügt es, sie als `index.html` in ein Repo zu legen
und Pages in den Repo-Einstellungen zu aktivieren.

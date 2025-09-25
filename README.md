# Component Library

Dieses Projekt ist eine moderne React-Komponentenbibliothek, entwickelt mit TypeScript und Vite. Ziel ist es, wiederverwendbare, gut dokumentierte UI-Komponenten für verschiedene Anwendungen bereitzustellen.

## Features

-   ⚡️ Schnelles Development mit Vite
-   🧩 Modular aufgebaute React-Komponenten
-   🛡️ TypeScript für Typensicherheit
-   🎨 Eigene Styles und Assets
-   🧪 Storybook-Support für Komponenten-Dokumentation und Tests
-   ✅ ESLint & Prettier für Code-Qualität

## Projektstruktur

```
src/
  components/
    Button/
      Button.tsx
      button.css
      Button.stories.ts
      index.ts
    AnotherComponent/
      File1.tsx
      File2.css
      File3.stories.ts
      index.ts
  assets/
    icons/
    images/
    ...
```

## Installation

```bash
npm install
```

## Entwicklung starten

```bash
npm run dev
```

## Komponenten testen & dokumentieren

Storybook ist integriert, um Komponenten zu testen und zu dokumentieren.

```bash
npm run storybook
```

## Build

```bash
npm run build
```

## Linting

```bash
npm run lint
```

## Import der Komponenten-Bibliothek

### Lokales Testen der Komponente in einem anderen oder selben Projekt

1. In der Komponente-Bibliothek:
   Registrieren der Komponenten-Bibliothek im globalen Node-Modul-Verzeichnis per Symlink

```bash
npm link
```

2. In dem anderen (oder selben) Projekt:
   Verknüpfen der Komponenten-Bibliothek mit dem lokalen Projekt

```bash
cd ../anderes-oder-selbes-projekt

npm link @sascha-nabrotzky/component-library
```

3. In dem anderen oder selben Projekt:
   Importieren der Komponenten und Styles z.B. in App.tsx

```tsx
import { Button } from '@sascha-nabrotzky/component-library';

import '@sascha-nabrotzky/component-library/dist/component-library.css';
```

In einer CSS-Datei z.B. in App.css

```css
@import '@sascha-nabrotzky/component-library/dist/component-library.css';
```

## Publish

1. Version in `package.json` anpassen

```bash
npm version patch/minor/major
```

2. Commit & Push

```bash
git add package.json
git commit -m "Version der component-library erhöht"
```

```bash
git push origin feature/MWS-3622-audit-app-component-library-anbinden
```

3. Veröffentlichen:
   Testlauf mit

```bash
npm publish --dry-run
```

Richtiger Publish mit

```bash
npm publish
```

## Konfiguration (eigene Notizen)

### CSS-Import

Das exports-Feld in der package.json steuert, welche Dateien und Pfade beim Importieren deines Pakets von außen verfügbar sind. Es legt fest, welche Module, Skripte oder Assets (wie CSS) Konsumenten über verschiedene Import-Pfade nutzen können. Damit kannst du z. B. steuern, ob jemand

```tsx
import ... from "@sascha-nabrotzky/component-library"
```

oder

```tsx
import ... from "@sascha-nabrotzky/component-library/dist/component-library.css"
```

machen darf.

Das Feld "styles" ist kein offizieller Standard von npm, sondern wird von einigen Tools (z. B. Styleguidist, Storybook, manchmal auch Build-Tools) genutzt, um die Haupt-CSS-Datei eines Pakets zu kennzeichnen. Es sorgt aber nicht dafür, dass die CSS automatisch im Browser geladen wird – dafür ist ein expliziter Import nötig.

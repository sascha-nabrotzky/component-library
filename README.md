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

```bash
npm publish --dry-run
npm publish
```

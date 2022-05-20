<h1 align="center">
  <img width="300" src="./../assets/logo-light-mode.png#gh-light-mode-only" alt="Mirrorful">
  <img width="300" src="./../assets/logo-dark-mode.png#gh-dark-mode-only" alt="Mirrorful">
</h1>
<p align="center">
  <p align="center">Erstellen Sie die Bausteine für Ihre Anwendung mit einem einfachen und Open-Source-Designsystem.</p>
</p>

<h4 align="center">
  <a href="https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA">Slack</a> |
  <a href="https://mirrorful.com/">Website</a> |
  <a href="https://www.npmjs.com/package/mirrorful">NPM Package</a> |
</h4>

<h4 align="center">
  <a href="https://github.com/Mirrorful/mirrorful/blob/main/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Mirrorful is released under the MIT license." />
  </a>
  <a href="https://github.com/">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs welcome!" />
  </a>
  <a href="https://github.com/Infisical/infisical/issues">
    <img src="https://img.shields.io/github/commit-activity/m/Mirrorful/mirrorful" alt="git commit activity" />
  </a>
  <a href="https://www.npmjs.com/package/mirrorful">
    <img src="https://img.shields.io/badge/Downloads-1k-orange" alt="Mirrorful downloads" />
  </a>
  <a href="https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA">
    <img src="https://img.shields.io/badge/chat-on%20Slack-blueviolet" alt="Slack community channel" />
  </a>
  <a href="https://twitter.com/mirrorful">
    <img src="https://img.shields.io/twitter/follow/mirrorful?label=Follow" alt="Mirrorful Twitter" />
  </a>
</h4>

<img src="./../assets/Asset.png" width="100%" alt="Mirrorful Dashboard" />

**[Mirrorful](https://mirrorful.com)** ist ein einfaches, Open-Source-Designsystem. Installieren Sie Mirrorful, um Farben und andere Design-Token für Ihr Projekt zu generieren. Importieren Sie diese Tokens dann direkt in Ihre App als CSS-Variablen oder JSON. Nehmen Sie sich heute 5 Minuten Zeit und gestalten Sie für Langlebigkeit und Skalierbarkeit.

Erstellen Sie die Bausteine für eine schnelle Frontend-Entwicklung!

- **Starte neue Projekte mit einer Single Source of Truth**
- **Ändere visuell dein Theme**
- **Generiere Farben**
- 🔜 **Theme-Vorlagen**
- 🔜 **Lightweight Headless Komponenten Bibliothek**
- 🔜 **Eslint-Regeln**
- 🔜 **Teile Tokens zwischen Projekten**
- 🔜 **Figma-Integration**

Und mehr...

## 🎨 Warum sollte ich Mirrorful nutzen?

Designsysteme sind die Bausteine Ihrer App, aber viele Projekte setzen sie erst ein, wenn es schon zu spät ist, da sie schwer richtig einzurichten sind. Mit Mirrorful können Sie ein grundlegendes Designsystem in wenigen Minuten einrichten und gleichzeitig Flexibilität für spätere Anpassungen bewahren. Es ist leicht und denkbar einfach.

Wir haben es uns zur Aufgabe gemacht, Ihr Projekt so schön wie möglich zu gestalten. Die Messlatte für hochwertiges Design wird immer höher gelegt. Wir möchten allen dabei helfen, neue (und bestehende!) Projekte mit einfachen Designmerkmalen zu versehen.

Einfache Designsysteme beschleunigen auch die Entwicklung - selbst bei Projekten im Frühstadium! Einem Bericht zufolge ist es 47 % schneller, ein einfaches Online-Formular mit einem Designsystem zu erstellen. Ein Designsystem ist nützlich für Ingenieure, Designer und vor allem für Ihre Kunden, damit es nicht für jede Schaltfläche in Ihrer App eine zufällige Farbe gibt.

## 🚀 Los geht's

Mirrorful ist ein NPM-Paket, das als devDependency installiert werden sollte.

```bash
npm install mirrorful -D
```

oder

```bash
yarn add mirrorful --dev
```

## ✨ Nutzung

Die folgenden Befehle starten einen lokalen Editor unter `localhost:5050`.

```
yarn run mirrorful
```

or

```
npx mirrorful
```

## 💿 Formate exportieren

Nachdem Sie Ihr Theme im Editor konfiguriert haben, können Sie es exportieren, um es in Ihrer Anwendung zu verwenden.

Wir exportieren derzeit in folgende Dateitformate: `.js`, `.ts`, `.css`, `.scss`, `.json`

Sie können dann entweder Ihre neuen Token als CSS-Variablen oder JavaScript-Konstanten verwenden!

**Verwenden von CSS-Variablen**

Beispiel:

```css
.primary-button {
  background-color: var(--color-primary);
}

.primary-button:hover {
  background-color: var(--color-primary-hover);
}
```

**JavaScript-Konstanten verwenden**

Beispiel:

```javascript
<button backgroundColor={{ Tokens.primary.base }}>Click here</button>
```

## 🤝 Agnostische Komponentenbibliothek

Wir bemühen uns, unabhängig von Komponentenbibliotheken zu sein. Ganz gleich, ob Sie Material UI, Chakra UI, Tailwind, Ant Design oder sogar Ihre eigene Bibliothek verwenden, Mirrorful fügt sich nahtlos ein.

⚠️ `create-react-app` warnt möglicherweise, dass Sie versuchen, von außerhalb des `src`-Verzeichnisses zu importieren. Wir arbeiten an einer langfristigen Lösung, aber im Moment würden wir empfehl
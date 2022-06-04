<h1 align="center">
  <img width="300" src="./../assets/logo-light-mode.png#gh-light-mode-only" alt="Mirrorful">
  <img width="300" src="./../assets/logo-dark-mode.png#gh-dark-mode-only" alt="Mirrorful">
</h1>
<p align="center">
  <p align="center">Skapa byggstenarna för din app med enkel och öppen källkods-designsystem-infrastruktur.</p>
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

**[Mirrorful](https://mirrorful.com)** är en enkel och öppen källkods-designsystem-infrastruktur. Installera Mirrorful för att generera färger
och andra design tokens för ditt projekt. Sedan, importera dessa token direkt in till din app som CSS variabler eller JSON. Tar 5 minuter per
dag, designa i skala för evigt.

Skapa byggstenarna för snabb front-end utveckling!

- **Påbörja nya projekt med en sanningskälla**
- **Modifiera ditt tema visuellt**
- **Generera färger**
- 🔜 **Tema Mallar**
- 🔜 **Lättviktig bibliotek av huvudlösa komponenter**
- 🔜 **Eslint regler**
- 🔜 **Sprid tokens över projekt**
- 🔜 **Figma integration**

och mer...

## 🎨 Varför ska jag använda Mirrorful?

Designsystem är grundstenarna i din app, men många projekt tar inte upp dem förrän det är för sent eftersom de är svåra att sätta upp korrekt.
Med Mirrorful kan du sätta upp ett grundläggande designsystem på några minuter samtidigt som du lämnar flexibilitet längre fram för anpassningar.
Det är lättviktigt och väldigt enkelt.

Vi har som mål att hjälpa ditt projekt att vara så vackert som möjligt. Kraven på högkvalitativ design blir allt högre. Vi vill hjälpa alla att
lägga till enkla designtokens till nya (och befintliga!) projekt.

Enkla designsystem ökar också utvecklingstakten - även för projekt i tidiga stadier! En rapport visar att det är 47% snabbare att bygga ett enkelt
formulär med hjälp av ett designsystem. Det är användbart för ingenjörer, designers och framför allt dina kunder om det inte finns en slumpmässig
färg för varje knapp i din app.

## 🚀 Kom igång

Mirrorful är ett NPM packet avsett att installeras som dev-dependency.

```bash
npm install mirrorful -D
```

eller

```bash
yarn add mirrorful -D
```

## ✨ Användning

Följande kommandon kommer att starta en lokal redigerare på `localhost:5050`

```
yarn run mirrorful
```

eller

```
npx mirrorful
```

## 💿 Exportera Format

Efter att ha konfigurerat ditt tema i redigeraren kan du exportera det för att använda det i din app.

För nuvarande exporterar vi till följande filtyper: `.js`, `.ts`, `.css`, `.scss`, `.json`

**Använda CSS variabler**

Exempel:

```css
.primary-button {
  background-color: var(--color-primary);
}

.primary-button:hover {
  background-color: var(--color-primary-hover);
}
```

**Använda JavaScript-konstanter**

Exempel:

```javascript
<button backgroundColor={{ Tokens.primary.base }}>Click here</button>
```

## 🤝 Komponentbibliotek-agnostisk

Vi strävar efter att vara komponentbiblioteksagnostiska. Oavsett om du använder Material UI, Chakra UI, Tailwind, Ant Design eller till och med
ditt egna bibliotek, integrerar sig Mirrorful sömlöst.

`⚠️ create-react-app` kan varna för att du försöker importera från en plats utanför `src`-mappen. Vi arbetar på en långsiktig lösning, men för
tillfället rekommenderar vi att du gör en kopia av `.mirrorful`-mappen i din `src` mapp

Titta på våra exempel:

- [Mirrorful 🤝 Chakra UI](https://github.com/Mirrorful/mirrorful/tree/main/examples/with-chakra-ui)
- [Mirrorful 🤝 Basic Create React App](https://github.com/Mirrorful/mirrorful/tree/main/examples/create-react-app)

Letar du efter ett specifikt exmepel? [Begär en här!](https://github.com/Mirrorful/mirrorful/issues)

## ❤️ Gemenskap & Support

- [Slack](https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA) - för en levande diskussion med gemenskapen och Mirrorful-teamet.
- [GitHub Discussions](https://github.com/Mirrorful/mirrorful/discussions) - för hjälp med att bygga och djupare konversationer om funktioner.
- [GitHub Issues](https://github.com/Mirrorful/mirrorful/issues) - för eventuella buggar och fel som du stöter på när du använder Mirrorful.
- [Twitter](https://twitter.com/mirrorful) - håll dig uppdaterad med de senaste produktuppdateringarna. Dela dina memes!

## 🏘 Open-source vs. betald

Den här repo:en är helt licensierad under MIT-licensen, med undantag för eventuella filer under en `ee` katalog som innehåller företagsfunktioner s
om kräver en Mirrorful-licens. För närvarande fokuserar vi på att utveckla icke-företagsmässiga erbjudanden som bör passa de flesta användningsfall.

Vi arbetar hårt för att göra Mirrorful mer omfattande. Behöver du några integreringar eller vill ha en ny funktion?
Känn dig fri att [skapa en issue](https://github.com/Mirrorful/mirrorful/issues) eller bidra direkt till kodbasen.
_(Den första versionen av denna README gjordes av en bidragsgivare!)_

## 🛡 Säkerhet

Mirrorful tar säkerhetsfrågor på stort allvar. Om du har några oro kring Mirrorful eller tror att du har upptäckt en sårbarhet,
vänligen kontakta oss via e-postadressen [support@mirrorful.io](mailto:support@mirrorful.io). Försök att ge en beskrivning av
problemet och helst en metod för att återskapa det. Vårt team kommer att svara dig **omedelbart**.

## ⭐ Håll dig uppdaterad

Det finns många nya funktioner som kommer mycket frekvent. Klicka på stjärnan på det här projektet för att hålla dig uppdaterad.

<img width="300" src="./assets/tower.png" alt="Build">

## 🛠️ Medverkan

Oavsett om det är stort eller litet, älskar vi bidrag. Underhållarna av den här repositoryn har tidigare byggt öppen källkod och älskar det. Välkommen!

Inte säker på var du ska börja? Du kan:

- [Boka en gratis, icke-pressande parnings-session med en av våra teammedlemmar](https://usemotion.com/meet/teddyni/meet?d=15)!

- Joina våran [Slack](https://join.slack.com/t/mirrorful/shared_invite/zt-1ps2xtxh0-2NaixFfFzSKZbr5gw_AHfA) och ställ frågan till vem som helst där.

Oavsett PR kommer alla Github-avatars från bidragsgivare att läggas till i Mirrorful README med deras tillstånd.

## 🪞 Medverkande

<a href="https://github.com/alexdanilowicz"><img src="https://avatars.githubusercontent.com/u/29822597?v=4" width="50" height="50" alt=""/></a> <a href="https://github.com/teddarific"><img src="https://avatars.githubusercontent.com/u/16343600" width="50" height="50" alt=""/></a> <a href="https://github.com/isabellytubao"><img src="https://avatars.githubusercontent.com/u/113177368" width="50" height="50" alt=""/></a> <a href="https://github.com/gfang200"><img src="https://avatars.githubusercontent.com/u/13005240?v=4" width="50" height="50" alt=""/></a> <a href="https://github.com/sallyxu"><img src="https://avatars.githubusercontent.com/u/1229627" width="50" height="50" alt=""/></a> <a href="https://github.com/zachsnoek"><img src="https://avatars.githubusercontent.com/u/26049962" width="50" height
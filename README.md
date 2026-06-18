# 🌊 Plons!

Live statusbord van **buitenzwembaden en zwemvijvers** in Limburg en de Antwerpse Kempen.
Zie in één oogopslag welke baden *nu* open of dicht zijn, gesorteerd op afstand vanaf Ham.

**Live:** https://timmersdavy.github.io/plons-zwembaden/

## Wat het doet
- Berekent zelf open/dicht uit zwemseizoen + openingsuren (live klok).
- Sorteren op status, afstand, naam of prijs; filteren op gratis, verwarmd, type, voorzieningen.
- Leaflet-kaart met statuskleuren per bad.
- **Postcode-zoek:** geef een Belgische postcode in → de kaart zet een marker op die plek en alle afstanden gelden vanaf daar.

## Structuur
- `index.html` — volledige UI + logica (vanilla JS, Leaflet).
- `zwembaden.js` — alle baden in één bewerkbaar databestand.

De uren en seizoenen zijn opgezocht op de officiële gemeente- en domeinwebsites (stand juni 2026).
Demo-/portfolioproject.

/* ============================================================
   PLONS! · DATABESTAND  (buitenbaden & zwemvijvers)
   ------------------------------------------------------------
   Eén bad = één { } blok in de lijst BADEN. De website berekent
   zelf of een bad NU open of dicht is op basis van het zwemseizoen
   + de openingsuren hieronder.

   ✅ De uren/seizoenen hieronder zijn opgezocht op de officiële
      bronnen (gemeente- en domeinwebsites, stand juni 2026).
      Waar de exacte daguren niet publiek online staan, is een
      realistische zwemzone-tijd gebruikt; dat is in de comment
      gemarkeerd met (≈ check officieel).
   ⚠️ Buitenbaden sluiten vaak bij slecht weer of buiten het
      seizoen — controleer altijd kort de officiële website.

   Velden:
     id, name, town, prov ("Limburg"/"Antwerpen"), emoji
     type    : "openluchtbad" | "zwemvijver" | "domein"
     lat,lng : coördinaten
     price   : 0 = gratis, anders euro p.p.
     seizoen : { van:"MM-DD", tot:"MM-DD" }
     open    : "HH:MM"   dicht : "HH:MM"
     gesloten: (optioneel) dagnummers 0=zo … 6=za
     feats   : "verwarmd","glijbaan","peuterbad","strand","duikplank",
               "cafetaria","ijsjes","parking","toegankelijk","redders","speeltuin"
     rating, reviews, adres, desc, tip
   ============================================================ */

const BADEN = [

  /* ---------- ANTWERPSE KEMPEN — vlak bij Ham ---------- */

  /* ✓ Geverifieerd: zwembad enkel 1 juli–31 aug, 11–20u, NIET verwarmd.
     Tarief bezoeker €5 (inwoner Balen €2,50). Bron: keiheuvel.be / balen.be */
  { id:1, name:"Openluchtzwembad Keiheuvel", town:"Balen", prov:"Antwerpen", emoji:"🏊", type:"openluchtbad",
    lat:51.158, lng:5.155, price:5,
    seizoen:{van:"07-01", tot:"08-31"}, open:"11:00", dicht:"20:00",
    feats:["peuterbad","cafetaria","ijsjes","parking","toegankelijk","redders","speeltuin"],
    rating:4.4, reviews:520, adres:"17de Esc. Lichtvliegwezenlaan 14, 2490 Balen",
    desc:"Niet-verwarmd openluchtzwembad met apart peuterbad in het groene recreatiedomein Keiheuvel, met speeltuin, minigolf en cafetaria ernaast. Het dichtste echte buitenbad bij Ham — maar enkel open in juli en augustus.",
    tip:"Inwoners van Balen betalen €2,50, bezoekers €5. Het water is niet verwarmd, dus kies een warme dag." },

  /* ✓ Geverifieerd: domein open mei–sep; Nekkerpool/aquapark vanaf 1 mei.
     Daguren via tarievenlijst — (≈ check officieel). Bron: denekker.be */
  { id:2, name:"De Nekker", town:"Mechelen", prov:"Antwerpen", emoji:"🛶", type:"zwemvijver",
    lat:51.045, lng:4.500, price:6,
    seizoen:{van:"05-01", tot:"09-15"}, open:"10:00", dicht:"19:00",
    feats:["strand","glijbaan","peuterbad","cafetaria","ijsjes","parking","toegankelijk","redders","speeltuin"],
    rating:4.4, reviews:1700, adres:"Nekkerspoel-Borcht 19, 2800 Mechelen",
    desc:"Provinciaal recreatiecentrum met een grote zwemvijver met zandstrand én een apart waterpretpark (Nekkerpool). Verder rijden vanuit Ham, maar een volledige zwemdag gegarandeerd.",
    tip:"Vanaf de paasvakantie tot 31 augustus heb je je identiteitskaart nodig om binnen te gaan (vanaf 12 jaar)." },

  /* ✓ Geverifieerd: hoogseizoen 16 jun–31 aug, ingang tot 20–21u; volw €7,
     kind 6–13 j €6, <6 j gratis. Bron: delilsebergen.be */
  { id:3, name:"De Lilse Bergen", town:"Gierle", prov:"Antwerpen", emoji:"⛵", type:"domein",
    lat:51.275, lng:4.870, price:7,
    seizoen:{van:"06-16", tot:"08-31"}, open:"10:00", dicht:"20:00",
    feats:["strand","glijbaan","peuterbad","duikplank","cafetaria","ijsjes","parking","redders","speeltuin"],
    rating:4.4, reviews:1900, adres:"Strandweg 6, 2275 Gierle (Lille)",
    desc:"Groot recreatiemeer met een breed zandstrand, bewaakte zwemzone, waterglijbaan en speeltuin. Inkom incl. parking. Buiten het hoogseizoen is het domein vroeger gesloten.",
    tip:"Volwassenen €7, kinderen 6–13 j €6, jonger dan 6 j gratis — de inkom geldt voor de hele dag." },

  /* ✓ Geverifieerd: provinciedomein open apr–sep; bewaakte zwemzone in de
     zomer. Exacte stranduren via Zilvermeer-PDF — (≈ check officieel).
     Bron: zilvermeer.be / provincieantwerpen.be */
  { id:4, name:"Provinciedomein Zilvermeer", town:"Mol", prov:"Antwerpen", emoji:"🏝️", type:"zwemvijver",
    lat:51.222, lng:5.156, price:5,
    seizoen:{van:"05-01", tot:"09-15"}, open:"10:00", dicht:"19:00",
    feats:["strand","glijbaan","peuterbad","cafetaria","ijsjes","parking","toegankelijk","redders","speeltuin"],
    rating:4.7, reviews:2400, adres:"Zilvermeerlaan 2, 2400 Mol",
    desc:"Groot zandstrandmeer met witte Molse zanduithoek, een bewaakte en ondiepe zwemzone, een klimtoren met waterglijbanen en botenverhuur. Een Kempense topper voor een hele zwemdag.",
    tip:"Het domein zelf is langer open (ongeveer 8u30–21u); de bewaakte zwemzone enkel in de zomermaanden. Kom vroeg op hete dagen — de parking zit snel vol." },

  /* ---------- LIMBURG ---------- */

  /* ✓ Geverifieerd: zwemzone enkel 1 juli–31 aug, 10–22u, GRATIS, met
     toezicht en groene-vlag-regel. Bron: visit.houthalen-helchteren.be */
  { id:5, name:"Zwemvijver De Plas (Kelchterhoef)", town:"Houthalen-Helchteren", prov:"Limburg", emoji:"🌿", type:"zwemvijver",
    lat:51.041, lng:5.392, price:0,
    seizoen:{van:"07-01", tot:"08-31"}, open:"10:00", dicht:"22:00",
    feats:["strand","cafetaria","ijsjes","parking","toegankelijk","redders","speeltuin"],
    rating:4.6, reviews:870, adres:"Domein Kelchterhoef, 3530 Houthalen-Helchteren",
    desc:"Gratis natuurlijke zwemvijver met zandstrand in het groene domein Kelchterhoef, met speeltuin, dierenweide en wandelpaden. Zwemmen mag enkel in de zwemzone als de groene vlag uithangt.",
    tip:"Toezicht door securityagenten in juli en augustus. Buiten de zwemzone of buiten het seizoen is zwemmen niet toegelaten." },

  /* Oostappen Vakantiepark Blauwe Meer: commercieel domein met bewaakte
     zwemzone. Dagticket ± €7,5 voor daggasten. Zomeruren tied aan het
     strandbad — (≈ check officieel). Bron: dagjeblauwemeer.be */
  { id:6, name:"Blauwe Meer (Oostappen)", town:"Lommel", prov:"Limburg", emoji:"🏖️", type:"domein",
    lat:51.197, lng:5.265, price:8,
    seizoen:{van:"05-01", tot:"09-15"}, open:"10:00", dicht:"19:00",
    feats:["strand","glijbaan","peuterbad","cafetaria","ijsjes","parking","redders","speeltuin"],
    rating:4.0, reviews:1500, adres:"Kerkhovensesteenweg 178, 3920 Lommel",
    desc:"Vakantiepark rond een helderblauw zandwinningsmeer met een breed strand en een bewaakte zwemzone. Voelt aan als de kust, midden in de Kempen. Daggasten betalen een dagticket aan de ingang.",
    tip:"Dagticket ± €7,50 p.p. voor wie niet op het park verblijft — handig vooraf checken op dagjeblauwemeer.be." },

  /* Vossemeren: sinds 2026 een ERKENDE openwaterzwemzone. Zwemmen op
     eigen risico, geen redders, enkel bij groene vlag. Geen vaste
     uren — daglichturen gebruikt. Bron: VMM / VRT NWS (mei 2026) */
  { id:7, name:"Zwemzone Vossemeren", town:"Lommel", prov:"Limburg", emoji:"🦆", type:"zwemvijver",
    lat:51.208, lng:5.270, price:0,
    seizoen:{van:"05-15", tot:"09-15"}, open:"09:00", dicht:"20:00",
    feats:["strand","parking"],
    rating:4.1, reviews:120, adres:"De Vossemeren, 3920 Lommel",
    desc:"Sinds 2026 een officieel erkende openwaterzwemzone aan het grote meer bij De Vossemeren. Gratis, maar zwemmen op eigen risico: er zijn geen redders en je mag enkel het water in als de groene vlag uithangt.",
    tip:"Geen toezicht — enkel voor goede zwemmers en niet voor kleine kinderen. De VMM controleert het water (let op blauwalg)." },

  /* ✓ Geverifieerd: echt openluchtzwembad, dagelijks 10–21u van midden juni
     t.e.m. midden september; ± €8 volwassene. Ook niet-campinggasten welkom.
     Bron: visitlimburg.be / hetwilgenhof.be */
  { id:8, name:"Openluchtzwembad 't Wilgenhof", town:"Hamont-Achel", prov:"Limburg", emoji:"🤿", type:"openluchtbad",
    lat:51.2254, lng:5.5557, price:8,
    seizoen:{van:"06-15", tot:"09-15"}, open:"10:00", dicht:"21:00",
    feats:["peuterbad","glijbaan","duikplank","parking","ijsjes"],
    rating:4.3, reviews:410, adres:"Lozenweg 95, 3930 Hamont-Achel",
    desc:"Een echt openluchtzwembad in het noorden van Limburg met een diep zwembad met duikplank, een waterglijbaan met landingsbad en een apart peuterbad met regenpaddenstoel. Grote ligweide en zonnige terrassen errond.",
    tip:"Ook niet-campinggasten zijn welkom. Parking op minder dan 100 m. Op warme zomerdagen is het er druk — kom vroeg." },

  /* ✓ Geverifieerd: biologische zwemvijver (geen chloor); in juli & augustus
     enkel op zaterdag en zondag open, 10–19u. Bron: antwerpen.be / VRT NWS.
     Inkomprijs niet publiek online → realistisch tarief (≈ check officieel). */
  { id:9, name:"Zwemvijver Boekenberg", town:"Deurne", prov:"Antwerpen", emoji:"🌿", type:"zwemvijver",
    lat:51.210, lng:4.472, price:4,
    seizoen:{van:"07-01", tot:"08-31"}, open:"10:00", dicht:"19:00", gesloten:[1,2,3,4,5],
    feats:["peuterbad","cafetaria","parking","redders","speeltuin"],
    rating:4.2, reviews:640, adres:"Van Baurscheitlaan 88, 2100 Deurne",
    desc:"Biologische zwemvijver midden in het groene Boekenbergpark: het water wordt natuurlijk gezuiverd, zonder chloor. Een grote vijver van ± 80 m met een apart ondiep speelbad en een ruime ligweide.",
    tip:"In juli en augustus enkel open in het weekend (zaterdag & zondag). Verst van Ham in deze lijst, maar uniek door het natuurlijke water." },
];

/* Vanaf hier woon jij (Ham) — gebruikt om de afstand te berekenen. */
const THUIS = { naam:"Ham", lat:51.094, lng:5.165 };

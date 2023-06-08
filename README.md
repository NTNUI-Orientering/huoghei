## Ny Hu og Hei frontend for ogruppa
Dette repoet inneholder kildekoden til ny Hu-og-hei-frontend som er et pågående prosjekt for NTNUI Orientering. Prosjektet benytter React Typescript + Less til frontend, og benytter den gamle "Hu og hei"-wordpress-installasjonen som backend gjennom WP sitt api. 

Backenden er hostet på org.ntnu.no/ogruppa/sportslig/arr/huoghei og alt administrativt i forbindelse med arrangementet skal gjøres der. Dette innebærer at publisering av nyheter og endring på eksisterende sider skal gjøres der, og ikke i denne kildekoden. Datoer for arrangement, påmeldingsavgift og andre "options" settes også i backend-systemet. Bakgrunnnen for å benytte "gammel" WP-backend er å bevare den historiske informasjonen som ligger på siden, samt at klubbens medlemmer skal ha et kjent admin-panel å forholde seg til.

Påmeldingsunksjonaliteten i backend ligger som et custom-rest endepunkt som en del av "Hu og Hei"-pluginen inne på WP. Ved endringer i påmeldinsstrukturen må også denne påmeldingen endres på. Pluginen er skrevet i PHP. Ellers bør det ikke være behov for å gjøre større endringer i backend i nærmeste fremtid. Merk at endepunktene er åpne, hvilket tilsier at det er viktig å påse at ingen input-felter er ubseskyttet, verken i frontend, eller tilsvarende endepunkt i backend. 

### **Klone repoet**

1. Åpne ny prosjektmappe
2. Åpne terminal og cd inn i mappen
3. `git clone https://github.com/bjorafla/huoghei.git`


### **Spinne opp prosjektet etter kloning**

1. Gå inn i hu-og-hei-mappen fra terminalen
2. Installer avhengighetenetil prosjektet: `npm install`
3. Spinn opp applikasjonen: `npm run dev:mock` for mocket backend og `npm run dev:prod` for reell backend 
4. Applikasjonen skal nå kjøre på port "localhost:3000"


### **Rutiner før opplasting av ny kode**

1. Sjekk at koden kjører :)
2. Sørg for at koden din er clean ved først å kjøre: `npm run prettier:fix`
3. Sjekk at koden ikke inneholder error: `npm run lint` og fiks eventuelle errors - gule warnings er lov


### **Laste opp ny kode**

1. **Aldri** push direkte til main-branchen. 
2. Opprett en ny feature branch med passende navn lokalt på din pc/mac.
3. Hent siste endringer inn i din lokale main branch ved å kjøre `git pull` fra main-branchen i terminalen.
4. Sørg for at disse endringene legges i din branch gjennom `git rebase main` fra feature branch
5. Push endringer til github ved `git push` og ha en beskrivende commit-melding
6. Legg opp en pull-request (PR) for din feature branch mot main inne på github, og sjekk at "diffen" stemmer overens med dine endringer.
7. Gi lyd slik at en av de andre på prosjektet kan se over det du har gjort.
8. Etter godkjennelse fra den som ser over kan dine endringer "merges" inn i main. Dette gjøres på github.



### **Bygge prosjektet**

Prosjektet bygges klar for produksjon ved å kjøre `npm run build` i terminalen. De statiske filene som vil vøre nødvendig for å serve frontenden på Apache-serveren til ogruppa vil nå legge seg i "distribution"-mappen og skal være klare til bruk. Kopier alle filene i distribution og legg i "hh" mappen på serveren til ogruppa. Merk at distribution mappen ikke skal kopieres, kun filene i mappen.

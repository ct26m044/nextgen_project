# AI-Log-Schritt 3: PWA & Offline-Strategie
KI-Tool: Claude, Claude Code  
Verantwortungsbereiche: Aufgabe B (gemeinsam), Aufgabe C (Sessions-/Speaker-Daten ), Aufgabe D (Tests und Review), Aufgabe E (Verifikations-Nachweis)

## PWA verstehen
Datum: 24.11.2026  
Prompt: „what are PWAs? how do they work? why is a service worker needed? who or what uses the web app manifest?“ \
Zweck: Erklärung von PWAs zum besseren Verständis. \
Verstanden: Eine Progressive Web App ist eine herkömmliche Website, die mit HTML, CSS und JS erstellt wurde und um einige Funktionen erweitert ist, sodass sie sich wie eine installierte App verhalten kann. Das Manifest ist metadata für den Browser und das Betriebssystem. Ein Service Worker ist ein Skript, das unabhängig von jeder Seite lebt.

## Workbox verstehen
Datum: 24.11.2026 \
Prompt: „what is workbox“ \
Zweck: Erklärung von Workbox zum besseren Verständis.\
Verstanden: Workbox ist eine Sammlung von JavaScript-Bibliotheken und Build-Tools des Chrome-Teams von Google, die beim Schreiben von Service Workern unterstützt. Sie übernimmt die fehleranfälligen Aspekte des Service-Worker-Codes, sodass diese nicht manuell implementiert werden müssen.

## Offline Strategien von B überprüfen
Datum: 24.11.2026  \
Prompt: „does this description of the offline strategies for our app make sense?“ \
Kontext: 02-offline-strategie-konzept.md\
Zweck: Überprüfung von 02-offline-strategie-konzept.md\
Verstanden: Unsere Strategien und Begründungen dafür sind sinnvoll.\
Übernommen: Korrekturen von Tippfehler.

## Caching Strategie von Session- & Speaker-Daten implementieren
Datum: 24.11.2026  \
Prompt: „what do I need to implement the caching strategy detailed in @docs/schritt3/02-offline-strategie-konzept.md for the session and speaker data (cache first)? the service worker must be implemented with clearly identifiable caching rules for each route/data type (code + a brief accompanying comment explaining which rule corresponds to which decision). guide me through the implementation.“ \
Kontext: 02-offline-strategie-konzept.md, main.ts, vite.config.ts\
Zweck: Umsetzung der Caching Strategie von Session- & Speaker-Daten\
Verstanden: Konferenz Daten müssen in public/ verschoben und zur Laufzeit geladen. main.ts und vite.config.ts müssen angepasst werden. Getestet wird mit npm run build und npm run preview. dist/sw.js sollte CacheFirst und 3 cache Namen enthalten. Sie sollen auch im DevTools unter Application →  Cache Storage erscheinen.\
Übernommen: Umstrukturierung von conference-data.json, Änderungen in main.ts und vite.config.ts.

## Service Worker überprüfen
Datum: 24.11.2026  \
Prompt: „does the generated service worker look good?“ \
Kontext: dist/sw.js\
Zweck: Überprüfung von sw.js.\
Verstanden: Die generierte dist/sw.js entspricht unserem Konzept. Die Icon-Einträge wurden dupliziert.\
Übernommen: includeManifestIcons: false wurde zum config hinzugefügt, um die Duplizierung der Icons zu beheben.

## Testszenarien durschpielen und Ergebnisse dokumentieren
Datum: 24.11.2026  \
Prompt: „hilf mir, aufgabe D zu machen. mein teampartner und ich haben schon A, B und C erledigt. wie kann ich die 3 testszenarien auf meinem Rechner durchspielen und alles wie hier beschrieben dokumentieren? ich arbeite mit firefox.“ \
Kontext: Aufgabenstellung von Assignment [5], vite.config.ts.\
Zweck: Testszenarien durschpielen und Ergebnisse dokumentieren.\
Verstanden: Schritte für die Testszenarien. Szenario i besteht nicht mit nur einem load.\
Übernommen: Schritte zur Reproduktion der Testszenarien, Struktur von 03-entscheidungsprotokoll.md

## Szenario i dokumentieren
Datum: 25.11.2026  \
Prompt: „for scenario i i only saw the error message after reloading. document this in the entscheidungsprotokoll. and that only the precache was there on the first visit (after clearing the cookies and site data and then reloading). is there a way to make the scenario pass?“ \
Kontext: 03-entscheidungsprotokoll.md, screenshots.\
Zweck: Ergebnis von Szenario i dokumentieren.\
Verstanden: main.ts muss angepasst werden, damit die Speaker und Session Daten bei einem load gecached werden.\
Übernommen: Änderung in main.ts, Dokumentation.

## Szenario ii dokumentieren
Datum: 25.11.2026  \
Prompt: „help me document scenario 2. i proceeded as you previously described, adding 3 sessions to my program, checking if they show up in localStorage (they did), then going offline from the network tab and typing the url again and checking that the 3 sessions are still there - they were. i also removed one session while still offline and reloaded. the 2 remaining sessions were still there. i also added the screenshots to the assets folder“ \
Kontext: 03-entscheidungsprotokoll.md, screenshots.\
Zweck: Ergebnis von Szenario ii dokumentieren.\
Verstanden: Szenario ii hat bestanden.\
Übernommen: Update der Dokumentation.

## Szenario iii dokumentieren
Datum: 25.11.2026  \
Prompt: „help me document scenario 3 in firefox. i proceeded as you described earlier. firefox shows the unable to connect screen, visible in my screenshot that i just added“\
Kontext: 03-entscheidungsprotokoll.md, screenshots.\
Zweck: Ergebnis von Szenario iii dokumentieren.\
Verstanden: Firefox zeigte die eigene Fehlerseite „Unable to connect – Firefox can't connect to the server at localhost:4173" Das Verhalten ist akzeptabel, weil ein Service Worker technisch erst nach dem ersten erfolgreichen Laden installiert werden kann. Keine Caching-Strategie kann diesen Fall lösen.\
Übernommen: Update der Dokumentation.

## Offline-Funktionalität nachvollziehbar nachweisen 
Datum: 25.11.2026  \
Prompt: „help me complete part E. of the assignment. it has to be done in @docs/schritt3/04-verifikations-nachweis.md . part D was done in @docs/schritt3/03-entscheidungsprotokoll.md , where i already tested the 3 scenarios to check the offline functionality, also including screenshots. what should i do in adition to that for E? or can I use the evidence I found in task D for task E as well?“ \
Kontext: 03-entscheidungsprotokoll.md, screenshots.\
Zweck: Verifikations-Nachweis\
Verstanden: Lighthouse erlaubt eine Audit der PWA durchzuführen. Alles hat vorhanden, außer einer Theme-Farbe und einem maskable Icon.\
Übernommen: Nachweis-Abschnitt in 04-verifikations-nachweis.md.




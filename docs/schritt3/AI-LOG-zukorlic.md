# AI-Log-Schritt 3: PWA & Offline-Strategie  
KI-Tool: ChatGPT  
Verantwortungsbereiche: Aufgabe A, Aufgabe B (gemeinsam), Aufgabe C (App-Shell) und Aufgabe D (Tests und Review)  
  
## PWA-Konfiguration vorbereiten  
Datum: 22.11.2026  
Prompt: „Hier ist meine style.css erklär mir ob die reicht für aufgabe a?“  
Kontext: Ich habe meine bestehende style.css mit den Design-Tokens und die erfolgreiche Installation von vite-plugin-pwa gezeigt.  
Zweck: Überprüfen, ob die vorhandenen Farben und Design-Tokens für das PWA-Manifest ausreichen.  
Übernommen: Die bestehenden Farben für Theme und Hintergrund im Manifest verwendet und die PWA-Konfiguration in „vite.config.ts“ ergänzt.  
Verstanden: Das Manifest verwendet feste Farbwerte. Die vorhandenen CSS-Tokens mussten dafür nicht verändert werden.  
  
## PWA-Icons einrichten  
Datum: 22.11.2026  
Prompt: „Das ist leer hab die sachen in der config muss ich was davor ändern damit die icons auftauchen oder wie sind die da dann?“  
Zweck: Herausfinden, warum die Icons trotz Konfiguration nicht vorhanden waren.  
Übernommen: Den Ordner public/icons angelegt und die benötigten Dateien vorbereitet.  
Verstanden: In der Config wird nur der Pfad zu den Bildern angegeben. Die eigentlichen PNG-Dateien muss man selbst hinzufügen.  
  
## Produktionsbuild durchführen  
Datum: 22.11.2026  
Prompt: „hab sie erstellt jetzt npm build und npm run preview?“  
Zweck: Überprüfen, wie ich die PWA nach dem Einfügen der Icons testen kann.  
Übernommen: 'npm run build' und anschließend 'npm run preview' ausgeführt.  
Verstanden: Der Service Worker wird beim Produktionsbuild erzeugt. Deshalb muss man die Offline-Funktion über die Preview testen und nicht nur über den normalen Entwicklungsserver.  
  
## Manifest und Service Worker überprüfen  
Datum: 22.11.2026  
Prompt: „passt es jetzt?“  
Kontext: Screenshots aus Chrome DevTools mit dem PWA-Manifest und dem aktivierten Service Worker.  
Zweck: Kontrollieren, ob das Manifest richtig erkannt wird und der Service Worker funktioniert.  
Übernommen: Die Anzeigen unter Application -> Manifest und Application -> Service Workers überprüft.  
Verstanden: Ein aktiver Service Worker und ein erkanntes Manifest zeigen, dass die grundlegende PWA-Einrichtung funktioniert. Ob die Anwendung tatsächlich offline verfügbar ist, muss man aber separat testen.  
  
## Offline-Funktion der App-Shell testen  
Datum: 22.11.2026  
Prompt: „ja es funktioniert immer noch“  
Kontext: Screenshots der Speaker-Seite im Offline-Modus und des aktiven Service Workers.  
Zweck: Überprüfen, ob die Anwendung nach einem Online-Besuch auch offline funktioniert.  
Übernommen: Die Anwendung über Chrome DevTools offline getestet und kontrolliert, ob die vorhandenen Seiten weiterhin geladen werden.  
Verstanden: Workbox speichert die benötigten Anwendungsdateien. Dadurch kann die App auch ohne Netzwerk starten, sofern die Dateien bereits im Cache vorhanden sind.  
  
## App-Shell-Caching überprüfen  
Datum: 23.11.2026  
Prompt: „ja sind da“  
Kontext: Screenshot aus Chrome DevTools mit den verschiedenen Cache-Einträgen.  
Zweck: Überprüfen, ob die Cache-Bereiche durch Workbox tatsächlich angelegt wurden.  
Übernommen: Die Cache-Einträge in Chrome DevTools kontrolliert und zwischen dem Workbox-Precache und den zusätzlichen Runtime-Caches unterschieden.  
Verstanden: Der Precache speichert die statischen Anwendungsdateien. Für die separat geladenen Konferenzdaten gibt es eigene Caches, die über die Cache-First-Regeln befüllt werden.  
  
## Implementierung des Teammitglieds überprüfen  
Datum: 24.11.2026  
Prompt: „Hier main.ts:“  
Kontext: Ich habe den aktualisierten Inhalt der main.ts geschickt.  
Zweck: Überprüfen, ob die Konferenzdaten vor dem Start der Anwendung richtig geladen werden.  
Übernommen: Die Initialisierung mit loadConferenceData() überprüft und anschließend die Runtime-Caches in DevTools kontrolliert.  
Verstanden: Da die Konferenzdaten jetzt über http geladen werden, muss die Anwendung warten bis diese Anfragen abgeschlossen sind. Erst danach kann Vue die Daten korrekt anzeigen.  
  
## Offline-Tests und Dokumentation aufteilen  
Datum: 24.11.2026  
Prompt: „Wir haben uns geeinigt das er als erstes es schreibt und seine tests macht dann mache ich meine und schreibe es beim dokument dazu“  
Zweck: Die Zusammenarbeit beim Entscheidungsprotokoll festlegen.  
Übernommen: Eine Aufteilung vereinbart, bei der David den ersten Entwurf schreibt und ich anschließend meine Tests sowie den Vergleich ergänze.  
Verstanden: Das wir beide unabhängig testen müssen und dann vergleichen. Dadurch können wir unterschiedliche Ergebnisse erkennen.  
  
## Fehler beim ersten Online-Besuch untersuchen
Datum: 24.11.2026  
Prompt: „wie lösche ich den chache“  
Zweck: Die PWA mit einem vollständig geleerten Cache erneut testen.  
Übernommen: Website-Daten und Service Worker gelöscht und die Anwendung danach genau einmal online geladen.  
Verstanden: Ein bereits gefüllter Cache kann Probleme verstecken. Für einen aussagekräftigen Test muss man auch den Zustand beim ersten Besuch überprüfen.  
  
## Ursache des fehlgeschlagenen Offline-Tests verstehen  
Datum: 24.11.2026  
Prompt: „das kommt“  
Zweck: Herausfinden, warum die Anwendung nach nur einem Online-Besuch offline nicht vollständig geladen werden konnte.  
Übernommen: Den Fehler anhand der Cache-Einträge und der Fehlermeldung untersucht und als eigenen Testdurchlauf dokumentiert.  
Verstanden: Die App-Shell war bereits gespeichert, aber die Runtime-Caches für die Konferenzdaten waren noch leer. Der Service Worker hatte die JSON-Anfragen beim ersten Laden noch nicht abgefangen und deswegen ging es nicht.  
  
## Persönliches Programm nochmals offline testen
Datum: 24.11.2026  
Prompt: „Soll ich test 2 nochmal wiederholen?“  
Zweck: Überprüfen, ob Mein Programm auch offline verändert werden kann.  
Übernommen: Drei Sessions gespeichert, den Offline-Modus aktiviert, eine Session entfernt und die Seite erneut geladen.  
Verstanden: Die gespeicherte Auswahl bleibt auch nach einer Änderung im Offline-Modus erhalten. localStorage funktioniert unabhängig von einer aktiven Internetverbindung.  
  
## Screenshots als Nachweise verwenden  
Datum: 24.11.2026  
Prompt: „Soll ich die beiden noch speichern? Für test 1 und 3“  
Zweck: Passende Screenshots für die fehlgeschlagenen Offline-Szenarien auswählen.  
Übernommen: Die Offline-Fehlermeldung nach einem Online-Besuch und die Chrome-Fehlerseite beim echten Offline-Erstbesuch gespeichert und im Entscheidungsprotokoll referenziert.  
Verstanden: Die beiden Bilder zeigen unterschiedliche Probleme. Beim ersten ist die App-Shell vorhanden, aber es fehlen Konferenzdaten. Beim zweiten gibt es noch überhaupt keinen Cache.
# ADR 01: Rendering-Strategie

Status: Accepted  
Technologie: Vue 3, Vite, Vue Router, TypeScript  

## Einleitung
Wir entscheiden uns bei allen vier Anwendungsteilen für CSR. Andere Strategien könnten für bestimmte Seiten Vorteile haben, würden aber zusätzliche Infrastruktur benötigen. Weitere Begründung als nächstes:

## Speaker Profile
PixelFlow enthält 18 Speaker Profile mit Namen, beruflichen Informationen, Biografien und zugehörigen Sessions. Diese stammen aus der conference-data.json und werden sich nicht ändern. Außerdem hat jeder Speaker eine eindeutige ID und erhält eine eigene Route.

### Optionen
#### SSG
Bei SSG werden die Speaker Seiten schon im Build erstellt, was für die unveränderlichen Daten gut geeignet ist. Außerdem können die Seiten schnell ausgeliefert werden und wären auch ohne JavaScript lesbar. Damit wir aber SSG verwenden können müssten wir unser aktuelles Projekt mit einer zusätzlichen Prerendering-Lösung austatten.

#### CSR
Bei CSR werden die Speaker Daten im Browser geladen bzw. aus dem eingebundenen Datensatz gelesen. Der Vue Router zeigt der ID das passende Profil an und bei CSR benötigen wir keine zusätzliche Rendering Infrastruktur.

### Entscheidung
Wir wählen CSR, da unser Projekt auf Vue 3, Vite und Router basiert. Obwohl hier SSG insgesamt besser geeignet sein könnte, würde es aber zusätzliche Konfigurationen erfordern. Da wir auch nur lediglich 18 Profile haben, wäre dieser Aufwand aktuell nicht notwending.

### Vorteile & Konsequenzen
Die Implementierung bleibt einfach und verwendet eine zentrale Datenschicht. Alle Speaker können über dieselbe wiedervendbare View dargestellt werden.
Der Nachteil ist, dass die Inhalte durch JavaScript im Browser dargestellt werden. Hier könnte SSG Vorteile bieten.

## Session Detailseiten
PixelFlow hat 20 Sessions. Jede Session hat einen Titel, Beschreibung, Uhrzeiten, Raum, Track und zugehörige Speaker. Die Informationen werden über conference-data.json bereitgestellt. Derzeit verändern sich diese nicht. Für jede Session wird eine eigene Route verwendet.

### Optionen
#### CSR
Vue Router lädt anhand der Session ID die passende Detailschicht. Die Informationen werden über useConferenceData bereitgestellt. Dadurch können wir die bestehende Projektstruktur ohne zusätzliche Infrastruktur verwenden.

#### SSR oder ISR
Mit SSR können Session Informationen auf einem Server gerendert werden. ISR würde es ermöglichen, statisch erzeugte Seiten in bestimmten Abständen zu aktualisieren. Diese Varianten wären interessant, wenn sich z.B. Räume oder Uhrzeiten während der Konferenz ändern würden.
Außerdem müssten wir hier zusäztliche Server bzw. Build Mechanismen einführen oder simulieren.

### Entscheidung
Wir wählen CSR, da sich die Daten im aktuellen Projekt nicht dynamisch ändern. Die Session Detailseiten können mit einer gemeinsamen Vue-Komponente und dynamischen Routen umgesetzt werden.

### Vorteile & Konsequenzen
Alle 20 Sessions lassen sich über die selbe View anzeigen. Die Umsetzung bleibt übersichtlich und passt zu unserer bestehenden Architektur.
Ein Nachteil besteht darin, dass Änderungen an den Koferenzdaten einen neuen Build bzw. ein erneutes Deployment benötigen.

## Session Übersicht mit Filtering
Die Übersicht zeigt alle 20 Sessions und ermöglicht eine Filterung nach Track, Konferenztag und Level. Die Filter müssen miteinander kombinierbar sein. Außerdem muss die Oberfläche auf die Filterauswahl der Nutzer unmittelbar reagieren. Die Daten stammen aus der statisch eingebundenen JSON Datei.

### Optionen
#### CSR
Die vollständigen Session Daten werden clientseitig bereitgestellt. Vue verwaltet die ausgewählten Filter reaktiv. Mithilfe von computed werden die passenden Sessions automatisch neu berechnet, wenn sich ein Filter ändert.

#### SSG
Die ursprüngliche Programmübersicht könnte bereits beim Build als HTML erstellt werden. Dies könnte die initiale Darstellung verbessern. Für die interaktive Filterung wäre aber weiterhin JavaScript im Browser notwendig und deshalb müssten wir eine zusätzliche Prerendering-Lösung verwenden, obwohl die Filter weiterhin clientseitig funktionieren würden.

### Entscheidung
Wir wählen CSR, da die Filterung vollständig im Browser stattfindet und die Datenmenge mit 20 Sessions eher gering ist.
Die Filterlogik wird gemäß unserem Architektur ADR im Composable useSessionFilter umgesetzt. Die Programview verwendet diese Composable und stellt die gefilterte Session dar.

### Vorteile & Konsequenzen
Die Filter reagieren ohne zusätzliche Serveranfragen und können über eine UND-Verknüpfung kombiniert werden.
Es lässt sich die Filterlogik später in "Mein Programm" wiederverwenden.

Der Nachteil ist, dass die initiale Darstellung von der Auführung des JavaScripts abhängt. Wir finden das dies kein großer Nachteil ist.

## "Mein Programm" Dashboard
Auf der Seite "Mein Programm" können Besucher Sessions zu ihrem persönlichen Zeitplan hinzufügen oder daraus entfernen. Die ausgewählten Session IDs werden gemäß unserem State Management Konzept in localStorage gespeichert.

### Optionen
#### CSR
Die persönlichen Session IDs werden beim Start aus localStorage gelesen. Vue stellt anschließend die ausgewählten Sessions dar und aktualisiert die Oberfläche bei Änderungen automatisch.

#### SSR
Bei SSR könnte ein Server den persönlichen Zeitplan bereits als HTML erzeugen, müsste aber Zugriff auf die individuelle Session Auswahl haben.

### Entscheidung
Wir wählen CSR, da die persönlichen Daten ausschließlich im Browser gespeichert werden. Die Verwaltung erfolgt über das geplante Composable useMyPogram. Durch das können Sessions hinzugefügt, entfernt und nach dem Neuladen wiederhergestellt werden.

### Vorteile & Konsequenzen
Wir brauchen kein Backend und keine Benutzeranmeldung. Die persönliche Auswahl bleibt im jeweiligen Browser gespeichert.
Der Nachteil ist, dass der Zeitplan nicht automatisch zwischen unterschiedlichen Geräten synchronisiert wird. Außerdem können die Daten verloren gehen, wenn der Browserspeicher gelöscht wird.
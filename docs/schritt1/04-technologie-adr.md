# ADR 04: Projekt-Setup Technologie

## Status
Accepted

## Datum
2026-10-18

## Kontext

Für die Entwicklung unserer zweitägigen Web-Frontend-Konferenz-App PixelFlow benötigen wir ein geeignetes Projekt-Setup. Die Anwendung soll mehrere Seitentypen unterstützen, darunter eine Programmübersicht mit Filtermöglichkeiten, Session- und Speaker-Detailseiten sowie ein personalisiertes Dashboard für den individuellen Konferenzplan. Außerdem sollen Nutzer:innen ihr Programm speichern und später auch offline darauf zugreifen können.

Bei der Auswahl berücksichtigen wir den Routing-Bedarf, die Erfahrung des Teams, die Komplexität des Setups und mögliche zukünftige Anforderungen. Im Team gibt es bereits etwas Erfahrung mit Vue, Vite und Vue Router, während wir bisher keine Erfahrung mit Nuxt gesammelt haben. Die Anwendung verwendet vorbereitete JSON-Daten und benötigt für den aktuellen Projektumfang kein eigenes Backend.

## Entscheidung

Wir entscheiden uns für **Vue 3, Vite und Vue Router** als Projekt-Setup.

Vue 3 bildet die Grundlage für die komponentenbasierte Entwicklung der Benutzeroberfläche. Vite übernimmt die Entwicklungsumgebung und den Build-Prozess. Vue Router ermöglicht die Navigation zwischen den verschiedenen Seitentypen, beispielsweise der Programmübersicht, Session-Details, Speaker-Profilen und dem persönlichen Dashboard.

Wir gehen davon aus, dass Vue Router unseren Routing-Anforderungen ausreichend gerecht wird. Da die Anwendung auf lokalen JSON-Daten basiert und unser aktueller Umfang keine serverseitige Infrastruktur voraussetzt, bevorzugen wir ein schlankes Setup gegenüber einem umfangreicheren Framework. Die vorhandene Teamerfahrung ermöglicht zudem einen schnelleren Einstieg und reduziert den Einarbeitungsaufwand.

## Betrachtete Alternativen

### Alternative 1: Nuxt

- **Vorteile:** Bietet eine integrierte Projektstruktur, dateibasiertes Routing und zusätzliche Funktionen für größere Anwendungen. Neue Seitentypen und weitere Anforderungen lassen sich in einer vorgegebenen Struktur organisieren.
- **Nachteile:** Bringt zusätzliche Konzepte und Konventionen mit sich, in die sich das Team erst einarbeiten müsste. Für den aktuellen Projektumfang könnten einige Funktionen unnötig sein.
- **Warum abgelehnt:** Die integrierten Funktionen bieten für unsere aktuelle Konferenz-App keinen ausreichenden Mehrwert gegenüber Vue Router. Außerdem fehlt uns praktische Erfahrung mit Nuxt, wodurch zusätzlicher Einarbeitungsaufwand entstehen würde.

### Alternative 2: Vue 3 ohne Vite und Vue Router, mit einer einfacheren bzw. selbst implementierten Projektstruktur

- **Vorteile:** Könnte bei einer sehr kleinen Anwendung mit wenigen Ansichten einen einfachen Einstieg ermöglichen und den Einsatz zusätzlicher Abhängigkeiten reduzieren.
- **Nachteile:** Eine eigene Navigation und manuelle Verwaltung der Ansichten würden bei mehreren Seitentypen zusätzlichen Entwicklungs- und Wartungsaufwand verursachen. Auch die Verwaltung von URLs und Navigationszuständen wäre aufwendiger.
- **Warum abgelehnt:** Unsere Anwendung umfasst mehrere miteinander verbundene Ansichten und benötigt eine nachvollziehbare Navigation. Vue Router bietet dafür eine etablierte Lösung, während Vite eine geeignete Entwicklungs- und Build-Umgebung bereitstellt.

## Konsequenzen

### Positiv

- Das Team kann auf vorhandene Kenntnisse in Vue und Vite aufbauen und schneller mit der Entwicklung beginnen.
- Vue Router ermöglicht eine strukturierte Navigation zwischen Übersicht, Detailseiten und personalisiertem Dashboard.
- Die Komponentenstruktur unterstützt die Wiederverwendung von UI-Elementen, beispielsweise Session-Karten, Filtern und Speaker-Informationen.
- Das Setup bleibt überschaubar und passt zum aktuellen Umfang der Anwendung.

### Negativ

- Einige Funktionen, die Nuxt integriert anbietet, müssen bei Bedarf separat ergänzt oder konfiguriert werden.
- Zusätzliche Anforderungen wie Offline-Verfügbarkeit und dauerhafte Speicherung des persönlichen Programms benötigen weitere Lösungen, beispielsweise einen Service Worker und Local Storage oder IndexedDB.
- Mit wachsendem Funktionsumfang müssen wir die Projektstruktur und den Umgang mit gemeinsamem Zustand bewusst organisieren.

### Risiken

- Die selbst definierte Projektstruktur könnte bei zunehmender Komplexität uneinheitlich werden, wenn keine gemeinsamen Konventionen eingehalten werden.
- Die Offline-Verfügbarkeit könnte unvollständig sein, wenn JSON-Daten, Anwendungsdateien und benötigte Ressourcen nicht zuverlässig zwischengespeichert werden.
- Falls später Anforderungen entstehen, die ein umfangreicheres Framework sinnvoll machen, könnte eine Migration zu Nuxt zusätzlichen Aufwand verursachen.


# AI-Log

## Aufgabe B und C
Prompt: Was muss ich bei Aufgabe B machen?  
Übernommen: Orientierung für den Aufgab des ADRs mit Kontext, Alternativen, Entscheidung und Konsequenzen  
Verstanden: Ein ADR dokumentiert nicht nur eine Entscheidung, sondern begründet sie durch den Vergleich verschiedener Möglichkeiten.  
  
Prompt: Welche Ordnerstruktur eignet sich für unser Vue-Projekt?  
Übernommen: Die hybride Struktur mit components/base/, components/feature/, components/layout/, composables/ und views/  
Verstanden: Den richtigen Aufbau.  
  
Prompt: Wie sollen die Komponenten zusammenarbeiten udn was bedeutet Headless?  
Übernommen: Die Trennung von Filterlogik und Oberfläche sowie die Nutzung von Props, Events und Slots.  
Verstanden: Headless bedeutet, dass die Logik unabhängig von der Darstellung funktioniert und dadurch mehrfach verwendet werden kann.  
  
Prompt: Passt mein Architektur ADR zu den Design Tokens meines Kollegen? Was muss ich verbessern?  
Übernommen: Präzisierung zur Verwendung semantischer und komponentenspezifischer Tokens sowie zur Einbindung der tokens.json.  
Verstanden: Desing Tokens müssen mit der Komponentenarchitektur abgestimmt sein. JSON Tokens sind nicht automatisch direkt als CSS-Variablen verfügbar.  
  
Prompt: Wie erstelle ich Diagramme wie Sequenz und Komponentendiagramme in einer Markdown-File?  
Übernommen: Grundgerüst eines Diagrammes  
Verstanden: Wie Diagramme in einer Markdown File erstellt werden.  
  
Prompt: Was muss ich im Komponentendiagramm ändern?  
Übernommen: Die Entfernung unnötiger Abhängigkeiten zwischen Composables und die Anpassung der Verbindungen der MyProgramView.  
Verstanden: Die Views kombinieren die Daten verschiedener Composables und dadurch bleiben die einzelnen Composables unabhänging voneinander.  
  
Prompt: Was muss ich bei Aufgabe C machen?  
Übernommen: Eine Gliederung für das Konzept und einen Überblick über JSON Import, State-Verwaltung, Persistenz und Rehydration.  
Verstanden: Konferenzdaten und persönliche Nutzerauswahl haben unterschiedliche Aufgaben und sollten getrennt verwaltet werden.  
  
Prompt: Sollten wir Session IDs oder vollständige Sessionobjekte speichern?  
Übernommen: Die Entscheidung, nur Session IDs in localStorage zu speichern.  
Verstanden: Dadurch werden doppelte Daten vermieden und Sessioninformationen bleiben zentral in conference-data.json.  
  
Prompt: Wie funktioniert ein gemeinsamer reaktiver State in vue?  
Übernommen: Die Verwendung von useMyProgram() mit einem gemeinsamen ref außerhalb der Composable Function.  
Verstanden: Mehrere Komponenten können denselben State verwenden und reagieren automatisch auf Änderungen.  
  
Prompt: Was passiert mit ungültigen IDs und wann wird der State initialisiert?  
Übernommen: Die Methode removeInvalidIds(validIds) sowie die Reihenfolge: gespeicherte Daten laden, prüfen, State wiederherstellen und anschließend watch aktivieren.  
Verstanden: Gespeicherte Daten müssen überprüft werden. Außerdem ist die Reihenfolge der Initialisierung wichtig, damit bestehende Daten nicht überschrieben werden.  
  
Prompt: Sind meine beiden Dokumente vollständig und was muss ich noch korrigieren?  
Übernommen: Kleinere technische Korrekturen, sprachliche Verbesserungen und Ergänzungen im Sequenzdiagramm.  
Verstanden: Die beiden Konzepten müssen konsistent sein. Besonders wichtig ist, dass die Zuständigkeiten und Datenflüsse in Text und Diagrammen übereinstimmen.  
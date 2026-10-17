# AI-Log

## Aufgabe A
Prompt: [Beschreibung der Konferenz Website] Was für Farben wären für so eine Website passend? ich würde sagen Blautöne oder Grüntöne. was meinst du?
Übernommen: Grobe Ideen für Aspekte der Markenbildung, wie Name und Farbenpalette, aber noch nicht engültig.
Verstanden: Welche Farben sich gut kombinieren lassen und wie sie in der App eingesetzt werden können.

Prompt: Bzgl. des Namen und des Brandings, was wären andere sinnvolle Möglichkeiten mit "pixel"?
Übernommen: "PixelFlow" als Name für die Konferenz-App.
Verstanden: Welche Namen beginnend mit "Pixel" sich für eine Konferenz-App gut eignen.

Prompt: Gib mir einen Design Token Set als JSON für PixelFlow, wo die Hauptfarben sind Navy, Blau, Türkis, Mint und Hellgrau. Lege die Token-Architektur so an, dass ein späterer Theme-Wechsel (Dark Mode, kommt erst später) ohne Strukturbruch möglich ist: primitive Tokens (Rohwerte) von semantischen Tokens (Verwendungszweck, z. B. color-surface , colortext-primary) müssen getrennt werden. Die vollständige Dark-Mode-Palette brauche ich noch nicht, nur die Struktur.
Übernommen: Token Architektur mit den Farb-Tokens.
Verstanden: 'components' referenziert semantische Tokens statt konkreter Hex-Werte. Dadurch bleiben Buttons und Session-Karten unabhängig von der gewählten Farbpalette.

Prompt: Erstelle passende Design Token auch für die Spacing-Skala und die Typografie-Skala und update das JSON mit allen Tokens.
Übernommen: Bearbeitetes JSON mit den fehlenden Tokens für Typografie und Spacing.
Verstanden: Für die Typografie wird eine 16-px-Basis mit einer modularen Skala verwendet. Die Spacing-Skala basiert auf 4 px und eignet sich für Abstände zwischen UI-Elementen, Karten und Layoutbereichen.

Prompt: Gib mir ein Deliverable Dokument (400-600) Wörter mit dem Markenkonzept von PixelFlow und einer Begrüundung der Tokens-Architektur (mind. 3 Kriterien, z. B. Wartbarkeit, Theming-Erweiterbarkeit, Konsistenz) im Markdown Format. 
Übernommen: Das Deliverable Dokument mit ein paar Änderungen.
Verstanden: Semantische Tokens definieren konsistente und wiederverwendbare Gestaltungsregeln.

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
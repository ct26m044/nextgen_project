# AI-Log: Schritt 2: Rendering Strategie & Kernfunktion von Armin Zukorlic  
  
Tool: ChatGpt  
Verantwortungsbereiche: Aufgabe B und Aufgabe D  
  
## Prompts:  
Datum: 1. November 2026  
Prompt: Erinnerst du dich an das Projekt vom letzten mal? Hier sind die Dateien. Wie installiere und verbinde ich Vue Router mit unserem bestehenden Vue Projekt?  
Zweck: Die Navigation zwischen den unterschiedlichen Seiten der Anwendung ermöglichen  
Übernommen: Installation von Vue Router, Erstellung von router/index.ts, Registrierung des Routers in main.ts und Verwendung von RouterView und RouterLink  
Verstanden: Vue Router ermöglicht es, mehrere Seiten über unterschiedliche URLs anzuzeigen, ohne dass für jede Seite eine eigene HTML-Datei benötigt wird  
  
Datum: 02. November 2026  
Prompt: Lass mit useConferenceData() beginnen. Wie soll ich das im Projekt umsetzen? Kannst du mir Schritt für Schritt helfen ohne mir die komplette Lösung zu geben?  
Zweck: Die Konferenzdaten zentral verwalten, damit mehrere Views darauf zugreifen können  
Übernommen: Erstellung von useConferenceData.ts mit dem JSON-Import und Nachschlagetabellen für Sessions, Speaker, Tracks und Räume  
Verstanden: Durch ein zentrales Composable müssen die Konferenzdaten nicht in jeder Komponente separat importiert werden und die Daten können über gemeinsame Funktionen abgerufen werden  
  
Datum: 02. November 2026  
Prompt: Die 20 Sessions werden angezeigt. Das ist unsere conference-data.json. Wie mache ich weiter?  
Zweck: Die Implementierung an die tatsächliche Struktur der Konferenzdaten anpassen  
Übernommen: Funktionen wie getSession(), getSpeaker(), getTrack(), getRoom(), getSessionSpeakers() und getSpeakerSessions()  
Verstanden: Über eindeutige IDs können Sessions, Speaker, Tracks und Räume miteinander verknüpft werden und Map ermöglicht das direkte Nachschlagen anhand einer ID  
  
Datum: 02. November 2026  
Prompt: Ich sehe die Ergebnisse in der Browser-Konsole. Ist damit die Aufgabe abgeschlossen?  
Zweck: Überprüfen, ob die zentrale Datenschicht richtig funktioniert  
Übernommen: Kontrolle von getSessionDetails('s02') und getSpeakerSessions('sp01') sowie das anschließende Entfernen der Testausgaben  
Verstanden: Mit console.log() lassen sich Daten und Funktionen während der Entwicklung kontrollieren  
  
Datum: 05. November 2026  
Prompt: Ich habe useConferenceData() committet. Beginnen wir mit Aufgabe B. Wir machen weiter wie bisher, keine vollständigen Lösungen  
Zweck: Die geforderte Programmübersicht mit allen 20 Sessions implementieren  
Übernommen: Erstellung der ProgramView.vue, Verwendung von v-for zur Anzeige der Sessions sowie Ergänzung der Route /program  
Verstanden: Mit v-for können alle Sessions aus einem Array dynamisch dargestellt werden und die View verwendet dafür die zentrale Datenschicht  
  
Datum: 05. November 2026  
Prompt: Wie soll die vollständige ProgramView.vue mit einem Level-Filter aussehen?  
Zweck: Sessions nach ihrem Schwierigkeitsgrad filtern können  
Übernommen: Verwendung von ref, computed und v-model für einen reaktiven Level-Filter  
Verstanden: ref speichert den ausgewählten Filterwert und computed berechnet die passenden Sessions automatisch neu, wenn sich dieser Wert ändert  
  
Datum: 05. November 2026  
Prompt: Der Level-Filter funktioniert. Wie ergänzen ich Track und Konferenztag?  
Zweck: Alle drei in der Aufgabenstellung geforderten Filter umsetzen  
Übernommen: Zusätzliche Filter für Track und Tag sowie die Kombination über matchesLevel && matchesTrack && matchesDay  
Verstanden: Die UND-Verknüpfung sorgt dafür, dass nur Sessions angezeigt werden, die alle ausgewählten Bedingungen gleichzeitig erfüllen. Leere Filterwerte bedeuten, dass keine Einschränkung erfolgt  
  
Datum: 05. November 2026  
Prompt: Die Filter funktionieren. Wie mache ich weiter und wie sollen die vollständigen Dateien dann aussehen?  
Zweck: Die Filterlogik von der Darstellung trennen und die geplante Architektur einhalten  
Übernommen: Erstellung von useSessionFilter.ts mit filteredSessions, den Filterzuständen und der Methode reset()  
Verstanden: Ein Composable kann Logik unabhängig von der Benutzeroberfläche bereitstellen und dadurch kann dieselbe Filterfunktion später auch für „Mein Programm“ verwendet werden  
  
Datum: 05. November 2026  
Prompt: Die Filter funktionieren weiterhin. Was kommt denn als Nächstes?  
Zweck: Die Darstellung einzelner Sessions aus der Programmübersicht auslagern  
Übernommen: Erstellung von SessionCard.vue und Übergabe der Session-Daten über die Props  
Verstanden: Eine wiederverwendbare Komponente übernimmt die Darstellung einer Session. Die ProgramView muss dadurch nicht mehr das gesamte HTML für jede Karte enthalten  
  
Datum: 06. November 2026  
Prompt: Lass weiter mit Aufgabe D machen. Ist das weniger Aufwand als die Session-Filterung?  
Zweck: Die Speaker-Profilseiten für alle 18 Speaker implementieren  
Übernommen: Erstellung von SpeakerDetailView.vue mit useRoute(), computed(), getSpeaker() und getSpeakerSessions() sowie der dynamischen Route /speakers/:id  
Verstanden: Es ist nicht notwendig, für jeden Speaker eine eigene Vue-Datei zu erstellen. Eine dynamische View kann anhand der ID in der URL alle 18 Profile anzeigen  
  
Datum: 06. November 2026  
Prompt: Hier ist die SessionDetail.vue meines Teamkollegen. Es fehlt nur die Verlinkung oder?  
Zweck: Die Zusammenarbeit zwischen Session-Detailseiten und Speaker-Profilen überprüfen  
Übernommen: Ergänzung von RouterLink bei den Speakern in der Session-Detailansicht und Überprüfung der Links in beide Richtungen  
Verstanden: Durch dynamische Routen können Sessions auf ihre Speaker und Speaker auf ihre Sessions verweisen. Beide Funktionen verwenden dieselben Daten und müssen keine Informationen doppelt speichern  
  
Datum: 08. November 2026  
Prompt: Können wir Aufgabe B und D anhand der Aufgabenstellung überprüfen? Welche Dateien soll ich dir schicken zur Überprüfung?  
Zweck: Feststellen, ob alle Anforderungen umgesetzt wurden und ob noch Fehler oder fehlende Bestandteile vorhanden sind  
Übernommen: Überprüfung von ProgramView.vue, SessionCard.vue, useSessionFilter.ts, SpeakerDetailView.vue und router/index.ts  
Verstanden: Eine funktionierende Anwendung allein reicht nicht aus. Die Implementierung muss mit der Aufgabenstellung und den dokumentierten Architekturentscheidungen übereinstimmen. Auch die Dokumentation und Verlinkung der einzelnen Funktionen gehören zur Abgabe
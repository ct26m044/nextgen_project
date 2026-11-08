# Frontend Projekt von David Tosa und Armin Zukorlic  
  
## Anleitung  

Voraussetzung: Node.js und npm  
1. Repository downloaden/klonen  
Das Repository kann gedownloaded werden oder mit dieser URL geklont werden:  
https://github.com/ct26m044/nextgen_project.git  
  
2. Abhängigkeiten installieren:  
Der Projektordner muss im Terminal geöffnet werden und mit "npm install" die Abhängigkeiten installieren   
  
3. Server starten:  
Den localhost Server mit "npm run dev" starten  
  
4. Build erstellen:  
npm run build  
  
5. Localhost Server aufrufen  
Den Localhost Server im Browser öffnen "https://localhost:####"  
  
  
## Schritt 2: Rendering Strategie und Kernfunktionen  
Wir verwenden CSR mit Vue 3 und Vue Router. Die Konferenzdaten werden aus der lokalen conference-data.json importiert und zentral über useConferenceData() bereitgestellt.  
  
### Session Übersicht (B)  
Die Programmübersicht kann man unter /program erreichen und zeigt alle 20 Sessions.  
  
Die Sessions können nach Track, Konferenztag und Level gefiltert werden und können auch gemeinsam kombiniert angewendet werden und auch zurückgesetzt werden.  
Die Filterlogik befindet sich in useSessionFilter.ts und die Darstellung der einzelnen Sessions erfolgt über SessionCard.vue.  
  
Wir haben CSR gewählt, weil die Filterung reaktiv im Browser erfolgt und keine zusätzlichen Serveranfragen notwendig sind.  
  
### Speaker Profile (D)  
Die Speaker Profile sind über /speaker/:id erreichbar.  
  
Für alle 18 Speaker werden Name, Titel, Unternehmen, Biografie und die zugehörigen Sessions angezeigt.  
Die Sessions verlinken auf ihre jeweiligen Detailseiten und umgekehrt können die Speaker Profile über die Session Detailseiten aufgerufen werden.  
  
Auch hier verwenden wir CSR, da die Daten statisch vorliegen und über Vue Router anhand der jeweiligen Speaker ID dargestellt werden.  
  
### Rendering ADR  
Die Entscheidung zu den Rendering Strategien sind in docs/schritt2/01-rendering-strategie-adr.md dokumentiert.
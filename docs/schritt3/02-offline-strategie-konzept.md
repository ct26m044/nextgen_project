# Offline-Strategie-Konzept Pixelflow  
  
## Ausgangssituation  
Wir wollen es ermöglichen, dass wenn z. B. während einer Konferenz die Internetverbindung abbricht oder überlastet wird, es trotzdem möglich ist nach seinem ersten Onlinebesuch, die Plattform besuchen zu können und sie möglichst zuverlässig funktioniert.  
Die Caching Strategie richtet sich hier nach den Eigenschaften der jeweiligen Daten und dort unterscheiden wir zwischen Konferenzdaten, persönlichen Benutzerdaten sowie statischen Anwendungsdateien.  
  
## Sessions und Speaker Daten  
Gewählte Strategie: Cache First  
  
Die Daten der Sessions und Speaker ändern sich eher selten, nachdem das Konferenzprogramm veröffentlicht wird. Aus diesem Grund wählen wir Cache First für diese Informationen.  
Bei dieser Strategie überprüft der Service Worker, ob die angeforderten Daten bereits im Cache vorhanden sind. Sind die vorhanden, werden sie direkt daraus geladen und wenn nicht, dann erfolgt eine Netzwerkanfrage. Dadurch können Besucher auch bei schlechterem Internet das Programm und die Speaker Profile aufrufen.  
Eine Alternative wäre Stale While Revalidate. Hier würden vorhandene Daten sofort aus dem Cache angezeigt werden, während im Hintergrund eine aktuelle Version geladen wird. Diese Strategie wäre sinnvoll, wenn während der Konferenz häufig Raum- oder Zeitänderungen stattfinden.  
  
Jedoch entscheiden wir uns zunächst für Cache First, da die Konferenzdaten weitgehend statisch sind. Ein Nachteil ist, dass kurzfristige Änderungen nicht automatisch bei allen Benutzern ankommen. Für eine produktive Konferenzanwendung müssten wir deshalb zusätzlich eine Aktualisierungsmöglichkeit miteinberechnen.  
  
## Persönliches Programm  
Gewählte Strategie: localStorage  
  
Die persönliche Sessionauswahl wird bereits über localStorage gespeichert und deswegen ist dafür keine zusätzliche Netzwerk Caching Strategie notwendig.  
Wenn Besucher Sessions zu ihrem Programm hinzufügen oder daraus entfernen, werden die ausgewählten IDs lokal gespeichert und beim erneuten Öffnen können diese Informationen dann wiederhergestellt werden.  
Damit dies auch offline funktioniert, muss allerdings die Anwendung selbst erreichbar sein und deswegen wird die App-Shell unabhängig davon gecacht.  
Jedoch ist eine Einschränkung hier, dass die Daten nur im jeweiligen Browser gespeichert werden. Werden die Browserdaten gelöscht oder wird ein anderes Gerät verwendet, steht die Auswahl dort nicht automatisch zur Verfügung.  
  
## Statische Assets und App-Shell  
Gewählte Strategie: Precaching mit Workbox  
  
Die App-Shell besteht aus grundlegenden Dateien der Anwendung. Diese werden beim Produktions-Build durch Workbox in eine Precache Liste aufgenommen.  
Beim ersten erfolgreichen Online-Laden werden dann die benötigten Dateien gespeichert und danach kann die Anwendung ohne Netzwerkverbindung starten. Bei einer neuen Anwendungsversion wird der Precache durch den aktualisierten Service Worker erneuert und dadurch ist die App-Shell nicht auf eine einzige Version beschränkt.  
  
## Verhalten bei Verbindungsabbruch  
Wenn die Verbindung unterbrochen wird, sollen bereits gespeicherte Programm- und Speaker-Daten weiterhin verfügbar sein. Das persönliche Programm sollte dabei auch geöffnet und verändert werden können.  
Beim ersten Besuch ohne Internetverbindung sind noch keine gecachten Dateien bereit. Hier kann die Anwendung nicht vollständig geladen werden und diesen Nachteil haben wir bewusst akzeptiert, da zunächst mindestens ein erfolgreicher Onlinebesuch erforderlich ist.
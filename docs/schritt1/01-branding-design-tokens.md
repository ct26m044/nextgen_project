# PixelFlow – Markenkonzept und Design-Token-Architektur

## 1. Markenkonzept

### Markenidentität und Positionierung

PixelFlow ist die Marke der zweitägigen Web-Frontend-Konferenz „FrontendNow“ und der dazugehörigen digitalen Plattform. Der Name verbindet zwei zentrale Aspekte: „Pixel“ stellt den Bezug zu Webentwicklung, digitalen Interfaces und visueller Gestaltung her, während „Flow“ für ein reibungsloses, intuitives und nutzerzentriertes Erlebnis steht. Zusammen vermitteln die beiden Begriffe sowohl den technischen Schwerpunkt der Konferenz als auch den Anspruch, die Teilnahme möglichst einfach und angenehm zu gestalten.

PixelFlow richtet sich an Web-Frontend-Entwickler:innen und alle, die sich für moderne Webtechnologien, Interface-Design und digitale Erlebnisse interessieren. Im Unterschied zu einer generischen Konferenz-Website, die lediglich Informationen und einen statischen Zeitplan bereitstellt, unterstützt PixelFlow die Besucher:innen aktiv bei der Planung ihrer Konferenztage. Sessions können nach Track, Tag, Level und Speaker gefiltert werden. Zusätzlich lassen sich Speaker-Profile erkunden und persönliche Programme zusammenstellen, die auch offline verfügbar sind. Die Plattform stellt damit nicht nur Konferenzinformationen bereit, sondern ermöglicht eine individuellere und flexiblere Konferenzerfahrung.

### Visuelle Gestaltung und Farbpalette

Die visuelle Identität basiert auf einer Farbpalette aus Navy, Blau, Türkis, Mint und Hellgrau. Navy bildet eine ruhige, professionelle Grundlage, während Blau den technischen Charakter der Marke unterstreicht. Türkis und Mint setzen frische, moderne Akzente und verleihen der Gestaltung einen eigenständigeren Charakter. Hellgrau ergänzt die Palette als neutrale Farbe für Hintergründe und Oberflächen.

Diese Kombination passt zum digitalen und dynamischen Charakter einer Event-Plattform, ohne auf die austauschbare Ästhetik einer typischen Technologie-Website beschränkt zu bleiben. Insbesondere die Kombination aus Blau-, Türkis- und Grüntönen schafft eine wiedererkennbare visuelle Identität, die sowohl technische Kompetenz als auch Zugänglichkeit vermittelt. Gleichzeitig bietet die Palette genügend Flexibilität für unterschiedliche UI-Zustände, etwa aktive Filter, ausgewählte Sessions und interaktive Elemente.

Die Gestaltung soll klar, strukturiert und gut lesbar sein. Eine konsistente Typografie, einheitliche Abstände und ausreichend Kontrast unterstützen die Orientierung innerhalb des Konferenzprogramms. Die Token-Struktur ermöglicht außerdem die spätere Ergänzung eines Dark Modes, ohne die grundlegende Markenidentität zu verändern.

## 2. Design-Token-Architektur

Die Design-Tokens sind in primitive Tokens, semantische Tokens und Komponenten-Tokens gegliedert. Diese Trennung schafft eine gemeinsame Grundlage für Farben, Typografie und Spacing.

### Wartbarkeit

Primitive Tokens definieren die grundlegenden Werte, beispielsweise Hex-Farben, Schriftgrößen und Abstände. Semantische Tokens ordnen diesen Werten einen Verwendungszweck zu, etwa `color-text-primary` oder `color-surface`. Änderungen an einer Farbskala können dadurch zentral vorgenommen werden, ohne sämtliche Komponenten einzeln anpassen zu müssen.

### Erweiterbarkeit und Theming

Die Trennung von Rohwerten und Verwendungszwecken erleichtert die spätere Einführung eines Dark Modes. Dabei können semantische Tokens im Dark Theme auf andere primitive Werte verweisen, während ihre Namen und ihre Bedeutung unverändert bleiben. Komponenten müssen dadurch nicht für jedes Theme separat gestaltet werden. Die Architektur schafft somit eine Grundlage für zukünftige visuelle Erweiterungen.

### Konsistenz und Wiederverwendbarkeit

Gemeinsame Farb-, Typografie- und Spacing-Skalen reduzieren willkürliche Einzelentscheidungen. Semantische Tokens wie `text-body`, `text-h1` und `space-card-padding` definieren wiederverwendbare Gestaltungsregeln. Komponenten-Tokens greifen auf diese Definitionen zurück und sorgen dafür, dass beispielsweise Session-Karten und Buttons über die gesamte Plattform hinweg konsistent gestaltet werden.

### Barrierefreiheit

Die zentrale Definition von Text- und Hintergrundfarben erleichtert die systematische Prüfung der WCAG-AA-Kontrastanforderungen. Normaler Text benötigt mindestens ein Kontrastverhältnis von 4,5:1, großer Text mindestens 3:1. Durch die dokumentierten semantischen Farbpaare können Kontrastprüfungen gezielt durchgeführt und bei Änderungen erneut vorgenommen werden.

| Textfarbe | Hintergrundfarbe | Kontrast | Verwendung | WCAG AA |
|---|---|---:|---|---|
| Navy `#101C2C` | Weiß `#FFFFFF` | 17,15:1 | Überschriften und Fließtext | Bestanden |
| Navy `#101C2C` | Hellgrau `#F9FAFB` | 16,41:1 | Text auf Seitenhintergrund | Bestanden |
| Grau `#374151` | Hellgrau `#F9FAFB` | 9,86:1 | Sekundärer Fließtext | Bestanden |
| Grau `#6B7280` | Hellgrau `#F9FAFB` | 4,63:1 | Hinweise und Zusatzinformationen | Bestanden |
| Weiß `#FFFFFF` | Blau `#2563EB` | 5,17:1 | Primäre Buttons mit weißer Beschriftung | Bestanden |
| Navy `#101C2C` | Türkis `#06B6D4` | 7,06:1 | Text auf türkisfarbenen Akzentflächen | Bestanden |
| Navy `#101C2C` | Mint `#34D399` | 8,92:1 | Text auf mintfarbenen Hervorhebungen | Bestanden |
| Weiß `#FFFFFF` | Türkis `#06B6D4` | 2,43:1 | Weißer Text auf türkisfarbenen Flächen | Nicht bestanden |
| Weiß `#FFFFFF` | Mint `#34D399` | 1,92:1 | Weißer Text auf mintfarbenen Flächen | Nicht bestanden |

Insgesamt verbindet die Token-Architektur eine wiedererkennbare Markenidentität mit technischer Wartbarkeit, konsistenter Gestaltung und langfristiger Erweiterbarkeit.
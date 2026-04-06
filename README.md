# CartNet - Einkaufslisten-Anwendung

CartNet ist eine einfache Full-Stack-Webanwendung zur Verwaltung einer Einkaufsliste. Das Projekt besteht aus einem Next.js-Frontend und einem Express.js-Backend, die vollständig mit Docker containerisiert sind.

## Features

*   Ansprechender Header mit Projektnamen "CartNet" und Slogan "Deine geheime Einkaufsliste. Verzetteln war gestern.".
*   Hinzufügen neuer Artikel zur Liste.
*   Markieren von Artikeln als "gekauft".
*   Löschen von Artikeln aus der Liste.
*   Dark-Mode-Benutzeroberfläche, erstellt mit Material-UI.
*   Persistente Speicherung der Daten in einer MongoDB-Datenbank.

## Verwendete Technologien

*   **Frontend**:
    *   Next.js (React Framework)
    *   TypeScript
    *   Material-UI (MUI) für UI-Komponenten und Styling

*   **Backend**:
    *   Node.js
    *   Express.js
    *   TypeScript
    *   Mongoose (zur Interaktion mit MongoDB)

*   **Datenbank**:
    *   MongoDB

*   **Containerisierung**:
    *   Docker
    *   Docker Compose

## Setup und Installation

Folge diesen Schritten, um das Projekt lokal auszuführen.

### 1. Voraussetzungen

*   [Docker](https://www.docker.com/get-started) und Docker Compose müssen auf deinem System installiert sein.

### 2. Repository klonen

Klone dieses Repository auf deine lokale Maschine:

```bash
git clone <repository-url>
cd cartnet
```

### 3. Umgebungsvariablen einrichten

Die Kommunikation zwischen den Services wird über Umgebungsvariablen gesteuert.

1. Kopiere die Beispiel-Umgebungsdatei:
```bash
cp .env.example .env
```

2. Öffne die neu erstellte .env-Datei und passe den BACKEND_HOST_PORT bei Bedarf an. Standardmäßig ist dies Port 5001. Stelle sicher, dass dieser Port auf deinem System frei ist.

### 4. Anwendung starten

Führe den folgenden Befehl im Hauptverzeichnis des Projekts aus:

```bash
docker-compose up --build

# Alternative und neuere Syntax:
docker compose up --build
```

*   Dieser Befehl baut die Docker-Images für Frontend und Backend, lädt das MongoDB-Image herunter und startet alle drei Container.
*   Der `--build`-Flag sorgt dafür, dass alle Abhängigkeiten (z.B. `npm install`) sauber innerhalb der Docker-Container ausgeführt werden.

Nach dem erfolgreichen Start sind die Dienste verfügbar:

*   **Frontend**: http://localhost:3000
*   **Backend API**: http://localhost:5001

## Hinweis zu externen UI-Bibliotheken

Das Frontend verwendet **Material-UI (MUI)** als primäre Komponenten- und Styling-Bibliothek. MUI ermöglicht die schnelle Entwicklung einer modernen und responsiven Benutzeroberfläche und ist bereits vollständig in das Next.js-Projekt integriert (`ThemeRegistry.tsx`).

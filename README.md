# Bazil — Meal Planning Website

Personalised weekly meal plans with Instacart grocery ordering.

## Deploy on Railway

1. Push this folder to a GitHub repo (or use `railway up` from CLI)
2. Go to [railway.app](https://railway.app), create a new project
3. Select **Deploy from GitHub repo**
4. In the project's **Variables** panel, add `INSTACART_API_KEY` with your Instacart Developer Platform key (e.g. `keys.xxxxx...`)
5. Railway auto-detects Node.js, installs dependencies and runs `node server.js`
6. Once deployed, go to **Settings → Networking → Generate Domain** to get your public URL

## Local Development

PowerShell:
```powershell
npm install
$env:INSTACART_API_KEY = "keys.your_key_here"
npm start
# Open http://localhost:3000
```

bash/zsh:
```bash
npm install
INSTACART_API_KEY=keys.your_key_here npm start
```

## Stack

- Single HTML file (vanilla JS, no frameworks)
- Express.js static server with a server-side proxy for the Instacart API
- The API key is held only on the server (never shipped to the browser)

# Bazil — Meal Planning Website

Personalised weekly meal plans with Instacart grocery ordering.

## Deploy on Railway

1. Push this folder to a GitHub repo (or use `railway up` from CLI)
2. Go to [railway.app](https://railway.app), create a new project
3. Select **Deploy from GitHub repo**
4. Railway will auto-detect Node.js, install dependencies and run `node server.js`
5. Once deployed, go to **Settings → Networking → Generate Domain** to get your public URL

That's it — no environment variables needed. The Instacart API key is embedded in the client-side code.

## Local Development

```bash
npm install
npm start
# Open http://localhost:3000
```

## Stack

- Single HTML file (vanilla JS, no frameworks)
- Express.js static server for production
- Instacart Developer Platform API for grocery ordering

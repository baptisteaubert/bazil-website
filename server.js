const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const INSTACART_API_URL = 'https://connect.instacart.com/idp/v1/products/products_link';

app.use(express.json({ limit: '256kb' }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    } else if (filePath.endsWith('.ttf') || filePath.endsWith('.woff2')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    } else if (filePath.endsWith('.png') || filePath.endsWith('.jpg')) {
      res.setHeader('Cache-Control', 'public, max-age=604800');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

// Server-side proxy for Instacart products_link — keeps the API key off the client.
app.post('/api/instacart/products-link', async (req, res) => {
  const apiKey = process.env.INSTACART_API_KEY;
  if (!apiKey) {
    console.error('INSTACART_API_KEY env var is not set');
    return res.status(500).json({ error: 'Server misconfigured: missing API key' });
  }

  try {
    const upstream = await fetch(INSTACART_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(req.body)
    });

    const data = await upstream.json().catch(() => ({}));
    res.status(upstream.status).json(data);
  } catch (err) {
    console.error('Instacart proxy error:', err);
    res.status(502).json({ error: 'Failed to reach Instacart API' });
  }
});

// SPA fallback — always serve index.html for any other route
app.get('*', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Bazil is running on port ${PORT}`);
});

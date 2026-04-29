const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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

// SPA fallback — always serve index.html for any route
app.get('*', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Bazil is running on port ${PORT}`);
});

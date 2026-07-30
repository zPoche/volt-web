/**
 * Plesk Node.js / Passenger — liefert den Vite-Build aus dist/.
 * Application Startup File in Plesk: server.js
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
};

// Phusion Passenger (Plesk Node.js)
const Passenger = globalThis.PhusionPassenger;
if (typeof Passenger !== 'undefined') {
  Passenger.configure({ autoInstall: false });
}

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function safeJoin(base, reqPath) {
  const decoded = decodeURIComponent(reqPath.split('?')[0] || '/');
  const joined = path.normalize(path.join(base, decoded));
  if (!joined.startsWith(base)) return null;
  return joined;
}

const server = http.createServer((req, res) => {
  let urlPath = req.url || '/';
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const file = safeJoin(root, urlPath);
  if (!file) return send(res, 403, 'Forbidden');

  fs.readFile(file, (err, data) => {
    if (!err) {
      return send(res, 200, data, {
        'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
        'Cache-Control': path.extname(file) === '.html' ? 'no-cache' : 'public, max-age=604800',
      });
    }

    // SPA-Fallback
    fs.readFile(path.join(root, 'index.html'), (err2, html) => {
      if (err2) return send(res, 404, 'Build fehlt — npm run build ausführen (dist/).');
      send(res, 200, html, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      });
    });
  });
});

const listenTarget =
  typeof Passenger !== 'undefined' ? 'passenger' : Number(process.env.PORT) || 3000;

server.listen(listenTarget, () => {
  console.log(`[volt] serving ${root} on ${listenTarget}`);
});

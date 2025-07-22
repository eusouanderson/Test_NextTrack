import app from './app.ts';

const PORT = process.env.PORT || 3000;

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});
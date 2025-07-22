import { Hono } from 'hono';
import path from 'path';
import { serveFile } from '../utils/fileServe.ts';


const docs = new Hono();

docs.get('/openai', (c) =>
  serveFile(c, path.resolve('./src/docs/openapi.yaml'), 'application/x-yaml')
);

export default docs;

import { Hono } from 'hono';
import docsRoutes from './routes/docs.route.ts';
import contactsRoutes from './routes/contacts.route.ts';

const app = new Hono();

app.route('/docs', docsRoutes);
app.route('/contacts', contactsRoutes);

export default app;

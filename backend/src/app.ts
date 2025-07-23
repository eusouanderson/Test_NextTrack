import { Hono } from 'hono';
import docsRoutes from './routes/docs.route.ts';
import contactsRoutes from './routes/contacts.route.ts';
import { cors } from 'hono/cors'

const app = new Hono();

app.use('*', cors({
  origin: '*', 
  credentials: true,
  
}));

app.route('/docs', docsRoutes);
app.route('/contacts', contactsRoutes);

export default app;

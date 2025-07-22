import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

console.log('CWD:', process.cwd());
console.log('Migrations dir:', path.resolve(process.cwd(), 'src/migrations'));
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const configPgMigrate = {
  direction: 'up',
  dir: path.resolve(process.cwd(), 'src/migrations'),
  migrationsTable: 'pgmigrations',
  databaseUrl: process.env.DATABASE_URL,
  log: (...args) => console.log('[PGMIGRATE LOG]:', ...args),
  ts: true,
};

export default configPgMigrate;

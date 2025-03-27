import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

/**
 * Database configuration object with environment variables
 */
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'playground_db',
  port: Number(process.env.DB_PORT) || 5432,
  // Add connection pool settings
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
  connectionTimeoutMillis: 2000, // How long to wait before timing out when connecting a new client
};

/**
 * Create a new pool instance with the configuration
 */
const pool = new Pool(dbConfig);

// Handle pool errors
pool.on('error', err => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Handle pool connection
pool.on('connect', () => {
  console.log('Connected to database');
});

/**
 * Create a drizzle instance with the pool and schema
 */
export const db = drizzle(pool, { schema });

/**
 * Test the database connection
 */
export async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Database connection successful');
    client.release();
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

/**
 * Close the database pool
 */
export async function closePool() {
  await pool.end();
}

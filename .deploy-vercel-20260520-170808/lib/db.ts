import { Pool } from "pg";

let pool: Pool | null = null;

export function hasCloudPersistence() {
  return Boolean(process.env.DATABASE_URL);
}

export function getPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;

  const ssl = /ssl(mode)?=require|ssl=true/i.test(connectionString)
    ? { rejectUnauthorized: false }
    : undefined;

  pool ??= new Pool({
    connectionString,
    ssl,
    max: 5,
    connectionTimeoutMillis: 10_000
  });
  return pool;
}

export async function ensureLoadoutsTable() {
  const db = getPool();
  if (!db) return false;

  await db.query(`
    CREATE EXTENSION IF NOT EXISTS pgcrypto;

    CREATE TABLE IF NOT EXISTS loadouts (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      objective text,
      warframe text NOT NULL,
      primary_weapon text,
      secondary_weapon text,
      melee_weapon text,
      notes text,
      created_at timestamptz NOT NULL DEFAULT now()
    );

    CREATE INDEX IF NOT EXISTS loadouts_created_at_idx ON loadouts (created_at DESC);
  `);

  return true;
}

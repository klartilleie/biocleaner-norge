import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const dbUrl = process.env.BIOCLEANER_DB || process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString: dbUrl,
  ssl: dbUrl?.includes('render.com') ? { rejectUnauthorized: false } : undefined,
});

export const db = drizzle(pool, { schema });

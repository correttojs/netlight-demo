import { sql } from "@vercel/postgres";

export async function alterTable() {
	// Add integer columns with raw SQL
	const alterTable = await sql.query(`
      ALTER TABLE users 
      ADD COLUMN redcards_coefficient FLOAT,
      ADD COLUMN goals_coefficient FLOAT;
  `);
	console.log(`Added redCards and goals columns to "users" table`);

	return {
		alterTable,
	};
}

export async function createTable() {
	await sql.query("DROP TABLE IF EXISTS users");
	const createTable = await sql.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      goals INTEGER DEFAULT 0,
      redcards INTEGER DEFAULT 0,
      redcards_coefficient FLOAT,
      goals_coefficient FLOAT,
	  image VARCHAR(255)  NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
	console.log(`Created "users" table`);

	return {
		createTable,
	};
}

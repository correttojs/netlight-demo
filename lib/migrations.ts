"use server";
import { sql } from "@vercel/postgres";

export async function alterTable() {
	// Add integer columns with raw SQL
	const alterTable = await sql.query(`
      ALTER TABLE players 
      ADD COLUMN redcards_coefficient FLOAT,
      ADD COLUMN goals_coefficient FLOAT;
  `);
	console.log(`Added redCards and goals columns to "players" table`);

	return {
		alterTable,
	};
}

export async function createTable() {
	await sql.query("DROP TABLE IF EXISTS players");
	const createTable = await sql.query(`
    CREATE TABLE IF NOT EXISTS players (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      goals INTEGER DEFAULT 0,
      redcards INTEGER DEFAULT 0,
      redcards_coefficient FLOAT,
      goals_coefficient FLOAT,
	  image VARCHAR(255)  NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
  `);
	console.log(`Created "players" table`);

	return {
		createTable,
	};
}

async function createPlayer(
	name: string,
	goals: number,
	redcards: number,
	redcards_coefficient: number,
	goals_coefficient: number,
	image: string,
) {
	await sql.query(
		`INSERT INTO players (name, goals, redcards, redcards_coefficient, goals_coefficient, image)
         VALUES ($1, $2, $3, $4, $5, $6)`,
		[
			name,
			goals,
			redcards,
			redcards_coefficient,
			goals_coefficient,
			`/sample-images/${image}`,
		],
	);
}

export async function seedPlayers() {
	try {
		await createTable();
	} catch (e) {
		console.log(e);
	}
	try {
		await createPlayer("Lionel Messi", 800, 0, 0.0, 1.2, "messi.jpg");
		await createPlayer("Cristiano Ronaldo", 850, 11, 0.2, 1.1, "ronaldo.jpg");
		await createPlayer("Sergio Ramos", 101, 28, 0.8, 0.3, "ramos.jpg");
	} catch (e) {
		console.log(e);
	}
}

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

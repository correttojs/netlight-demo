import {
	pgTable,
	serial,
	text,
	integer,
	timestamp,
	decimal,
} from "drizzle-orm/pg-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const PlayersTable = pgTable("players", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	redCards: integer("redcards"),
	redCardsCoefficient: decimal("redcards_coefficient"),
	goals: integer("goals"),
	goalsCoefficient: decimal("goals_coefficient"),
	image: text("image").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Player = InferSelectModel<typeof PlayersTable>;
export type NewPlayer = InferInsertModel<typeof PlayersTable>;

// Connect to Vercel Postgres
export const db = drizzle(sql);

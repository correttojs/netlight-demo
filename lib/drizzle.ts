import {
	pgTable,
	serial,
	text,
	integer,
	timestamp,
	uniqueIndex,
	decimal,
} from "drizzle-orm/pg-core";
import type { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const UsersTable = pgTable("users", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	redCards: integer("redcards"),
	redCardsCoefficient: decimal("redcards_coefficient"),
	goals: integer("goals"),
	goalsCoefficient: decimal("goals_coefficient"),
	image: text("image").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type User = InferSelectModel<typeof UsersTable>;
export type NewUser = InferInsertModel<typeof UsersTable>;

// Connect to Vercel Postgres
export const db = drizzle(sql);

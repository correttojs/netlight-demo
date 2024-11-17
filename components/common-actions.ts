"use server";
import { db, type NewPlayer, PlayersTable } from "@/lib/drizzle";
import { put } from "@vercel/blob";
import { eq } from "drizzle-orm";
import React from "react";
import { seedPlayers } from "@/lib/migrations";

export async function createUser(_: unknown, formData: FormData) {
	try {
		const file = formData.get("image") as File;
		const blob = await put(file.name, file, {
			access: "public",
		});

		const res = await db.insert(PlayersTable).values([
			{
				name: formData.get("name"),
				image: blob.url,
				goalsCoefficient: formData.get("goalsCoefficient"),
				redCardsCoefficient: formData.get("redCardsCoefficient"),
			},
		] as NewPlayer[]);
	} catch {
		return "Failed to create the user";
	}
}

export async function deleteUser(id: number) {
	const res = await db.delete(PlayersTable).where(eq(PlayersTable.id, id));

	console.log(res);
}

export const getOrSeedPlayers = React.cache(async () => {
	try {
		const res = await getPlayersRaw();
		return res;
	} catch (e) {
		if (
			e instanceof Error &&
			e.message === 'relation "players" does not exist'
		) {
			console.log("table not found");
			await seedPlayers();
			const res = await getPlayersRaw();
			return res;
		}
		throw e;
	}
});

export type GetPlayersResponse = Awaited<ReturnType<typeof getOrSeedPlayers>>;

const getPlayersRaw = async () => {
	const startTime = performance.now();
	await new Promise((resolve) => setTimeout(resolve, 500));
	const players = await db
		.select()
		.from(PlayersTable)
		.orderBy(PlayersTable.name);
	const duration = performance.now() - startTime;
	return {
		players,
		duration,
	};
};

export async function reset() {
	const res = await db.update(PlayersTable).set({
		goals: 0,
		redCards: 0,
	});

	console.log(res);
}

export async function playMatch() {
	const players = await db.select().from(PlayersTable);
	const playerScores = players.map((player) => {
		const newGoals = Math.round(
			Math.random() * 3 * Number(player.goalsCoefficient || 0),
		);
		const newRedCards = Math.round(
			Math.random() * 3 * Number(player.redCardsCoefficient || 0),
		);

		const goalScore = (player.goals ?? 0) + newGoals;
		const redCardScore = (player.redCards ?? 0) + newRedCards;

		return {
			id: player.id,
			name: player.name,
			redCardScore,
			goalScore,
		};
	});

	// Update each player's scores in the database
	await Promise.all(
		playerScores.map((player) =>
			db
				.update(PlayersTable)
				.set({
					redCards: player.redCardScore,
					goals: player.goalScore,
				})
				.where(eq(PlayersTable.id, player.id)),
		),
	);
}

import { db, type NewUser, UsersTable } from "@/lib/drizzle";
import { eq } from "drizzle-orm";

export async function GET() {
	const players = await db.select().from(UsersTable);

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
				.update(UsersTable)
				.set({
					redCards: player.redCardScore,
					goals: player.goalScore,
				})
				.where(eq(UsersTable.id, player.id)),
		),
	);

	return new Response(JSON.stringify({ playerScores }));
}

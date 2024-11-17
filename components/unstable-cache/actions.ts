"use server";
import { revalidatePath, unstable_cache } from "next/cache";
import { getOrSeedPlayers } from "../common-actions";

export async function revalidateUnstableCachePath() {
	await revalidatePath("/unstable-cache");
}

export const getPlayersUnstableCache = unstable_cache(
	async () => getOrSeedPlayers(),
	["players-unstable-cache"],
);

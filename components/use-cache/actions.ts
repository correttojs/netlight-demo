"use server";
import { unstable_cacheTag as cacheTag, revalidateTag } from "next/cache";
import { getOrSeedPlayers } from "../common-actions";

export async function revalidatePlayers() {
	await revalidateTag("players");
}

export async function getPlayersUseCache() {
	"use cache";
	cacheTag("players");
	return getOrSeedPlayers();
}

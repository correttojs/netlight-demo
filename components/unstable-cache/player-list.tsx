import {
	getPlayersUnstableCache,
	revalidateUnstableCachePath,
} from "./actions";
import { PlayerListBase } from "../player-list";

export const dynamic = "force-dynamic";

export async function PlayerListUnstableCache() {
	const { players } = await getPlayersUnstableCache();

	return (
		<PlayerListBase onRemoved={revalidateUnstableCachePath} players={players} />
	);
}

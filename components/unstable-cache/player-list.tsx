import {
	getPlayersUnstableCache,
	revalidateUnstableCachePath,
} from "./actions";
import { PlayerListBase } from "../player-list";

export async function PlayerListUnstableCache() {
	const { players } = await getPlayersUnstableCache();

	return (
		<PlayerListBase onRemoved={revalidateUnstableCachePath} players={players} />
	);
}

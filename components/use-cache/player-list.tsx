import { getPlayersUseCache, revalidatePlayers } from "./actions";
import { PlayerListBase } from "../player-list";

export async function PlayerListUseCache() {
	const { players } = await getPlayersUseCache();

	return <PlayerListBase onRemoved={revalidatePlayers} players={players} />;
}

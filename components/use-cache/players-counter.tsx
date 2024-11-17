import { getPlayersUseCache, revalidatePlayers } from "./actions";
import PlayButton from "../play-button";

export async function PlayerCounterUseCache() {
	const { players, duration } = await getPlayersUseCache();
	return (
		<div className="flex flex-row gap-2 items-center">
			<PlayButton onPlayed={revalidatePlayers} />
			<div className="text-sm text-gray-500">
				Fetched {players.length} players in {Math.round(duration)}ms
			</div>
		</div>
	);
}

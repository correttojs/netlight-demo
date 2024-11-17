import {
	getPlayersUnstableCache,
	revalidateUnstableCachePath,
} from "./actions";
import PlayButton from "../play-button";

export async function PlayerCounterUnstableCache() {
	const { players, duration } = await getPlayersUnstableCache();
	return (
		<div className="flex flex-row gap-2 items-center">
			<PlayButton onPlayed={revalidateUnstableCachePath} />
			<div className="text-sm text-gray-500">
				Fetched {players.length} players in {Math.round(duration)}ms
			</div>
		</div>
	);
}

import { Suspense } from "react";
import Placeholders from "@/components/placeholders";
import { PlayerListSWR } from "@/components/use-swr/player-list";
import { CreatePlayerSWR } from "@/components/use-swr/create-player";
import { PlayerCounterSWR } from "@/components/use-swr/players-counter";
import { getPlayersUseCache } from "@/components/use-cache/actions";

export default function UseSWR() {
	return (
		<Suspense fallback={<Placeholders />}>
			<PlayersSSR />
		</Suspense>
	);
}

async function PlayersSSR() {
	const { players } = await getPlayersUseCache();
	return (
		<>
			<PlayerCounterSWR />
			<PlayerListSWR players={players} />
			<CreatePlayerSWR />
		</>
	);
}

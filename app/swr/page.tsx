import { Suspense } from "react";
import TablePlaceholder from "@/components/table-placeholder";
import { PlayerListSWR } from "@/components/use-swr/player-list";
import { CreatePlayerSWR } from "@/components/use-swr/create-player";
import { getOrSeedPlayers } from "@/components/common-actions";
import { PlayerCounterSWR } from "@/components/use-swr/players-counter";

export default function UseSWR() {
	return (
		<Suspense fallback={<TablePlaceholder />}>
			<PlayersSSR />
		</Suspense>
	);
}

async function PlayersSSR() {
	const { players } = await getOrSeedPlayers();
	return (
		<>
			<PlayerCounterSWR />
			<PlayerListSWR players={players} />
			<CreatePlayerSWR />
		</>
	);
}

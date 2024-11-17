import { Suspense } from "react";
import TablePlaceholder from "@/components/table-placeholder";
import { CreatePlayerUnstableCache } from "@/components/unstable-cache/create-player";
import { PlayerListUnstableCache } from "@/components/unstable-cache/player-list";
import { PlayerCounterUnstableCache } from "@/components/unstable-cache/players-counter";

export default function UnstableCache() {
	return (
		<Suspense fallback={<TablePlaceholder />}>
			<PlayerCounterUnstableCache />
			<PlayerListUnstableCache />
			<CreatePlayerUnstableCache />
		</Suspense>
	);
}

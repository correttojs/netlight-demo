import { Suspense } from "react";
import TablePlaceholder from "@/components/table-placeholder";
import { PlayerListUseCache } from "@/components/use-cache/player-list";
import { CreatePlayerUseCache } from "@/components/use-cache/create-player";
import { PlayerCounterUseCache } from "@/components/use-cache/players-counter";

export default function UseCache() {
	return (
		<Suspense fallback={<TablePlaceholder />}>
			<PlayerCounterUseCache />
			<PlayerListUseCache />
			<CreatePlayerUseCache />
		</Suspense>
	);
}

import { Suspense } from "react";
import Placeholders from "@/components/placeholders";
import { PlayerListUseCache } from "@/components/use-cache/player-list";
import { CreatePlayerUseCache } from "@/components/use-cache/create-player";
import { PlayerCounterUseCache } from "@/components/use-cache/players-counter";

export default function UseCache() {
	return (
		<Suspense fallback={<Placeholders />}>
			<PlayerCounterUseCache />
			<PlayerListUseCache />
			<CreatePlayerUseCache />
		</Suspense>
	);
}

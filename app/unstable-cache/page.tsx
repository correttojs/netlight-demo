import { Suspense } from "react";
import Placeholders from "@/components/placeholders";
import { CreatePlayerUnstableCache } from "@/components/unstable-cache/create-player";
import { PlayerListUnstableCache } from "@/components/unstable-cache/player-list";
import { PlayerCounterUnstableCache } from "@/components/unstable-cache/players-counter";

export default function UnstableCache() {
	return (
		<Suspense fallback={<Placeholders />}>
			<PlayerCounterUnstableCache />
			<PlayerListUnstableCache />
			<CreatePlayerUnstableCache />
		</Suspense>
	);
}

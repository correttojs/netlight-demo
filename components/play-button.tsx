"use client";

import { useTransition } from "react";
import { playMatch } from "./common-actions";
import { Play } from "lucide-react";

export default function PlayButton({
	onPlayed,
}: { onPlayed: () => Promise<unknown> }) {
	const [isPending, startTransition] = useTransition();

	return (
		<button
			className={`flex flex-row gap-2 items-center ${
				isPending ? "cursor-not-allowed text-gray-400" : ""
			} text-sm text-gray-500 hover:text-gray-900`}
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await playMatch();
					await onPlayed();
				});
			}}
			type="button"
		>
			<Play /> {isPending ? "Playing..." : "Play"}
		</button>
	);
}

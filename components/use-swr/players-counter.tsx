"use client";
import type { GetPlayersResponse } from "../common-actions";
import PlayButton from "../play-button";
import useSWR from "swr";

export function PlayerCounterSWR() {
	const swr = useSWR<GetPlayersResponse>("/api", (key: string) =>
		fetch(key).then((res) => res.json()),
	);

	return (
		<div className="flex flex-row gap-2 items-center">
			<PlayButton onPlayed={() => swr.mutate()} />
			<div className="text-sm text-gray-500">
				Fetched {swr.data?.players.length} players in{" "}
				{Math.round(swr.data?.duration ?? 0)}ms
			</div>
		</div>
	);
}

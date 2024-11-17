"use client";
import type { Player } from "@/lib/drizzle";
import { useEffect } from "react";
import useSWR from "swr";
import type { GetPlayersResponse } from "../common-actions";
import { PlayerListBase } from "../player-list";

export function PlayerListSWR({ players }: { players: Player[] }) {
	const swr = useSWR<GetPlayersResponse>(
		"/api",
		(key) => fetch(key).then((res) => res.json()),
		{
			fallbackData: { players, duration: 0 },
		},
	);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		swr.mutate();
	// 	}, 5000);

	// 	return () => clearInterval(interval);
	// }, [swr]);

	if (!swr.data) return null;

	return (
		<PlayerListBase onRemoved={() => swr.mutate()} players={swr.data.players} />
	);
}

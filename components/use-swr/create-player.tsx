"use client";
import { useSWRConfig } from "swr";

import { CreatePlayerBase } from "../create-player";

export function CreatePlayerSWR() {
	const swrConfig = useSWRConfig();
	return <CreatePlayerBase onCreated={() => swrConfig.mutate("/api")} />;
}

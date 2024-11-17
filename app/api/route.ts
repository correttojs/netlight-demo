import { getOrSeedPlayers } from "@/components/common-actions";

export async function GET() {
	const res = await getOrSeedPlayers();
	return new Response(JSON.stringify(res));
}

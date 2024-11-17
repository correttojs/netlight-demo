import Image from "next/image";
import { DeleteButton } from "./delete-button";
import type { Player } from "@/lib/drizzle";

export function PlayerListBase({
	players,
	onRemoved,
}: { players: Player[]; onRemoved: () => Promise<unknown> }) {
	return (
		<div className="grid gap-2">
			<div className="grid grid-cols-[1fr_80px_80px_150px] items-center gap-4 pb-2 border-b border-gray-900/5">
				<p className="font-medium">Name</p>
				<p className="font-medium">Goals</p>
				<p className="font-medium">Red Cards</p>
				<p className="font-medium justify-self-end">Created</p>
			</div>
			{players.map((player) => (
				<div
					key={player.name}
					className="grid grid-cols-[1fr_80px_80px_150px] items-center gap-4 py-3"
				>
					<div className="flex items-center space-x-4">
						<Image
							src={player.image}
							alt={player.name}
							width={48}
							height={48}
							className="rounded-full ring-1 ring-gray-900/5"
						/>
						<p className="font-medium">{player.name}</p>
					</div>
					<p className="font-medium">{player.goals}</p>
					<p className="font-medium">{player.redCards}</p>

					<div className="flex items-center space-x-4 justify-end">
						<DeleteButton onRemoved={onRemoved} userId={player.id} />
					</div>
				</div>
			))}
		</div>
	);
}

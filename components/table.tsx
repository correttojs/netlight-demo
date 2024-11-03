import RefreshButton from "./refresh-button";
import { CreatePlayerForm } from "./create-player";
import { getUsers } from "./actions";
import { UserList } from "./player-list";
import { PlayerCounter } from "./players-counter";
import { alterTable, createTable } from "@/lib/migrations";
import ResetButton from "./reset-button";

export default async function Table() {
	const { users, duration } = await getUsers();

	return (
		<div className="my-10 bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-4xl mx-auto w-full">
			<div className="flex justify-between items-center mb-4">
				<div className="space-y-1">
					<h2 className="text-xl font-semibold">Player Stats</h2>
					<p className="text-sm text-gray-500">
						Fetched {users.length} players in {duration}ms
					</p>
				</div>
				<PlayerCounter />
				<RefreshButton />
				<ResetButton />
			</div>
			<div className="flex flex-col gap-8">
				<UserList users={users} />
				<CreatePlayerForm />
			</div>
		</div>
	);
}

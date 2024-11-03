import RefreshButton from "./refresh-button";
import { CreateUserForm } from "./add-user";
import { getUsers } from "./actions";
import { UserList } from "./user-list";
import { UserCounter } from "./users-counter";
import { alterTable } from "@/lib/migrations";
import ResetButton from "./reset-button";

export default async function Table() {
	const { users, duration } = await getUsers();
	// await alterTable();
	return (
		<div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
			<div className="flex justify-between items-center mb-4">
				<div className="space-y-1">
					<h2 className="text-xl font-semibold">Recent Users</h2>
					<p className="text-sm text-gray-500">
						Fetched {users.length} users in {duration}ms
					</p>
				</div>
				<RefreshButton />
				<ResetButton />
			</div>
			<UserCounter />
			<div className="flex flex-col gap-4">
				<UserList users={users} />
				<CreateUserForm />
			</div>
		</div>
	);
}

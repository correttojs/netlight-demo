import { getUsers } from "./actions";

export async function PlayerCounter() {
	const { users } = await getUsers();
	return <div className="text-sm text-gray-500">{users.length} players</div>;
}

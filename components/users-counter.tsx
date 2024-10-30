import { getUsers } from "./actions";

export async function UserCounter() {
	const { users } = await getUsers();
	return <div>{users.length} users</div>;
}

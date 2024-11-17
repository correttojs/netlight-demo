import { revalidatePlayers } from "./actions";
import { CreatePlayerBase } from "../create-player";

export function CreatePlayerUseCache() {
	return <CreatePlayerBase onCreated={revalidatePlayers} />;
}

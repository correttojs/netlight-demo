import { revalidateUnstableCachePath } from "./actions";
import { CreatePlayerBase } from "../create-player";

export function CreatePlayerUnstableCache() {
	return <CreatePlayerBase onCreated={revalidateUnstableCachePath} />;
}

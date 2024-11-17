"use client";
import { useTransition } from "react";
import { deleteUser } from "./common-actions";
import { Trash2 } from "lucide-react";

export function DeleteButton({
	userId,
	onRemoved,
}: { userId: number; onRemoved: () => Promise<unknown> }) {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			disabled={isPending}
			className="w-[50px] text-sm font-medium text-gray-500 hover:text-gray-700 mx-0"
			onClick={() =>
				startTransition(async () => {
					await deleteUser(userId);
					await onRemoved();
				})
			}
			type="button"
		>
			<Trash2 />
		</button>
	);
}

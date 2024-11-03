"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { reset } from "./actions";

export default function ResetButton() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			className={`${
				isPending ? "cursor-not-allowed text-gray-400" : ""
			} text-sm text-gray-500 hover:text-gray-900`}
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await reset();
				});
			}}
			type="button"
		>
			{isPending ? "Resetting..." : "Reset"}
		</button>
	);
}

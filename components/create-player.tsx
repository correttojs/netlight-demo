"use client";
import { useActionState } from "react";
import { createUser } from "./common-actions";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

export function CreatePlayerBase({
	onCreated,
}: { onCreated: () => Promise<void> }) {
	const [state, formAction, isPending] = useActionState(createUser, null);

	return (
		<form
			action={async (data) => {
				await formAction(data);
				await onCreated();
			}}
			className="flex flex-col gap-2 border-t border-gray-900/5 pt-4"
		>
			<h3 className="font-semibold text-lg py-2">Create Player</h3>
			<div className="flex flex-col gap-2">
				<label htmlFor="name">Name</label>
				<Input type="text" name="name" />
			</div>

			<div className="flex flex-col gap-2">
				<label htmlFor="redCardsCoefficient">Red Cards Coefficient</label>
				<Input type="number" step=".01" name="redCardsCoefficient" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="goalsCoefficient">Goals Coefficient</label>
				<Input type="number" step=".01" name="goalsCoefficient" />
			</div>
			<div className="flex flex-col gap-2">
				<label htmlFor="image">Image</label>
				<Input name="image" type="file" required />
			</div>

			{state ? (
				<div className="bg-red-800 text-white p-2 rounded">{state}</div>
			) : null}
			<Button className="py-2" disabled={isPending} type="submit">
				Create User
			</Button>
		</form>
	);
}

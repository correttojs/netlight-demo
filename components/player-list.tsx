"use client";
import type { User } from "@/lib/drizzle";
import Image from "next/image";
import { deleteUser, getUsersNoCache, revalidate } from "./actions";
import { useEffect, useTransition } from "react";
import { useTimeAgo } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import useSWR from "swr";
import { usersKey } from "./const";

export function UserList({ users }: { users: User[] }) {
	const [isPending, startTransition] = useTransition();
	const swr = useSWR(usersKey, () => getUsersNoCache(), {
		fallbackData: { users, duration: 0 },
	});
	const timeAgo = useTimeAgo();

	useEffect(() => {
		const interval = setInterval(() => {
			revalidate().then(() => {
				swr.mutate();
			});
		}, 5000);

		return () => clearInterval(interval);
	}, [swr]);

	return (
		<div className="grid gap-2">
			<div className="grid grid-cols-[1fr_80px_80px_150px] items-center gap-4 pb-2 border-b border-gray-900/5">
				<p className="font-medium">Name</p>
				<p className="font-medium">Goals</p>
				<p className="font-medium">Red Cards</p>
				<p className="font-medium justify-self-end">Created</p>
			</div>
			{users.map((user) => (
				<div
					key={user.name}
					className="grid grid-cols-[1fr_80px_80px_150px] items-center gap-4 py-3"
				>
					<div className="flex items-center space-x-4">
						<Image
							src={user.image}
							alt={user.name}
							width={48}
							height={48}
							className="rounded-full ring-1 ring-gray-900/5"
						/>
						<p className="font-medium">{user.name}</p>
					</div>
					<p className="font-medium">{user.goals}</p>
					<p className="font-medium">{user.redCards}</p>

					<div className="flex items-center space-x-4 justify-end">
						<p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>

						<button
							disabled={isPending}
							className="w-[50px] text-sm font-medium text-gray-500 hover:text-gray-700 mx-0"
							onClick={() =>
								startTransition(async () => {
									await deleteUser(user.id);
									swr.mutate();
								})
							}
							type="button"
						>
							<Trash2 />
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

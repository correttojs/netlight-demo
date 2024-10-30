"use client";
import type { User } from "@/lib/drizzle";
import Image from "next/image";
import { deleteUser, getUsers } from "./actions";
import { useTransition } from "react";
import { useTimeAgo } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import useSWR from "swr";
import { usersKey } from "./const";

export function UserList({ users }: { users: User[] }) {
	const [isPending, startTransition] = useTransition();
	const swr = useSWR(usersKey, () => getUsers(), {
		fallbackData: { users, duration: 0 },
	});
	const timeAgo = useTimeAgo();

	return (
		<div className="divide-y divide-gray-900/5">
			{users.map((user) => (
				<div key={user.name} className="flex items-center justify-between py-3">
					<div className="flex items-center space-x-4">
						<Image
							src={user.image}
							alt={user.name}
							width={48}
							height={48}
							className="rounded-full ring-1 ring-gray-900/5"
						/>
						<div className="space-y-1">
							<p className="font-medium leading-none">{user.name}</p>
							<p className="text-sm text-gray-500">{user.email}</p>
						</div>
					</div>
					<div className="flex items-center space-x-2">
						<p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
						<button
							disabled={isPending}
							className="w-[50px] text-sm font-medium text-gray-500 hover:text-gray-700"
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

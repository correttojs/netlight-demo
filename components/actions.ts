"use server";
import { db, type NewUser, UsersTable } from "@/lib/drizzle";
import { put } from "@vercel/blob";
import { eq } from "drizzle-orm";
import {
	unstable_cacheTag as cacheTag,
	unstable_cacheLife as cacheLife,
	revalidateTag,
} from "next/cache";
import { usersKey } from "./const";
import { cache } from "react";

export async function createUser(_: unknown, formData: FormData) {
	try {
		const file = formData.get("image") as File;
		const blob = await put(file.name, file, {
			access: "public",
		});

		const res = await db.insert(UsersTable).values([
			{
				name: formData.get("name"),
				image: blob.url,
				goalsCoefficient: formData.get("goalsCoefficient"),
				redCardsCoefficient: formData.get("redCardsCoefficient"),
			},
		] as NewUser[]);
	} catch {
		return "Failed to create the user";
	}
}

export async function deleteUser(id: number) {
	const res = await db.delete(UsersTable).where(eq(UsersTable.id, id));

	console.log(res);
}

export async function revalidate() {
	await revalidateTag(usersKey);
}

export const getUsers = cache(async () => {
	// "use cache";
	// cacheLife("days");
	// cacheTag(usersKey);
	console.log("getUsers");
	const startTime = performance.now();
	const users = await db.select().from(UsersTable);
	await new Promise((resolve) => setTimeout(resolve, 500));
	const duration = performance.now() - startTime;
	return {
		users,
		duration,
	};
});

export const getUsersNoCache = async () => {
	console.log("getUsers no cache");
	const startTime = performance.now();
	const users = await db.select().from(UsersTable);
	await new Promise((resolve) => setTimeout(resolve, 500));
	const duration = performance.now() - startTime;
	return {
		users,
		duration,
	};
};

export async function reset() {
	const res = await db.update(UsersTable).set({
		goals: 0,
		redCards: 0,
	});

	console.log(res);
}

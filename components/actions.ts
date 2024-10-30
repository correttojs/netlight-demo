"use server";
import { db, type NewUser, UsersTable } from "@/lib/drizzle";
import { put } from "@vercel/blob";
import { eq } from "drizzle-orm";
import {
	unstable_cacheTag as cacheTag,
	unstable_cacheLife as cacheLife,
} from "next/cache";

export async function createUser(_: unknown, formData: FormData) {
	try {
		const file = formData.get("image") as File;
		const blob = await put(file.name, file, {
			access: "public",
		});

		const res = await db.insert(UsersTable).values([
			{
				name: formData.get("name"),
				email: formData.get("email"),
				image: blob.url,
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

export async function getUsers() {
	// "use cache";
	// cacheLife("days");
	// cacheTag("users");
	const startTime = performance.now();
	const users = await db.select().from(UsersTable);
	await new Promise((resolve) => setTimeout(resolve, 500));
	const duration = performance.now() - startTime;
	return {
		users,
		duration,
	};
}

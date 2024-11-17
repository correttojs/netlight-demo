"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";

export function MainNav(): JSX.Element {
	return (
		<Suspense>
			<nav className="p-2 flex flex-row gap-4">
				<NavLink href="/">use cache (15 canary)</NavLink>
				<NavLink href="/unstable-cache">unstable_cache (14)</NavLink>
				<NavLink href="/swr">use-swr</NavLink>
			</nav>
		</Suspense>
	);
}

function NavLink({
	href,
	children,
}: { href: string; children: React.ReactNode }) {
	const pathname = usePathname();
	return (
		<Link
			className={clsx("hover:underline", pathname === href ? "font-bold" : "")}
			href={href}
		>
			{children}
		</Link>
	);
}

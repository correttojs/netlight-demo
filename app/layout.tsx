import { MainNav } from "@/components/nav";
import "./globals.css";
import { Inter } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { PlayerCounterUseCache } from "@/components/use-cache/players-counter";
import RefreshButton from "@/components/refresh-button";
import ResetButton from "@/components/reset-button";
import { PlayerListUseCache } from "@/components/use-cache/player-list";
import { Suspense } from "react";

export const metadata = {
	metadataBase: new URL("https://postgres-drizzle.vercel.app"),
	title: "Vercel Postgres Demo with Drizzle",
	description:
		"A simple Next.js app with Vercel Postgres as the database and Drizzle as the ORM",
};

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={clsx(inter.variable, "flex flex-col gap-4")}>
				<MainNav />
				<main className="relative flex min-h-screen flex-col items-center justify-center">
					<div className="my-10 bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-4xl mx-auto w-full">
						<div className="flex justify-between items-center mb-4">
							<h2 className="text-xl font-semibold">Player Stats</h2>

							<RefreshButton />
							<ResetButton />
						</div>
						{children}
					</div>
				</main>
				<div className="w-full px-20 py-10 flex justify-between">
					<Link href="https://vercel.com">
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={100}
							height={24}
							priority
						/>
					</Link>
				</div>
			</body>
		</html>
	);
}

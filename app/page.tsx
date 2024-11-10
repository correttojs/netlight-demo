import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Table from "@/components/table";
import TablePlaceholder from "@/components/table-placeholder";
import ExpandingArrow from "@/components/expanding-arrow";

export const experimental_ppr = true;

export default function Home() {
	return (
		<main className="relative flex min-h-screen flex-col items-center justify-center">
			<Suspense fallback={<TablePlaceholder />}>
				<Table />
			</Suspense>

			<div className="sm:absolute sm:bottom-0 w-full px-20 py-10 flex justify-between">
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
		</main>
	);
}

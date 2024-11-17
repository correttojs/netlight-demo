import { Play, Trash2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Placeholders() {
	return (
		<div>
			<div className="flex flex-row gap-2 items-center">
				<button
					className={
						"flex flex-row gap-2 items-center text-sm text-gray-500 hover:text-gray-900"
					}
					disabled
					type="button"
				>
					<Play /> {"Play"}
				</button>
				<div className="text-sm text-gray-500">
					<Skeleton className="w-[100px] h-[20px] rounded-full" />
				</div>
			</div>
			{/* Player counter placeholder */}
			<div className="grid gap-2 pt-4">
				<div className="grid grid-cols-[1fr_80px_80px_150px] items-center gap-4 pb-2 border-b border-gray-900/5">
					<p className="font-medium">Name</p>
					<p className="font-medium">Goals</p>
					<p className="font-medium">Red Cards</p>
					<p className="font-medium justify-self-end">Created</p>
				</div>
				{Array.from({ length: 5 }).map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="grid grid-cols-[1fr_80px_80px_150px] items-center gap-4 py-3"
					>
						<div className="flex items-center space-x-4">
							<Skeleton className="w-[48px] h-[48px] rounded-full" />
							<Skeleton className="w-[200px] h-[20px] rounded-full" />
						</div>
						<Skeleton className="w-[30px] h-[20px] rounded-full" />
						<Skeleton className="w-[30px] h-[20px] rounded-full" />

						<div className="flex items-center space-x-4 justify-end">
							<button
								disabled
								className="w-[50px] text-sm font-medium text-gray-500 hover:text-gray-700 mx-0"
								type="button"
							>
								<Trash2 />
							</button>
						</div>
					</div>
				))}
				<div className="border-t border-gray-900/5 pt-4">
					<div className="h-8 w-40 rounded-md bg-gray-200 animate-pulse mb-4" />{" "}
					{/* Create Player heading */}
					<div className="space-y-4">
						{[...Array(4)].map((_, i) => (
							<div
								key={`input-${
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									i
								}`}
								className="flex flex-col gap-2"
							>
								<div className="h-4 w-24 rounded-md bg-gray-200 animate-pulse" />{" "}
								{/* Label */}
								<div className="h-10 w-full rounded-md bg-gray-200 animate-pulse" />{" "}
								{/* Input */}
							</div>
						))}
						<div className="h-10 w-full rounded-md bg-gray-200 animate-pulse mt-4" />{" "}
						{/* Submit button */}
					</div>
				</div>
			</div>
		</div>
	);
}

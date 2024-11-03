import RefreshButton from "./refresh-button";

export default function TablePlaceholder() {
	return (
		<div className="my-10 bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-4xl mx-auto w-full">
			<div className="flex justify-between items-center mb-4">
				<div className="space-y-1">
					<h2 className="text-xl font-semibold">Player Stats</h2>
					<p className="text-sm text-gray-500">Fetching players...</p>
				</div>
				<RefreshButton />
				<div className="h-10 w-24 rounded-md bg-gray-200 animate-pulse" />{" "}
				{/* Reset button placeholder */}
			</div>
			<div className="h-6 w-32 rounded-md bg-gray-200 animate-pulse mb-4" />{" "}
			{/* Player counter placeholder */}
			<div className="flex flex-col gap-8">
				<div className="divide-y divide-gray-900/5">
					{[...Array(3)].map((_, i) => (
						<div
							key={`player-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								i
							}`}
							className="flex items-center justify-between py-3"
						>
							<div className="flex items-center space-x-4">
								<div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
								<div className="space-y-1">
									<div className="h-6 w-28 rounded-md bg-gray-200 animate-pulse" />
									<div className="h-4 w-24 rounded-md bg-gray-200 animate-pulse" />
								</div>
							</div>
							<div className="h-4 w-12 rounded-md bg-gray-200 animate-pulse" />
						</div>
					))}
				</div>
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

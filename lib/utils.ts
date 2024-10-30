import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ms from "ms";
import { useCallback, useMemo } from "react";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const useTimeAgo = (): ((
	timestamp: Date,
	timeOnly?: boolean,
) => string) => {
	return useCallback((timestamp: Date, timeOnly?: boolean) => {
		if (typeof window === "undefined") {
			return "";
		}
		if (!timestamp) return "never";
		return `${ms(Date.now() - new Date(timestamp).getTime())}${
			timeOnly ? "" : " ago"
		}`;
	}, []);
};

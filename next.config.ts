import type { NextConfig } from "next";
const VERCEL_BLOB_STORE_ID = process.env.BLOB_READ_WRITE_TOKEN?.match(
	/^vercel_blob_rw_([a-z0-9]+)_[a-z0-9]+$/i,
)?.[1].toLowerCase();
const nextConfig: NextConfig = {
	images: {
		domains: [`${VERCEL_BLOB_STORE_ID}.public.blob.vercel-storage.com`],
	},
	experimental: {
		dynamicIO: true,
	},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"images.ctfassets.net",
			"nxhggsvzyhem6qpg.public.blob.vercel-storage.com",
		],
	},
	experimental: {
		dynamicIO: true,
		ppr: "incremental",
	},
};

export default nextConfig;

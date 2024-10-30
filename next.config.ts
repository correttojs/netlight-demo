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
	},
};

export default nextConfig;

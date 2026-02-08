import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				blogs: resolve(__dirname, "blogs.html"),
				directory: resolve(__dirname, "directory.html"),
				main: resolve(__dirname, "index.html"),
				"privacy-policy": resolve(__dirname, "privacy-policy.html"),
				registration: resolve(__dirname, "registration.html"),
				"terms-of-service": resolve(__dirname, "terms-of-service.html"),
			},
		},
	},
	plugins: [tailwindcss()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});

import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				blogs: resolve(__dirname, "blogs.html"),
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

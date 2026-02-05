import headerHtml from "@/components/header.html?raw";
import footerHtml from "@/components/footer.html?raw";

function renderApp() {
	const app = document.querySelector<HTMLDivElement>("#app");
	if (!app) return;

	app.innerHTML = `
		<div class="min-h-dvh bg-zinc-50 text-zinc-950">
			${headerHtml}
			<main class="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
				<section class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
					<div class="space-y-6">
						<p class="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-600">
							Prototype foundation
						</p>
						<h1 class="font-["Space Grotesk"] text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-6xl lg:leading-[1.05]">
							A basic page with a proper header and footer.
						</h1>
						<p class="max-w-prose text-base leading-relaxed text-zinc-700 sm:text-lg sm:leading-relaxed">
							This project is wired for Vite + TypeScript + Tailwind. Use HTML files in
							<code class="rounded bg-zinc-950/5 px-1.5 py-0.5 text-[0.9em] sm:text-[0.95em]">src/components</code>
							for reusable chunks.
						</p>
						<div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
							<a
								href="#features"
								class="rounded-xl bg-zinc-950 px-6 py-3 text-center text-sm font-medium text-zinc-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:px-5"
							>
								See features
							</a>
							<a
								href="#overview"
								class="rounded-xl border border-zinc-200 bg-white px-6 py-3 text-center text-sm font-medium text-zinc-950 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950 sm:px-5"
							>
								How it works
							</a>
						</div>
					</div>

					<aside class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6">
						<h2 class="text-sm font-semibold text-zinc-950">Page sections</h2>
						<ul class="mt-4 space-y-2 text-sm text-zinc-700">
							<li><a class="hover:text-zinc-950 transition-colors" href="#overview">Overview</a></li>
							<li><a class="hover:text-zinc-950 transition-colors" href="#features">Features</a></li>
							<li><a class="hover:text-zinc-950 transition-colors" href="#contact">Contact</a></li>
						</ul>
					</aside>
				</section>

				<section id="overview" class="mt-20 scroll-mt-20">
					<h2 class="text-2xl font-semibold tracking-tight">Overview</h2>
					<p class="mt-3 max-w-prose text-zinc-700">
						The header and footer are authored as standalone HTML files and injected into
						<code class="rounded bg-zinc-950/5 px-1.5 py-0.5">#app</code> from
						TypeScript.
					</p>
				</section>

				<section id="features" class="mt-12 scroll-mt-24 sm:mt-16">
					<h2 class="text-xl font-semibold tracking-tight sm:text-2xl">Features</h2>
					<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						<div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
							<p class="text-sm font-semibold">Component HTML</p>
							<p class="mt-2 text-sm text-zinc-700 leading-relaxed">Keep reusable chunks in src/components.</p>
						</div>
						<div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
							<p class="text-sm font-semibold">Tailwind-ready</p>
							<p class="mt-2 text-sm text-zinc-700 leading-relaxed">Tailwind is already wired via Vite.</p>
						</div>
						<div class="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
							<p class="text-sm font-semibold">Accessible defaults</p>
							<p class="mt-2 text-sm text-zinc-700 leading-relaxed">Focus styles and semantics included.</p>
						</div>
					</div>
				</section>

				<section id="contact" class="mt-12 scroll-mt-24 sm:mt-16">
					<h2 class="text-xl font-semibold tracking-tight sm:text-2xl">Contact</h2>
					<p class="mt-3 text-zinc-700 leading-relaxed">Replace this with your real CTA.</p>
				</section>
			</main>
			${footerHtml}
		</div>
	`;

	const year = document.querySelector<HTMLElement>("#year");
	if (year) year.textContent = String(new Date().getFullYear());

	// Mobile menu functionality
	const mobileMenuToggle =
		document.querySelector<HTMLButtonElement>("#mobile-menu-toggle");
	const mobileMenu = document.querySelector<HTMLDivElement>("#mobile-menu");

	if (mobileMenuToggle && mobileMenu) {
		mobileMenuToggle.addEventListener("click", () => {
			const isOpen = !mobileMenu.classList.contains("hidden");
			mobileMenu.classList.toggle("hidden", isOpen);

			// Update button aria-expanded attribute
			mobileMenuToggle.setAttribute("aria-expanded", (!isOpen).toString());
		});

		// Close mobile menu when clicking on links
		const mobileLinks = mobileMenu.querySelectorAll("a");
		mobileLinks.forEach((link) => {
			link.addEventListener("click", () => {
				mobileMenu.classList.add("hidden");
				mobileMenuToggle.setAttribute("aria-expanded", "false");
			});
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {
	renderApp();
});

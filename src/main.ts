import headerHtml from "@/components/header.html?raw";
import heroHtml from "@/components/hero.html?raw";
import footerHtml from "@/components/footer.html?raw";

// Types for Lucide when loaded via CDN in index.html
declare global {
	interface Window {
		lucide?: { createIcons?: () => void };
	}
}

function renderApp() {
	const app = document.querySelector<HTMLDivElement>("#app");
	if (!app) return;

	app.innerHTML = `
        <div class="min-h-dvh bg-zinc-50 text-zinc-950">
            ${headerHtml}
            ${heroHtml}
            <main class="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">

                <section id="overview" class="mt-6 sm:mt-12 scroll-mt-20">
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
	const menuIcon = document.querySelector<HTMLElement>("#menu-icon");
	const closeIcon = document.querySelector<HTMLElement>("#close-icon");

	if (mobileMenuToggle && mobileMenu) {
		mobileMenuToggle.addEventListener("click", () => {
			const isOpen = !mobileMenu.classList.contains("hidden");
			mobileMenu.classList.toggle("hidden", isOpen);

			// swap icons to mirror landing page behavior
			if (menuIcon && closeIcon) {
				menuIcon.classList.toggle("hidden", !isOpen);
				closeIcon.classList.toggle("hidden", isOpen);
			}

			// Update button aria-expanded attribute
			mobileMenuToggle.setAttribute("aria-expanded", (!isOpen).toString());
		});

		// Close mobile menu when clicking on links
		const mobileLinks = mobileMenu.querySelectorAll("a");
		mobileLinks.forEach((link) => {
			link.addEventListener("click", () => {
				mobileMenu.classList.add("hidden");
				if (menuIcon && closeIcon) {
					menuIcon.classList.remove("hidden");
					closeIcon.classList.add("hidden");
				}
				mobileMenuToggle.setAttribute("aria-expanded", "false");
			});
		});
	}
}

document.addEventListener("DOMContentLoaded", () => {
	renderApp();
	// Initialize Lucide icons after initial render, if available
	try {
		window.lucide?.createIcons?.();
	} catch {
		/* no-op: lucide is optional at runtime */
	}
});

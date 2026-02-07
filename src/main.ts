import headerHtml from "@/components/header.html?raw";
import heroHtml from "@/components/hero.html?raw";
import featuresHtml from "@/components/features.html?raw";
import directoryHtml from "@/components/directory.html?raw";
import workingsHtml from "@/components/workings.html?raw";
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
          ${featuresHtml}
          ${directoryHtml}
          ${workingsHtml}
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

/// <reference types="astro/client" />

interface Window {
	Alpine: import("alpinejs").Alpine;
}

declare global {
	namespace astroHTML.JSX {
		interface HTMLAttributes {
			[key: `@${string}`]: string | undefined;
			[key: `x-${string}`]: string | boolean | undefined;
			[key: `x-transition:${string}`]: string | undefined;
			_keydown?: any;
			_click?: any;
		}
		interface ButtonHTMLAttributes {
			[key: `@${string}`]: string | undefined;
			[key: `x-${string}`]: string | boolean | undefined;
			_click?: any;
		}
		interface AnchorHTMLAttributes {
			[key: `@${string}`]: string | undefined;
			[key: `x-${string}`]: string | boolean | undefined;
			_click?: any;
		}
	}
}

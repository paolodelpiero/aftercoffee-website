import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Normalise BASE_PATH into the shape SvelteKit requires: '' or '/segment',
// with a leading slash and no trailing slash.
/** @returns {'' | `/${string}`} */
function basePath() {
	const raw = (process.env.BASE_PATH || '').trim().replace(/\/+$/, '');
	if (!raw) return '';
	return /** @type {`/${string}`} */ (raw.startsWith('/') ? raw : `/${raw}`);
}

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			// Static adapter: the whole site is prerendered to plain HTML/CSS/JS,
			// so it can be hosted on any static host (Netlify, Vercel, GitHub Pages, S3, ...).
			adapter: adapter({
				fallback: '404.html'
			}),

			// GitHub Pages serves project sites from https://<user>.github.io/<repo>/,
			// so the app needs a base path. It's read from the BASE_PATH env var:
			//  - local dev / build:            unset  -> '' (served at the root)
			//  - GitHub Actions (project site): '/<repo>'
			//  - user site (<user>.github.io) or custom domain: keep it ''
			// The CI workflow (.github/workflows/deploy.yml) sets BASE_PATH automatically.
			paths: {
				base: basePath()
			}
		})
	]
});

<script>
	import { base } from '$app/paths';
	import Logo from './Logo.svelte';

	const year = 2026; // update as needed
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/strategies', label: 'Strategies' }
	];
</script>

<footer class="site-footer">
	<div class="container site-footer__inner">
		<div class="site-footer__brand">
			<Logo />
			<p class="site-footer__tag placeholder">
				Tagline placeholder — to be provided.
			</p>
		</div>

		<nav class="site-footer__nav" aria-label="Footer">
			{#each links as link (link.href)}
				<a href="{base}{link.href}">{link.label}</a>
			{/each}
		</nav>
	</div>

	<div class="container site-footer__legal">
		<p>&copy; {year} AfterCoffee LTD. All rights reserved.</p>
		<p class="placeholder">
			Legal / regulatory disclaimer placeholder — to be provided.
		</p>
	</div>
</footer>

<style>
	.site-footer {
		background: var(--navy);
		color: var(--on-navy);
		margin-top: auto;
	}

	.site-footer :global(.logo),
	.site-footer :global(.logo__word),
	.site-footer :global(.logo__mark) {
		color: #fff;
	}

	.site-footer :global(.logo__ltd) {
		color: rgba(234, 240, 251, 0.6);
	}

	.site-footer__inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 32px;
		padding-block: 56px 40px;
	}

	.site-footer__tag {
		margin: 1rem 0 0;
		max-width: 34ch;
		color: rgba(234, 240, 251, 0.7);
	}

	.site-footer__nav {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.site-footer__nav a {
		color: rgba(234, 240, 251, 0.8);
		font-size: 0.95rem;
	}

	.site-footer__nav a:hover {
		color: #fff;
	}

	.site-footer__legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 32px;
		padding-block: 22px;
		border-top: 1px solid rgba(234, 240, 251, 0.14);
		font-size: 0.82rem;
		color: rgba(234, 240, 251, 0.6);
	}

	.site-footer__legal p {
		margin: 0;
	}

	.site-footer .placeholder {
		color: rgba(234, 240, 251, 0.55);
	}
</style>

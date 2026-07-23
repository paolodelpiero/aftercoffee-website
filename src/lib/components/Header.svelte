<script>
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import Logo from './Logo.svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/strategies', label: 'Strategies' },
		{ href: '/contact', label: 'Contact' }
	];

	let open = $state(false);

	/** @param {string} href @returns {string} base-prefixed URL */
	const url = (href) => `${base}${href}`;

	/** @param {string} href */
	function isActive(href) {
		const path = page.url.pathname.replace(/\/+$/, '') || '/';
		const target = url(href).replace(/\/+$/, '') || '/';
		return href === '/'
			? path === target
			: path === target || path.startsWith(target + '/');
	}
</script>

<header class="site-header">
	<div class="container site-header__inner">
		<a class="site-header__brand" href={url('/')} aria-label="AfterCoffee LTD — home">
			<Logo />
		</a>

		<nav class="nav nav--desktop" aria-label="Primary">
			{#each links as link (link.href)}
				<a
					class="nav__link"
					href={url(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<button
			class="nav-toggle"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			<span class="visually-hidden">Toggle menu</span>
			<span class="nav-toggle__bars" class:is-open={open} aria-hidden="true">
				<span></span><span></span><span></span>
			</span>
		</button>
	</div>

	{#if open}
		<nav id="mobile-nav" class="nav nav--mobile" aria-label="Primary">
			{#each links as link (link.href)}
				<a
					class="nav__link"
					href={url(link.href)}
					aria-current={isActive(link.href) ? 'page' : undefined}
					onclick={() => (open = false)}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: saturate(180%) blur(10px);
		border-bottom: 1px solid var(--line);
	}

	.site-header__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 68px;
	}

	.site-header__brand {
		display: inline-flex;
	}

	.nav {
		display: flex;
		gap: 2rem;
	}

	.nav__link {
		position: relative;
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--muted);
		padding-block: 0.4rem;
	}

	.nav__link:hover {
		color: var(--navy);
	}

	.nav__link[aria-current='page'] {
		color: var(--navy);
	}

	.nav--desktop .nav__link[aria-current='page']::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -2px;
		height: 2px;
		background: var(--navy);
		border-radius: 2px;
	}

	/* ---- Mobile toggle ---- */
	.nav-toggle {
		display: none;
		background: none;
		border: none;
		padding: 8px;
		cursor: pointer;
	}

	.nav-toggle__bars {
		display: block;
		width: 22px;
		height: 14px;
		position: relative;
	}

	.nav-toggle__bars span {
		position: absolute;
		left: 0;
		height: 2px;
		width: 100%;
		background: var(--navy);
		border-radius: 2px;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	.nav-toggle__bars span:nth-child(1) {
		top: 0;
	}
	.nav-toggle__bars span:nth-child(2) {
		top: 6px;
	}
	.nav-toggle__bars span:nth-child(3) {
		top: 12px;
	}

	.nav-toggle__bars.is-open span:nth-child(1) {
		transform: translateY(6px) rotate(45deg);
	}
	.nav-toggle__bars.is-open span:nth-child(2) {
		opacity: 0;
	}
	.nav-toggle__bars.is-open span:nth-child(3) {
		transform: translateY(-6px) rotate(-45deg);
	}

	.nav--mobile {
		flex-direction: column;
		gap: 0;
		padding: 8px var(--gutter) 16px;
		border-top: 1px solid var(--line);
	}

	.nav--mobile .nav__link {
		padding-block: 0.75rem;
		border-bottom: 1px solid var(--line);
	}

	@media (max-width: 720px) {
		.nav--desktop {
			display: none;
		}
		.nav-toggle {
			display: block;
		}
	}
</style>

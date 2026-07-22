<script>
	import { base } from '$app/paths';
	import Logo from './Logo.svelte';

	const year = 2026; // update as needed

	const columns = [
		{
			title: 'Company',
			links: [
				{ href: '/', label: 'Home' },
				{ href: '/about', label: 'About' },
				{ href: '/strategies', label: 'Strategies' }
			]
		},
		{
			title: 'More',
			links: [
				{ href: '/infrastructure', label: 'Infrastructure' },
				{ href: '/contact', label: 'Contact' }
			]
		},
		{
			title: 'Legal',
			links: [
				{ href: '/legal#terms', label: 'Terms of Use' },
				{ href: '/legal#privacy', label: 'Privacy Policy' },
				{ href: '/legal#disclaimer', label: 'Disclaimer' }
			]
		}
	];
</script>

<footer class="site-footer">
	<div class="container site-footer__inner">
		<div class="site-footer__brand">
			<Logo />
			<p class="site-footer__tag">
				A quantitative proprietary trading firm — systematic strategies in crypto
				markets.
			</p>
			<p class="site-footer__contact">
				<a href="mailto:contact@aftercoffee.tech">contact@aftercoffee.tech</a>
			</p>
		</div>

		<nav class="site-footer__cols" aria-label="Footer">
			{#each columns as col (col.title)}
				<div class="site-footer__col">
					<h3 class="site-footer__col-title">{col.title}</h3>
					{#each col.links as link (link.href)}
						<a href="{base}{link.href}">{link.label}</a>
					{/each}
				</div>
			{/each}
		</nav>
	</div>

	<div class="container site-footer__legal">
		<p>&copy; {year} AfterCoffee LTD. All rights reserved.</p>
		<p class="site-footer__disclaimer">
			AfterCoffee LTD is a proprietary trading firm and trades its own capital.
			Nothing on this site is investment advice, an offer, or a solicitation to
			invest. See <a href="{base}/legal">Legal</a>.
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
		gap: 40px;
		padding-block: 56px 40px;
	}

	.site-footer__brand {
		max-width: 34ch;
	}

	.site-footer__tag {
		margin: 1rem 0 0.75rem;
		color: rgba(234, 240, 251, 0.7);
	}

	.site-footer__contact a {
		color: rgba(234, 240, 251, 0.9);
		font-size: 0.95rem;
	}

	.site-footer__contact a:hover {
		color: #fff;
	}

	.site-footer__cols {
		display: flex;
		flex-wrap: wrap;
		gap: 40px 56px;
	}

	.site-footer__col {
		display: flex;
		flex-direction: column;
		gap: 0.7rem;
	}

	.site-footer__col-title {
		margin: 0 0 0.2rem;
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(234, 240, 251, 0.55);
	}

	.site-footer__col a {
		color: rgba(234, 240, 251, 0.8);
		font-size: 0.95rem;
	}

	.site-footer__col a:hover {
		color: #fff;
	}

	.site-footer__legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 32px;
		padding-block: 22px;
		border-top: 1px solid rgba(234, 240, 251, 0.14);
		font-size: 0.8rem;
		color: rgba(234, 240, 251, 0.55);
	}

	.site-footer__legal p {
		margin: 0;
	}

	.site-footer__disclaimer {
		max-width: 70ch;
	}

	.site-footer__disclaimer a,
	.site-footer__legal a {
		color: rgba(234, 240, 251, 0.8);
		text-decoration: underline;
	}

	.site-footer__disclaimer a:hover {
		color: #fff;
	}
</style>

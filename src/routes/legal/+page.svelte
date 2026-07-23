<script>
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';
	import { company } from '$lib/data/company.js';

	const sections = [
		{ id: 'terms', label: 'Terms of Use' },
		{ id: 'privacy', label: 'Privacy Policy' },
		{ id: 'disclaimer', label: 'Disclaimer' }
	];
</script>

<svelte:head>
	<title>Legal — AfterCoffee LTD</title>
	<meta name="description" content="Terms of Use, Privacy Policy and Disclaimer for AfterCoffee LTD." />
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- Intro -->
<section class="section intro">
	<AnimatedBackground dense />
	<div class="container intro__content">
		<div class="section__head hero__in">
			<p class="eyebrow">Legal</p>
			<h1>Terms, privacy &amp; disclaimer.</h1>
			<p class="lede">
				Last updated: [date]. {company.name} — company no. {company.companyNumber},
				registered in {company.jurisdiction}.
			</p>
		</div>
	</div>
</section>

<section class="section">
	<div class="container legal">
		<aside class="legal__toc" aria-label="On this page">
			{#each sections as s (s.id)}
				<a href="#{s.id}">{s.label}</a>
			{/each}
		</aside>

		<div class="legal__body">
			<p class="legal__notice">
				⚠️ Draft placeholder text — to be reviewed and finalised by qualified
				legal counsel before being relied upon. Bracketed items <code>[…]</code>
				are to be completed.
			</p>

			<!-- Terms -->
			<section id="terms" class="legal__section" use:reveal>
				<h2>Terms of Use</h2>
				<p>
					These Terms of Use govern your access to and use of the AfterCoffee LTD
					website at aftercoffee.tech (the “Site”). By using the Site you agree to
					these Terms. If you do not agree, please do not use the Site.
				</p>
				<h3>Use of the Site</h3>
				<p>
					The Site is provided for general information about AfterCoffee LTD (the
					“Company”). You agree to use it lawfully and not to disrupt, misuse, or
					attempt to gain unauthorised access to it.
				</p>
				<h3>Intellectual property</h3>
				<p>
					All content on the Site — text, design, logos and marks — is owned by or
					licensed to the Company and may not be reproduced without permission,
					except as permitted by applicable law.
				</p>
				<h3>No warranties</h3>
				<p>
					The Site is provided “as is” and “as available”, without warranties of
					any kind, express or implied. The Company does not warrant that the Site
					will be uninterrupted, error-free, or free of harmful components.
				</p>
				<h3>Limitation of liability</h3>
				<p>
					To the fullest extent permitted by law, the Company shall not be liable
					for any indirect, incidental or consequential loss arising from your use
					of, or inability to use, the Site.
				</p>
				<h3>Governing law</h3>
				<p>
					These Terms are governed by the laws of {company.jurisdiction}, and any
					disputes are subject to the exclusive jurisdiction of its courts.
				</p>
				<h3>Changes</h3>
				<p>
					The Company may update these Terms from time to time. Continued use of
					the Site after changes constitutes acceptance of the revised Terms.
				</p>
			</section>

			<!-- Privacy -->
			<section id="privacy" class="legal__section" use:reveal>
				<h2>Privacy Policy</h2>
				<p>
					This Privacy Policy explains how AfterCoffee LTD handles personal data
					collected through the Site.
				</p>
				<h3>What we collect</h3>
				<p>
					If you use our contact form, we collect the information you provide:
					your first name, last name and email address. We do not knowingly
					collect any special-category data.
				</p>
				<h3>How we use it</h3>
				<p>
					We use your details solely to respond to your enquiry and to contact you
					about it. We do not sell your data.
				</p>
				<h3>Legal basis</h3>
				<p>
					We process this data on the basis of your consent and our legitimate
					interest in responding to enquiries [confirm applicable data-protection
					law — e.g. the Data Protection (Privacy of Personal Information) Act of
					{company.jurisdiction}, and any others that apply].
				</p>
				<h3>Sharing &amp; retention</h3>
				<p>
					We may share data with service providers who help us operate (e.g. email
					or form-handling providers), under appropriate safeguards. We retain
					enquiry data for [retention period] and then delete it.
				</p>
				<h3>Your rights</h3>
				<p>
					You may request access to, correction of, or deletion of your personal
					data, and may withdraw consent at any time, by contacting
					<a href="mailto:contact@aftercoffee.tech">contact@aftercoffee.tech</a>.
				</p>
				<h3>Cookies</h3>
				<p>
					The Site uses only [strictly necessary / no] cookies. [Update if
					analytics or other cookies are added.]
				</p>
			</section>

			<!-- Disclaimer -->
			<section id="disclaimer" class="legal__section" use:reveal>
				<h2>Disclaimer</h2>
				<p>
					<strong>AfterCoffee LTD is a proprietary trading firm.</strong> It trades
					its own capital. It does not manage money for clients, does not accept
					external investor funds, and does not provide portfolio-management
					services.
				</p>
				<p>
					Nothing on this Site constitutes financial, investment, legal, tax or
					other professional advice, nor an offer, solicitation or recommendation
					to buy or sell any financial instrument or to invest in any fund or
					strategy.
				</p>
				<p>
					Trading digital assets involves substantial risk, including the risk of
					total loss. Any descriptions of strategies are for general information
					only and are not a promise or indication of future results.
				</p>
				<p>
					The Site may link to third-party websites. The Company is not
					responsible for their content or practices.
				</p>
				<p>
					{company.name} (company no. {company.companyNumber}) — registered
					office: {company.address}. Contact:
					<a href="mailto:{company.email}">{company.email}</a>.
				</p>
			</section>
		</div>
	</div>
</section>

<style>
	.legal {
		display: grid;
		grid-template-columns: 220px 1fr;
		gap: clamp(32px, 6vw, 64px);
		align-items: start;
	}

	.legal__toc {
		position: sticky;
		top: 92px;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding-left: 14px;
		border-left: 2px solid var(--line);
	}

	.legal__toc a {
		font-size: 0.92rem;
		color: var(--muted);
	}

	.legal__toc a:hover {
		color: var(--navy);
	}

	.legal__body {
		max-width: 72ch;
	}

	.legal__notice {
		font-size: 0.9rem;
		color: var(--navy-700);
		background: var(--bg-alt);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 14px 16px;
		margin-bottom: 2.5rem;
	}

	.legal__notice code {
		font-size: 0.85em;
	}

	.legal__section {
		scroll-margin-top: 92px;
	}

	.legal__section + .legal__section {
		margin-top: 3rem;
		padding-top: 2.5rem;
		border-top: 1px solid var(--line);
	}

	.legal__section h3 {
		margin-top: 1.6rem;
		font-size: 1.05rem;
	}

	.legal__section p {
		color: var(--text);
	}

	@media (max-width: 760px) {
		.legal {
			grid-template-columns: 1fr;
		}
		.legal__toc {
			position: static;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 0.5rem 1.25rem;
			border-left: none;
			padding-left: 0;
		}
	}
</style>

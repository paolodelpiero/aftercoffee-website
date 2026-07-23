<script>
	import { base } from '$app/paths';
	import { alphas } from '$lib/data/strategies.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	// Hero character chips.
	const keywords = [
		'Fully systematic',
		'Mid-frequency',
		'Uncorrelated',
		'Centralized exchange'
	];

	// Firm principles — one-sentence placeholders, refine before go-live.
	const principles = [
		{
			title: 'Top-grade infrastructure',
			body: 'State-of-the-art EMS and OMS for fast, reliable execution.'
		},
		{
			title: 'Fully automated',
			body: 'Strategies run end-to-end, with no manual intervention.'
		},
		{
			title: 'Risk discipline',
			body: 'Position sizing, limits and neutral construction, enforced by the system.'
		},
		{
			title: 'Actively managed monitoring',
			body: 'Performance and risk are watched continuously, and acted on.'
		}
	];
</script>

<svelte:head>
	<title>AfterCoffee LTD — Systematic crypto strategies</title>
	<meta
		name="description"
		content="AfterCoffee LTD is a quantitative proprietary trading firm running systematic strategies in crypto markets."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<AnimatedBackground waves />
	<div class="container hero__content">
		<p class="eyebrow hero__in" style="--d: 0ms">Quantitative proprietary trading firm</p>
		<h1 class="hero__title hero__in" style="--d: 80ms">
			Systematic strategies<br />for crypto markets.
		</h1>
		<p class="lede hero__lede hero__in" style="--d: 160ms">
			Fully systematic, mid-frequency strategies, uncorrelated to the market,
			traded on centralized exchanges.
		</p>
		<div class="hero__actions hero__in" style="--d: 240ms">
			<a class="btn btn--primary" href="{base}/strategies">Our strategies</a>
			<a class="btn btn--ghost" href="{base}/about">About us</a>
		</div>

		<ul class="hero__keywords hero__in" style="--d: 340ms" aria-label="What we are">
			{#each keywords as kw (kw)}
				<li>{kw}</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Firm principles -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">The firm</p>
			<h2>Our principles</h2>
		</div>

		<div class="grid pillars">
			{#each principles as p, i (p.title)}
				<div class="card pillar" use:reveal={{ delay: i * 90 }}>
					<h3>{p.title}</h3>
					<p>{p.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Strategies preview -->
<section class="section">
	<div class="container">
		<div class="section__head strategies-preview__head" use:reveal>
			<div>
				<p class="eyebrow">What we trade</p>
				<h2>Diversified suite of strategies</h2>
				<p class="lede">
					15–20 systematic alphas combined into a single portfolio.
				</p>
			</div>
			<a class="btn btn--ghost" href="{base}/strategies">Explore all &rarr;</a>
		</div>

		<div class="home-alphas">
			{#each alphas as a, i (a.id)}
				<a
					class="home-alpha"
					href="{base}/strategies#{a.id}"
					use:reveal={{ delay: i * 50 }}
				>
					{a.title}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Infrastructure (placeholder) -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">Infrastructure</p>
			<h2>Built on top-tier infrastructure</h2>
			<p class="lede">
				Placeholder — a short line on our execution stack and trading venues.
			</p>
		</div>

		<div class="ecosystem" use:reveal>
			<div class="ecosystem__item">
				<span class="ecosystem__label">Execution stack</span>
				<span class="ecosystem__value">State-of-the-art EMS / OMS</span>
			</div>
			<div class="ecosystem__item">
				<span class="ecosystem__label">Venues</span>
				<span class="ecosystem__value">Top-tier centralized exchanges</span>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="section cta">
	<div class="container cta__inner" use:reveal>
		<div>
			<h2>Get in touch</h2>
			<p class="lede">
				Placeholder — a short line inviting the reader to reach out.
			</p>
		</div>
		<a class="btn btn--primary" href="{base}/contact">Contact us</a>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		padding-block: clamp(72px, 13vw, 148px);
	}

	.hero__content {
		position: relative;
		z-index: 1;
	}

	.hero__title {
		max-width: 18ch;
	}

	.hero__lede {
		margin-top: 1.25rem;
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 14px;
		margin-top: 2rem;
	}

	.hero__keywords {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 10px 12px;
		padding: 0;
		margin: clamp(40px, 6vw, 64px) 0 0;
	}

	.hero__keywords li {
		font-size: 0.82rem;
		font-weight: 500;
		color: var(--navy-600);
		padding: 6px 14px;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.6);
		backdrop-filter: blur(2px);
		transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease;
	}

	.hero__keywords li:hover {
		transform: translateY(-2px);
		border-color: var(--navy-500);
		color: var(--navy);
	}

	.pillars {
		grid-template-columns: repeat(4, 1fr);
	}

	.pillar p {
		color: var(--muted);
	}

	.strategies-preview__head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 24px;
		max-width: none;
	}

	/* Alpha chips */
	.home-alphas {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.home-alpha {
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--navy-600);
		padding: 10px 18px;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--bg);
		transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease;
	}

	.home-alpha:hover {
		transform: translateY(-2px);
		border-color: var(--navy-500);
		color: var(--navy);
	}

	/* Infrastructure strip */
	.ecosystem {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: var(--gutter);
	}

	.ecosystem__item {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: clamp(20px, 3vw, 28px);
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--radius);
	}

	.ecosystem__label {
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.ecosystem__value {
		font-size: 1.05rem;
		font-weight: 600;
		color: var(--navy);
	}

	.cta__inner {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}

	.cta__inner .lede {
		margin-bottom: 0;
	}

	@media (max-width: 900px) {
		.pillars {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 620px) {
		.pillars {
			grid-template-columns: 1fr;
		}
		.strategies-preview__head {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

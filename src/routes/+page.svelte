<script>
	import { base } from '$app/paths';
	import { families, dimensions } from '$lib/data/strategies.js';
	import { venues, serviceProviders } from '$lib/data/infrastructure.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	// Hero strip — a curated set of what we do.
	const keywords = [
		'Mean Reversion',
		'Momentum',
		'Pairs',
		'Cross-sectional',
		'Directional',
		'Market-neutral',
		'Multi-asset'
	];

	// Home-page pillars — placeholder copy, to be replaced.
	const pillars = [
		{
			title: 'Systematic',
			body: 'Placeholder — research-driven, rules-based strategies with no discretionary override.'
		},
		{
			title: 'Crypto-focused',
			body: 'Placeholder — trading digital-asset markets, their microstructure and 24/7 liquidity.'
		},
		{
			title: 'Cross-validated',
			body: 'Placeholder — methods researched and validated across traditional and crypto markets.'
		},
		{
			title: 'Risk-managed',
			body: 'Placeholder — disciplined sizing, neutral construction and continuous risk monitoring.'
		}
	];
</script>

<svelte:head>
	<title>AfterCoffee LTD — Systematic crypto strategies</title>
	<meta
		name="description"
		content="AfterCoffee LTD is a quantitative proprietary trading firm running systematic, market-neutral strategies in crypto markets."
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<AnimatedBackground waves />
	<div class="container hero__content">
		<p class="eyebrow hero__in" style="--d: 0ms">Quantitative proprietary trading firm</p>
		<h1 class="hero__title hero__in" style="--d: 80ms">
			Systematic, market-neutral strategies<br />for crypto markets.
		</h1>
		<p class="lede hero__lede hero__in" style="--d: 160ms">
			Placeholder introduction — final copy to be provided. A short statement of
			what AfterCoffee does and the edge behind it.
		</p>
		<div class="hero__actions hero__in" style="--d: 240ms">
			<a class="btn btn--primary" href="{base}/strategies">Our strategies</a>
			<a class="btn btn--ghost" href="{base}/about">About us</a>
		</div>

		<ul class="hero__keywords hero__in" style="--d: 340ms" aria-label="Strategy focus">
			{#each keywords as kw (kw)}
				<li>{kw}</li>
			{/each}
		</ul>
	</div>
</section>

<!-- Pillars -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">Our approach</p>
			<h2>How we invest</h2>
			<p class="lede">Placeholder — a one-line summary of the firm’s approach.</p>
		</div>

		<div class="grid pillars">
			{#each pillars as p, i (p.title)}
				<div class="card pillar" use:reveal={{ delay: i * 90 }}>
					<h3>{p.title}</h3>
					<p class="placeholder">{p.body}</p>
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
				<h2>Two edges, many expressions</h2>
				<p class="lede">
					Mean reversion and momentum — expressed across asset classes, formats
					and horizons.
				</p>
			</div>
			<a class="btn btn--ghost" href="{base}/strategies">Explore all &rarr;</a>
		</div>

		<div class="grid home-families">
			{#each families as f, i (f.id)}
				<a
					class="card home-family"
					href="{base}/strategies#{f.id}"
					use:reveal={{ delay: i * 90 }}
				>
					<span class="home-family__aka">{f.aka}</span>
					<span class="home-family__title">{f.title}</span>
					<span class="home-family__tag">{f.tag}</span>
				</a>
			{/each}
		</div>

		<div class="home-dims" use:reveal>
			{#each dimensions as d (d.id)}
				<div class="home-dim">
					<span class="home-dim__label">{d.label}</span>
					<span class="home-dim__items">{d.items.join(' · ')}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Infrastructure / ecosystem strip -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head strategies-preview__head" use:reveal>
			<div>
				<p class="eyebrow">Infrastructure</p>
				<h2>An institutional-grade setup</h2>
				<p class="lede">
					Placeholder — a short line on our execution venues and traditional-
					finance service providers.
				</p>
			</div>
			<a class="btn btn--ghost" href="{base}/infrastructure">Infrastructure &rarr;</a>
		</div>

		<div class="ecosystem" use:reveal>
			<div class="ecosystem__item">
				<span class="ecosystem__label">Exchange</span>
				<span class="ecosystem__value">
					{venues.map((v) => v.name).join(' · ')}
				</span>
			</div>
			<div class="ecosystem__item">
				<span class="ecosystem__label">Service providers</span>
				<span class="ecosystem__value">
					{serviceProviders.map((p) => p.label).join(' · ')}
				</span>
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
		transition: transform 0.15s ease, border-color 0.15s ease,
			color 0.15s ease;
	}

	.hero__keywords li:hover {
		transform: translateY(-2px);
		border-color: var(--navy-500);
		color: var(--navy);
	}

	.pillars {
		grid-template-columns: repeat(4, 1fr);
	}

	.strategies-preview__head {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		gap: 24px;
		max-width: none;
	}

	/* Family cards */
	.home-families {
		grid-template-columns: repeat(2, 1fr);
	}

	.home-family {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.home-family__aka {
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.home-family__title {
		font-size: 1.35rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--navy);
	}

	.home-family__tag {
		color: var(--muted);
	}

	/* Dimensions summary */
	.home-dims {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 4px 32px;
		margin-top: 28px;
		padding-top: 28px;
		border-top: 1px solid var(--line);
	}

	.home-dim {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding-block: 8px;
	}

	.home-dim__label {
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.home-dim__items {
		font-size: 0.92rem;
		color: var(--muted);
	}

	/* Ecosystem / infrastructure strip */
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
		.pillars,
		.home-families {
			grid-template-columns: 1fr;
		}
		.strategies-preview__head {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

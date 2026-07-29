<script>
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	// Principles — one-sentence drafts, refine before go-live.
	const values = [
		{
			title: 'Controlled risk',
			body: 'Risk is sized, limited and hedged systematically — never an afterthought.'
		},
		{
			title: 'Evidence over narrative',
			body: 'Every strategy earns its place through out-of-sample evidence.'
		},
		{
			title: 'Built to run',
			body: 'Research and production are one pipeline, engineered to ship and scale.'
		}
	];
</script>

<svelte:head>
	<title>About — AfterCoffee LTD</title>
	<meta
		name="description"
		content="AfterCoffee LTD is a quantitative proprietary trading firm built by a team from banking, trading and digital-asset infrastructure."
	/>
</svelte:head>

<!-- Intro -->
<section class="section intro">
	<AnimatedBackground dense />
	<div class="container intro__content">
		<div class="section__head hero__in">
			<p class="eyebrow">About us</p>
			<h1>Systematic trading, run by people who’ve done it before.</h1>
			<p class="lede">
				AfterCoffee is a proprietary trading firm building systematic strategies
				in crypto — quantitative research paired with production-grade
				engineering.
			</p>
		</div>
	</div>
</section>

<!-- Team -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">The team</p>
			<h2>Who we are</h2>
			<p class="lede">
				We’re a small, senior team spanning research, development and leadership.
				Between us, we’ve traded across asset classes, built trading
				infrastructure from the ground up, and run systematic strategies at hedge
				funds and proprietary trading firms. We keep the team lean and the
				feedback loops short. Everyone here researches, builds and ships.
			</p>
		</div>
	</div>
</section>

<!-- Values -->
<section class="section">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">What we value</p>
			<h2>Principles</h2>
			<p class="lede">A few principles we hold to.</p>
		</div>

		<div class="grid values-grid">
			{#each values as v, i (v.title)}
				<div class="card" use:reveal={{ delay: i * 90 }}>
					<h3>{v.title}</h3>
					<p class="value__body">{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.value__body {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}

	.values-grid {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 720px) {
		.values-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

<script>
	import { alphas } from '$lib/data/strategies.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	const steps = [
		{ n: '01', title: 'Research', body: 'Signals sourced from market data and tested for edge.' },
		{
			n: '02',
			title: 'Validate',
			body: 'Stress-tested out-of-sample across regimes and cost scenarios.'
		},
		{ n: '03', title: 'Execute', body: 'Deployed live with automated risk and execution controls.' },
		{
			n: '04',
			title: 'Monitor',
			body: 'Performance tracked continuously; strategies adjusted or retired.'
		}
	];
</script>

<svelte:head>
	<title>Strategies — AfterCoffee LTD</title>
	<meta
		name="description"
		content="A diversified suite of 15–20 systematic alphas across relative value, lead-lag, mean reversion, stat-arb, momentum, directional and cross-sectional."
	/>
</svelte:head>

<!-- Intro -->
<section class="section intro">
	<AnimatedBackground dense />
	<div class="container intro__content">
		<div class="section__head hero__in">
			<p class="eyebrow">Our strategies</p>
			<h1>A diversified suite of strategies.</h1>
			<p class="lede">
				We combine 15–20 systematic alphas into a single portfolio, spanning a
				range of alpha types.
			</p>
		</div>
	</div>
</section>

<!-- Alphas -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">What we trade</p>
			<h2>The alphas</h2>
			<p class="lede">
				Relative value, lead-lag, mean reversion, statistical arbitrage,
				momentum, directional and cross-sectional.
			</p>
		</div>

		<div class="grid alphas">
			{#each alphas as a, i (a.id)}
				<article id={a.id} class="card alpha" use:reveal={{ delay: i * 70 }}>
					<h3 class="alpha__title">{a.title}</h3>
					<p class="alpha__tag">{a.tag}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Process -->
<section class="section">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">How it works</p>
			<h2>From research to execution</h2>
		</div>

		<ol class="grid process">
			{#each steps as step, i (step.n)}
				<li class="card process__step" use:reveal={{ delay: i * 80 }}>
					<span class="process__n">{step.n}</span>
					<h3>{step.title}</h3>
					<p>{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.alphas {
		grid-template-columns: repeat(3, 1fr);
	}

	.alpha {
		scroll-margin-top: 90px;
	}

	.alpha__title {
		font-size: 1.15rem;
		margin-bottom: 0.35rem;
	}

	.alpha__tag {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}

	.process {
		list-style: none;
		padding: 0;
		margin: 0;
		grid-template-columns: repeat(4, 1fr);
	}

	.process__n {
		display: block;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		color: var(--navy-500);
		margin-bottom: 0.6rem;
	}

	.process__step h3 {
		margin-bottom: 0.4rem;
	}

	.process__step p {
		margin: 0;
		font-size: 0.95rem;
		color: var(--muted);
	}

	@media (max-width: 900px) {
		.alphas {
			grid-template-columns: repeat(2, 1fr);
		}
		.process {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.alphas,
		.process {
			grid-template-columns: 1fr;
		}
	}
</style>

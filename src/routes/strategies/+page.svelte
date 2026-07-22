<script>
	import { families, dimensions, philosophy } from '$lib/data/strategies.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	// Process steps — placeholder copy, to be replaced.
	const steps = [
		{ n: '01', title: 'Research', body: 'Placeholder — to be provided.' },
		{ n: '02', title: 'Validate', body: 'Placeholder — to be provided.' },
		{ n: '03', title: 'Execute', body: 'Placeholder — to be provided.' },
		{ n: '04', title: 'Monitor', body: 'Placeholder — to be provided.' }
	];
</script>

<svelte:head>
	<title>Strategies — AfterCoffee LTD</title>
	<meta
		name="description"
		content="Systematic mean-reversion and momentum strategies, diversified across asset classes, formats, signal factors and horizons."
	/>
</svelte:head>

<!-- Intro -->
<section class="section intro">
	<AnimatedBackground dense />
	<div class="container intro__content">
		<div class="section__head hero__in">
			<p class="eyebrow">Our strategies</p>
			<h1>Two edges, many independent expressions.</h1>
			<p class="lede">
				We run two core families — mean reversion and momentum — and diversify
				them across asset classes, formats, signal factors and horizons. The
				breadth is the point: independent return streams, not a long list of
				correlated ones.
			</p>
		</div>
	</div>
</section>

<!-- Strategy families -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">Strategy families</p>
			<h2>The two edges we trade</h2>
		</div>

		<div class="grid families">
			{#each families as f, i (f.id)}
				<article id={f.id} class="card family" use:reveal={{ delay: i * 90 }}>
					<p class="family__aka">{f.aka}</p>
					<h3 class="family__title">{f.title}</h3>
					<p class="family__tag">{f.tag}</p>
					<p class="family__body">{f.body}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Diversification dimensions -->
<section class="section">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">Diversification</p>
			<h2>How each edge is diversified</h2>
			<p class="lede">
				Every family is expressed along five dimensions — combined, they form a
				broad set of low-correlation strategies.
			</p>
		</div>

		<div class="grid dimensions">
			{#each dimensions as d, i (d.id)}
				<div class="card dimension" use:reveal={{ delay: i * 70 }}>
					<h3 class="dimension__label">{d.label}</h3>
					<p class="dimension__note">{d.note}</p>
					<ul class="dimension__chips">
						{#each d.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Philosophy -->
<section class="section">
	<div class="container">
		<div class="philosophy" use:reveal>
			<AnimatedBackground waves />
			<div class="philosophy__content">
				<p class="eyebrow philosophy__eyebrow">{philosophy.eyebrow}</p>
				<h2 class="philosophy__title">{philosophy.title}</h2>
				<p class="philosophy__formula">
					{philosophy.formula}
					<span class="philosophy__formula-note">{philosophy.formulaNote}</span>
				</p>
				{#each philosophy.body as para (para)}
					<p class="philosophy__body">{para}</p>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Process -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">How it works</p>
			<h2>From research to execution</h2>
			<p class="lede">Placeholder — a short line describing the process.</p>
		</div>

		<ol class="grid process">
			{#each steps as step, i (step.n)}
				<li class="card process__step" use:reveal={{ delay: i * 80 }}>
					<span class="process__n">{step.n}</span>
					<h3>{step.title}</h3>
					<p class="placeholder">{step.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	/* ---- Families ---- */
	.families {
		grid-template-columns: repeat(2, 1fr);
	}

	.family {
		scroll-margin-top: 90px;
	}

	.family__aka {
		margin: 0 0 0.5rem;
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.family__title {
		font-size: 1.5rem;
		margin-bottom: 0.3rem;
	}

	.family__tag {
		margin: 0 0 1rem;
		font-weight: 600;
		color: var(--navy-600);
	}

	.family__body {
		margin: 0;
		color: var(--muted);
		font-size: 0.98rem;
	}

	/* ---- Dimensions ---- */
	.dimensions {
		grid-template-columns: repeat(3, 1fr);
	}

	.dimension__label {
		margin-bottom: 0.35rem;
	}

	.dimension__note {
		margin: 0 0 1rem;
		font-size: 0.9rem;
		color: var(--muted);
	}

	.dimension__chips {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		padding: 0;
		margin: 0;
	}

	.dimension__chips li {
		font-size: 0.82rem;
		font-weight: 500;
		color: var(--navy-600);
		padding: 5px 12px;
		border: 1px solid var(--line);
		border-radius: 999px;
		background: var(--bg);
	}

	/* ---- Philosophy panel ---- */
	.philosophy {
		position: relative;
		overflow: hidden;
		background: var(--navy);
		color: var(--on-navy);
		border-radius: calc(var(--radius) * 1.6);
		padding: clamp(32px, 6vw, 72px);
	}

	.philosophy :global(.bg__wave path) {
		stroke: #ffffff;
	}

	.philosophy :global(.bg__blob) {
		opacity: 0.22;
	}

	.philosophy__content {
		position: relative;
		z-index: 1;
		max-width: 60ch;
	}

	.philosophy__eyebrow {
		color: rgba(234, 240, 251, 0.7);
	}

	.philosophy__title {
		color: #fff;
	}

	.philosophy__formula {
		font-size: clamp(1.4rem, 3.5vw, 2rem);
		font-weight: 600;
		letter-spacing: 0.01em;
		color: #fff;
		margin: 0.5rem 0 1.5rem;
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.35rem 1rem;
	}

	.philosophy__formula-note {
		font-size: 0.9rem;
		font-weight: 400;
		letter-spacing: 0;
		color: rgba(234, 240, 251, 0.65);
	}

	.philosophy__body {
		color: rgba(234, 240, 251, 0.82);
		margin: 0 0 1rem;
	}

	.philosophy__body:last-child {
		margin-bottom: 0;
	}

	/* ---- Process ---- */
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
	}

	@media (max-width: 900px) {
		.dimensions {
			grid-template-columns: repeat(2, 1fr);
		}
		.process {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 620px) {
		.families,
		.dimensions,
		.process {
			grid-template-columns: 1fr;
		}
	}
</style>

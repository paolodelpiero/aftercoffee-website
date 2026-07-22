<script>
	import { venues, serviceProviders } from '$lib/data/infrastructure.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
	<title>Infrastructure — AfterCoffee LTD</title>
	<meta
		name="description"
		content="AfterCoffee LTD's execution venues and traditional-finance service providers."
	/>
</svelte:head>

<!-- Intro -->
<section class="section intro">
	<AnimatedBackground dense />
	<div class="container intro__content">
		<div class="section__head hero__in">
			<p class="eyebrow">Infrastructure</p>
			<h1>An institutional-grade setup.</h1>
			<p class="lede">
				We trade on established venues and operate with traditional-finance
				service providers — the foundation for trading crypto markets safely and
				at scale.
			</p>
		</div>
	</div>
</section>

<!-- Venues -->
<section class="section section--alt">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">Execution venues</p>
			<h2>Where we trade</h2>
			<p class="lede">Placeholder — a short line about our exchange relationships.</p>
		</div>

		<div class="grid venues">
			{#each venues as v, i (v.name)}
				<article class="card venue" use:reveal={{ delay: i * 90 }}>
					<span class="venue__role">{v.role}</span>
					<h3 class="venue__name">{v.name}</h3>
					<p class="venue__note">{v.note}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Service providers -->
<section class="section">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">Service providers</p>
			<h2>Traditional-finance partners</h2>
			<p class="lede">
				Placeholder — a short line on our banking, custody, audit, legal, tax and
				compliance providers.
			</p>
		</div>

		<div class="grid providers">
			{#each serviceProviders as p, i (p.label)}
				<div class="card provider" use:reveal={{ delay: i * 60 }}>
					<span class="provider__label">{p.label}</span>
					<span class="provider__value placeholder">{p.value}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.venues {
		grid-template-columns: repeat(3, 1fr);
	}

	.venue__role {
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.venue__name {
		font-size: 1.5rem;
		margin: 0.3rem 0 0.5rem;
	}

	.venue__note {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}

	.providers {
		grid-template-columns: repeat(3, 1fr);
	}

	.provider {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.provider__label {
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.provider__value {
		font-size: 1.02rem;
		font-weight: 600;
		color: var(--navy);
	}

	@media (max-width: 860px) {
		.venues,
		.providers {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.venues,
		.providers {
			grid-template-columns: 1fr;
		}
	}
</style>

<script>
	import { venues, providers } from '$lib/data/infrastructure.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';
</script>

<svelte:head>
	<title>Infrastructure — AfterCoffee LTD</title>
	<meta
		name="description"
		content="AfterCoffee LTD's execution venues and service providers — Binance and tread.fi."
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
				We trade on established venues and run on professional execution
				infrastructure — the foundation for trading crypto markets safely and at
				scale.
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

		<div class="grid partners">
			{#each venues as p, i (p.name)}
				<article class="card partner" use:reveal={{ delay: i * 90 }}>
					<div class="partner__brand">
						<img class="partner__logo" src={p.logo} alt={p.name} loading="lazy" />
						{#if !p.wordmark}<span class="partner__name">{p.name}</span>{/if}
					</div>
					<span class="partner__role">{p.role}</span>
					<p class="partner__note">{p.note}</p>
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
			<h2>Execution &amp; infrastructure partners</h2>
			<p class="lede">Placeholder — a short line about our service providers.</p>
		</div>

		<div class="grid partners">
			{#each providers as p, i (p.name)}
				<article class="card partner" use:reveal={{ delay: i * 90 }}>
					<div class="partner__brand">
						<img class="partner__logo" src={p.logo} alt={p.name} loading="lazy" />
						{#if !p.wordmark}<span class="partner__name">{p.name}</span>{/if}
					</div>
					<span class="partner__role">{p.role}</span>
					<p class="partner__note">{p.note}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.partners {
		grid-template-columns: repeat(3, 1fr);
	}

	.partner {
		display: flex;
		flex-direction: column;
	}

	.partner__brand {
		display: flex;
		align-items: center;
		gap: 10px;
		height: 34px;
		margin-bottom: 1.1rem;
	}

	.partner__logo {
		height: 26px;
		width: auto;
		max-width: 160px;
		object-fit: contain;
	}

	.partner__name {
		font-size: 1.25rem;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--navy);
	}

	.partner__role {
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--navy-500);
	}

	.partner__note {
		margin: 0.4rem 0 0;
		color: var(--muted);
		font-size: 0.95rem;
	}

	@media (max-width: 860px) {
		.partners {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.partners {
			grid-template-columns: 1fr;
		}
	}
</style>

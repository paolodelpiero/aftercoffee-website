<script>
	import { team, initials, fullName } from '$lib/data/team.js';
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';
	import { reveal } from '$lib/actions/reveal.js';

	// Firm values — placeholder copy, to be replaced.
	const values = [
		{ title: 'Research first', body: 'Placeholder — to be provided.' },
		{ title: 'Disciplined risk', body: 'Placeholder — to be provided.' },
		{ title: 'Engineering rigor', body: 'Placeholder — to be provided.' }
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
			<h1>Built by people from banking, trading and digital-asset infrastructure.</h1>
			<p class="lede">
				AfterCoffee is a quantitative proprietary trading firm. It is built by a
				team that has spent years inside banking, trading and digital-asset
				infrastructure — and understands what it takes to trade crypto markets
				with institutional discipline.
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
		</div>

		<div class="grid team-grid">
			{#each team as m, i (m.first + m.role)}
				<article class="card member" use:reveal={{ delay: i * 80 }}>
					<div class="member__avatar" aria-hidden="true">{initials(m)}</div>
					<div class="member__body">
						<h3 class="member__name">
							{fullName(m)}
							{#if m.surnamePending}
								<span class="member__pending" title="Surname to be confirmed"
									>surname TBC</span
								>
							{/if}
						</h3>
						<p class="member__role">{m.role}</p>
						{#if m.prev?.length}
							<p class="member__prev">
								<span class="member__prev-label">Previously</span>
								{#each m.prev as p (p)}
									<span class="member__prev-badge">{p}</span>
								{/each}
							</p>
						{/if}
						<p class="member__bio" class:placeholder={m.bio.startsWith('Placeholder')}>
							{m.bio}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Values -->
<section class="section">
	<div class="container">
		<div class="section__head" use:reveal>
			<p class="eyebrow">What we value</p>
			<h2>Principles</h2>
			<p class="lede">Placeholder — a short line about how the firm works.</p>
		</div>

		<div class="grid values-grid">
			{#each values as v, i (v.title)}
				<div class="card" use:reveal={{ delay: i * 90 }}>
					<h3>{v.title}</h3>
					<p class="placeholder">{v.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.team-grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.member {
		display: flex;
		gap: 20px;
		align-items: flex-start;
	}

	.member__avatar {
		flex: none;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--navy);
		color: #fff;
		font-weight: 700;
		font-size: 1.05rem;
		letter-spacing: 0.02em;
	}

	.member__name {
		margin-bottom: 0.15rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.member__pending {
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--muted);
		border: 1px dashed var(--line);
		border-radius: 999px;
		padding: 2px 8px;
	}

	.member__role {
		margin: 0 0 0.5rem;
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--navy-500);
	}

	.member__prev {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 6px;
		margin: 0 0 0.7rem;
	}

	.member__prev-label {
		font-size: 0.68rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--muted);
	}

	.member__prev-badge {
		font-size: 0.76rem;
		font-weight: 600;
		color: var(--navy-600);
		background: var(--bg-alt);
		border: 1px solid var(--line);
		border-radius: 6px;
		padding: 2px 8px;
	}

	.member__bio {
		margin: 0;
		font-size: 0.95rem;
	}

	.values-grid {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 720px) {
		.team-grid {
			grid-template-columns: 1fr;
		}
		.values-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

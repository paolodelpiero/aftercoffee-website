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

	// "See more" profile modal.
	/** @type {HTMLDialogElement | undefined} */
	let dialogEl = $state();
	let active = $state(/** @type {any} */ (null));

	/** @param {any} m */
	function openMember(m) {
		active = m;
		dialogEl?.showModal();
	}

	/** @param {MouseEvent} e — close when the backdrop (the dialog itself) is clicked */
	function onBackdropClick(e) {
		if (e.target === dialogEl) dialogEl?.close();
	}
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
						{#if m.bioFull}
							<button type="button" class="member__more" onclick={() => openMember(m)}>
								See more <span aria-hidden="true">&rarr;</span>
							</button>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<!-- Profile modal (Escape / close button / backdrop click all dismiss it) -->
<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
<dialog
	bind:this={dialogEl}
	class="modal"
	onclose={() => (active = null)}
	onclick={onBackdropClick}
>
	{#if active}
		<div class="modal__box">
			<button
				type="button"
				class="modal__close"
				onclick={() => dialogEl?.close()}
				aria-label="Close"
			>
				&times;
			</button>
			<div class="modal__head">
				<div class="member__avatar member__avatar--lg" aria-hidden="true">
					{initials(active)}
				</div>
				<div>
					<h2 class="modal__name">{fullName(active)}</h2>
					<p class="modal__role">{active.role}</p>
				</div>
			</div>
			{#if active.prev?.length}
				<p class="member__prev">
					<span class="member__prev-label">Previously</span>
					{#each active.prev as p (p)}
						<span class="member__prev-badge">{p}</span>
					{/each}
				</p>
			{/if}
			<p class="modal__bio">{active.bioFull}</p>
		</div>
	{/if}
</dialog>

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

	.member__more {
		margin-top: 0.85rem;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		font: inherit;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--navy-600);
		display: inline-flex;
		align-items: center;
		gap: 0.35em;
		transition: gap 0.15s ease, color 0.15s ease;
	}

	.member__more:hover {
		color: var(--navy);
		gap: 0.6em;
	}

	.values-grid {
		grid-template-columns: repeat(3, 1fr);
	}

	/* ---- Profile modal ---- */
	.modal {
		width: min(640px, 92vw);
		padding: 0;
		border: none;
		border-radius: calc(var(--radius) * 1.5);
		background: transparent;
		color: var(--text);
		box-shadow: 0 30px 80px -30px rgba(10, 31, 68, 0.55);
	}

	.modal::backdrop {
		background: rgba(10, 31, 68, 0.5);
		backdrop-filter: blur(3px);
	}

	.modal__box {
		position: relative;
		background: var(--bg);
		border-radius: inherit;
		padding: clamp(26px, 4vw, 44px);
	}

	.modal__close {
		position: absolute;
		top: 14px;
		right: 16px;
		width: 36px;
		height: 36px;
		border: none;
		background: none;
		border-radius: 8px;
		font-size: 1.6rem;
		line-height: 1;
		color: var(--muted);
		cursor: pointer;
		transition: background 0.15s ease, color 0.15s ease;
	}

	.modal__close:hover {
		background: var(--bg-alt);
		color: var(--navy);
	}

	.modal__head {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-bottom: 1.25rem;
	}

	.member__avatar--lg {
		width: 64px;
		height: 64px;
		font-size: 1.2rem;
	}

	.modal__name {
		margin: 0 0 0.15rem;
		font-size: 1.4rem;
	}

	.modal__role {
		margin: 0;
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--navy-500);
	}

	.modal__bio {
		margin: 0.5rem 0 0;
		color: var(--text);
		line-height: 1.7;
	}

	@media (min-width: 721px) {
		.modal[open] {
			animation: modalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		}
	}

	@keyframes modalIn {
		from {
			opacity: 0;
			transform: translateY(10px) scale(0.98);
		}
		to {
			opacity: 1;
			transform: none;
		}
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

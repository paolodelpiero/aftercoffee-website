<script>
	import AnimatedBackground from '$lib/components/AnimatedBackground.svelte';

	// This is a static site (no backend). To actually RECEIVE submissions, create a
	// form endpoint (e.g. Formspree, Getform, Basin) and paste its POST URL below.
	// While empty, the form validates and shows the thank-you state, but does not
	// deliver anywhere.
	const FORM_ENDPOINT = '';

	let firstName = $state('');
	let lastName = $state('');
	let email = $state('');
	let status = $state(
		/** @type {'idle' | 'submitting' | 'done' | 'error'} */ ('idle')
	);
	let errorMsg = $state('');

	const emailValid = $derived(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()));
	const canSubmit = $derived(
		!!firstName.trim() && !!lastName.trim() && emailValid && status !== 'submitting'
	);

	/** @param {SubmitEvent} e */
	async function handleSubmit(e) {
		e.preventDefault();
		if (!canSubmit) return;
		status = 'submitting';
		errorMsg = '';

		const payload = {
			firstName: firstName.trim(),
			lastName: lastName.trim(),
			email: email.trim()
		};

		try {
			if (FORM_ENDPOINT) {
				const res = await fetch(FORM_ENDPOINT, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
					body: JSON.stringify(payload)
				});
				if (!res.ok) throw new Error('Request failed');
			}
			status = 'done';
		} catch {
			status = 'error';
			errorMsg = 'Something went wrong. Please try again, or email us directly.';
		}
	}
</script>

<svelte:head>
	<title>Contact — AfterCoffee LTD</title>
	<meta name="description" content="Get in touch with AfterCoffee LTD." />
</svelte:head>

<!-- Intro -->
<section class="section intro">
	<AnimatedBackground dense />
	<div class="container intro__content">
		<div class="section__head hero__in">
			<p class="eyebrow">Contact</p>
			<h1>Get in touch.</h1>
			<p class="lede">
				Leave your details and the team will get back to you within 24 hours.
			</p>
		</div>
	</div>
</section>

<!-- Form -->
<section class="section section--alt">
	<div class="container contact">
		<div class="contact__aside">
			<h2>Reach us</h2>
			<p class="lede">
				Prefer email? Write to us directly and we’ll respond within one business
				day.
			</p>
			<p class="contact__email">
				<a href="mailto:contact@aftercoffee.tech">contact@aftercoffee.tech</a>
			</p>
		</div>

		<div class="card contact__card">
			{#if status === 'done'}
				<div class="thankyou" role="status">
					<div class="thankyou__check" aria-hidden="true">✓</div>
					<h2>Thank you</h2>
					<p>The team will get back to you within 24 hours.</p>
				</div>
			{:else}
				<form class="form" onsubmit={handleSubmit} novalidate>
					<div class="form__row">
						<div class="field">
							<label for="firstName">First name</label>
							<input
								id="firstName"
								type="text"
								autocomplete="given-name"
								bind:value={firstName}
								required
							/>
						</div>
						<div class="field">
							<label for="lastName">Last name</label>
							<input
								id="lastName"
								type="text"
								autocomplete="family-name"
								bind:value={lastName}
								required
							/>
						</div>
					</div>

					<div class="field">
						<label for="email">Email</label>
						<input
							id="email"
							type="email"
							autocomplete="email"
							bind:value={email}
							required
						/>
					</div>

					{#if status === 'error'}
						<p class="form__error" role="alert">{errorMsg}</p>
					{/if}

					<button class="btn btn--primary form__submit" type="submit" disabled={!canSubmit}>
						{status === 'submitting' ? 'Sending…' : 'Submit'}
					</button>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	.contact {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: clamp(32px, 6vw, 72px);
		align-items: start;
	}

	.contact__aside .lede {
		margin-top: 1rem;
	}

	.contact__email {
		margin-top: 1.25rem;
		font-size: 1.05rem;
		font-weight: 600;
	}

	.contact__card {
		padding: clamp(24px, 4vw, 40px);
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.form__row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 18px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.field label {
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--navy-600);
	}

	.field input {
		font: inherit;
		font-size: 0.98rem;
		color: var(--text);
		padding: 12px 14px;
		border: 1px solid var(--line);
		border-radius: var(--radius);
		background: var(--bg);
		transition: border-color 0.15s ease, box-shadow 0.15s ease;
	}

	.field input:focus {
		outline: none;
		border-color: var(--navy-500);
		box-shadow: 0 0 0 3px rgba(47, 77, 122, 0.15);
	}

	.form__error {
		margin: 0;
		font-size: 0.9rem;
		color: #b3261e;
	}

	.form__submit {
		align-self: flex-start;
		margin-top: 4px;
	}

	.form__submit:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.thankyou {
		text-align: center;
		padding: clamp(16px, 4vw, 32px) 0;
	}

	.thankyou__check {
		width: 56px;
		height: 56px;
		margin: 0 auto 1rem;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--navy);
		color: #fff;
		font-size: 1.6rem;
		font-weight: 700;
	}

	.thankyou h2 {
		margin-bottom: 0.4rem;
	}

	.thankyou p {
		margin: 0;
		color: var(--muted);
	}

	@media (max-width: 760px) {
		.contact {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 460px) {
		.form__row {
			grid-template-columns: 1fr;
		}
	}
</style>

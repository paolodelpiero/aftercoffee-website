<script>
	// Minimal wordmark + coffee-cup mark. `size` scales the glyph.
	let { size = 26 } = $props();
</script>

<span class="logo">
	<svg
		class="logo__mark"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		aria-hidden="true"
	>
		<!-- steam -->
		<path
			d="M9 2.5c-.8.9-.8 1.8 0 2.7M12.5 2.5c-.8.9-.8 1.8 0 2.7"
			stroke="currentColor"
			stroke-width="1.4"
			stroke-linecap="round"
		/>
		<!-- cup -->
		<path
			d="M4 8.5h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-4Z"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
		<!-- handle -->
		<path
			d="M17 9.5h1.5a2.5 2.5 0 0 1 0 5H17"
			stroke="currentColor"
			stroke-width="1.6"
			stroke-linejoin="round"
		/>
	</svg>
	<span class="logo__word">
		After<strong>Coffee</strong><span class="logo__ltd">LTD</span>
	</span>
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		color: var(--navy);
	}

	.logo__mark {
		flex: none;
		color: var(--navy);
	}

	.logo__word {
		font-size: 1.18rem;
		font-weight: 600;
		letter-spacing: -0.02em;
		color: var(--navy);
		line-height: 1;
	}

	.logo__word strong {
		font-weight: 800;
	}

	.logo__ltd {
		margin-left: 0.4rem;
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		color: var(--muted);
		vertical-align: 0.35em;
	}
</style>

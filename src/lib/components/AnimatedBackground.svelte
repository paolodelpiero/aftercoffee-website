<script>
	// Layered, GPU-friendly ambient background: soft navy "aurora" blobs + a
	// faint drifting grid, plus an optional seamlessly-scrolling "signal wave"
	// (a nod to the mean-reversion / price-series theme). Purely decorative.
	//
	// Props:
	//   waves  — render the animated signal lines (used on the homepage hero)
	//   dense  — slightly stronger blobs (used on page intros)
	let { waves = false, dense = false } = $props();

	// Build a periodic sine path. Width is 2x the viewBox so a -50% translate
	// (one period, since 1200 divides each period) loops seamlessly.
	/**
	 * @param {number} amp
	 * @param {number} period  must divide 1200
	 * @param {number} phase
	 * @param {number} baseline
	 */
	function wavePath(amp, period, phase, baseline = 150) {
		const width = 2400;
		const step = 8;
		let d = '';
		for (let x = 0; x <= width; x += step) {
			const yy = baseline + amp * Math.sin((2 * Math.PI * (x + phase)) / period);
			d += (x === 0 ? 'M' : 'L') + x + ' ' + yy.toFixed(2) + ' ';
		}
		return d.trim();
	}

	const lines = $derived(
		waves
			? [
					{ d: wavePath(24, 400, 0, 168), opacity: 0.14, width: 1.6, dur: 28 },
					{ d: wavePath(34, 300, 140, 150), opacity: 0.09, width: 1.4, dur: 38 },
					{ d: wavePath(16, 240, 60, 132), opacity: 0.18, width: 1.2, dur: 22 }
				]
			: []
	);
</script>

<div class="bg" class:bg--dense={dense} aria-hidden="true">
	<span class="bg__blob bg__blob--1"></span>
	<span class="bg__blob bg__blob--2"></span>
	<span class="bg__blob bg__blob--3"></span>
	<span class="bg__grid"></span>

	{#if waves}
		<div class="bg__waves">
			{#each lines as l, i (i)}
				<svg
					class="bg__wave"
					viewBox="0 0 2400 300"
					preserveAspectRatio="none"
					style="--dur:{l.dur}s; opacity:{l.opacity}"
				>
					<path
						d={l.d}
						fill="none"
						stroke="var(--navy)"
						stroke-width={l.width}
						vector-effect="non-scaling-stroke"
					/>
				</svg>
			{/each}
		</div>
	{/if}
</div>

<style>
	.bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
		z-index: 0;
	}

	/* ---- Aurora blobs ---- */
	.bg__blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(70px);
		opacity: 0.5;
		will-change: transform;
	}

	.bg--dense .bg__blob {
		opacity: 0.7;
	}

	.bg__blob--1 {
		width: 46vw;
		height: 46vw;
		max-width: 620px;
		max-height: 620px;
		top: -14%;
		left: -8%;
		background: radial-gradient(
			circle at 50% 50%,
			rgba(30, 58, 103, 0.28),
			transparent 68%
		);
		animation: drift1 24s ease-in-out infinite;
	}

	.bg__blob--2 {
		width: 40vw;
		height: 40vw;
		max-width: 540px;
		max-height: 540px;
		top: -6%;
		right: -6%;
		background: radial-gradient(
			circle at 50% 50%,
			rgba(47, 77, 122, 0.22),
			transparent 68%
		);
		animation: drift2 30s ease-in-out infinite;
	}

	.bg__blob--3 {
		width: 34vw;
		height: 34vw;
		max-width: 460px;
		max-height: 460px;
		bottom: -18%;
		left: 32%;
		background: radial-gradient(
			circle at 50% 50%,
			rgba(10, 31, 68, 0.16),
			transparent 70%
		);
		animation: drift3 34s ease-in-out infinite;
	}

	/* ---- Drifting grid ---- */
	.bg__grid {
		position: absolute;
		inset: -2px;
		background-image: linear-gradient(rgba(10, 31, 68, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(10, 31, 68, 0.05) 1px, transparent 1px);
		background-size: 52px 52px;
		mask-image: radial-gradient(120% 100% at 50% 0%, #000 35%, transparent 78%);
		-webkit-mask-image: radial-gradient(
			120% 100% at 50% 0%,
			#000 35%,
			transparent 78%
		);
		animation: gridDrift 60s linear infinite;
	}

	/* ---- Signal waves ---- */
	.bg__waves {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 4%;
		height: min(46vh, 340px);
		mask-image: linear-gradient(
			90deg,
			transparent,
			#000 14%,
			#000 86%,
			transparent
		);
		-webkit-mask-image: linear-gradient(
			90deg,
			transparent,
			#000 14%,
			#000 86%,
			transparent
		);
	}

	.bg__wave {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 200%;
		height: 100%;
		animation: waveScroll var(--dur, 30s) linear infinite;
		will-change: transform;
	}

	/* ---- Keyframes ---- */
	@keyframes drift1 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(6%, 8%) scale(1.08);
		}
	}
	@keyframes drift2 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(-7%, 6%) scale(1.1);
		}
	}
	@keyframes drift3 {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		50% {
			transform: translate(4%, -6%) scale(0.94);
		}
	}
	@keyframes gridDrift {
		to {
			background-position: 52px 52px;
		}
	}
	@keyframes waveScroll {
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bg__blob,
		.bg__grid,
		.bg__wave {
			animation: none !important;
		}
	}
</style>

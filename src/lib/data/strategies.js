/**
 * Strategy content for AfterCoffee LTD — PUBLIC-FACING.
 *
 * This is a curated, IP-safe distillation of the internal strategy library.
 * It intentionally omits confidential material (live/roadmap status, specific
 * signal thresholds, capacity/timing plans, per-strategy parameters).
 *
 * Copy is draft — review before go-live. No performance claims are made.
 */

/**
 * Core strategy families (the two return-generating edges).
 * `id` doubles as the anchor target linked from the homepage.
 *
 * @typedef {Object} Family
 * @property {string} id
 * @property {string} title
 * @property {string} aka   Related industry terms.
 * @property {string} tag   One-line summary.
 * @property {string} body  Short description (methodology, no performance claims).
 */

/** @type {Family[]} */
export const families = [
	{
		id: 'mean-reversion',
		title: 'Mean Reversion',
		aka: 'Relative value · Lead-lag',
		tag: 'Fade dislocations back to fair value',
		body: 'Systematic strategies that identify temporary dislocations — between related instruments or within a single asset — and position for a return toward equilibrium. Expressed in pairs, cross-sectional and directional formats, across fast and slow horizons.'
	},
	{
		id: 'momentum',
		title: 'Momentum',
		aka: 'Trend · Lead-lag',
		tag: 'Ride persistent directional moves',
		body: 'Systematic strategies that capture persistence in returns and the way moves propagate across related instruments, positioning with the prevailing trend. Expressed in pairs, cross-sectional and directional formats, across fast and slow horizons.'
	}
];

/**
 * The dimensions along which each strategy family is expressed.
 *
 * @typedef {Object} Dimension
 * @property {string} id
 * @property {string} label
 * @property {string} note
 * @property {string[]} items
 */

/** @type {Dimension[]} */
export const dimensions = [
	{
		id: 'asset-classes',
		label: 'Asset classes',
		note: 'Methods researched and validated across markets — not crypto alone.',
		items: ['Crypto', 'Global equity indices', 'FX', 'Commodities', 'Rates']
	},
	{
		id: 'formats',
		label: 'Formats',
		note: 'How each edge is expressed as a position.',
		items: ['Pairs', 'Cross-sectional', 'Directional']
	},
	{
		id: 'factors',
		label: 'Signal factors',
		note: 'The underlying data each signal is built from.',
		items: ['Returns', 'Price', 'Volatility', 'Liquidity', 'Funding (crypto)']
	},
	{
		id: 'horizons',
		label: 'Horizons',
		note: 'Fast intraday through slow multi-day holding periods.',
		items: ['Fast (intraday)', 'Slow (multi-day)']
	},
	{
		id: 'construction',
		label: 'Construction',
		note: 'Exposure is managed at the book level.',
		items: ['Dollar-neutral', 'Beta-neutral', 'Market-neutral', 'Directional']
	}
];

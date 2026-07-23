/**
 * Strategy content for AfterCoffee LTD — PUBLIC-FACING.
 *
 * The book combines ~15–20 systematic strategies across a range of alpha types.
 * Descriptions are generic and IP-safe; refine before go-live.
 *
 * @typedef {Object} Alpha
 * @property {string} id
 * @property {string} title
 * @property {string} tag   One-line description.
 */

/** @type {Alpha[]} */
export const alphas = [
	{
		id: 'relative-value',
		title: 'Relative value',
		tag: 'Trade the spread between related instruments back to fair value.'
	},
	{
		id: 'lead-lag',
		title: 'Lead-lag',
		tag: 'Exploit predictable timing between correlated assets.'
	},
	{
		id: 'mean-reversion',
		title: 'Mean reversion',
		tag: 'Fade short-term dislocations back to equilibrium.'
	},
	{
		id: 'stat-arb',
		title: 'Statistical arbitrage',
		tag: 'Systematic arbitrage across baskets of correlated assets.'
	},
	{
		id: 'momentum',
		title: 'Momentum',
		tag: 'Position with persistent directional moves.'
	},
	{
		id: 'directional',
		title: 'Directional',
		tag: 'Express a view on a single asset’s direction.'
	},
	{
		id: 'cross-sectional',
		title: 'Cross-sectional',
		tag: 'Rank a universe and trade long/short across it.'
	}
];

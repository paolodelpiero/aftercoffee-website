/**
 * Team roster for AfterCoffee LTD.
 *
 * `surnamePending: true` marks a surname still to be confirmed — the UI shows a
 * subtle placeholder. Fill `last` and drop the flag when the name is final.
 * `prev` lists notable prior firms, shown as small badges.
 *
 * @typedef {Object} Member
 * @property {string} first
 * @property {string} last
 * @property {string} role
 * @property {string} bio         Short bio.
 * @property {string[]} [prev]    Prior firms / background.
 * @property {boolean} [surnamePending]
 */

/** @type {Member[]} */
export const team = [
	{
		first: 'Daniel',
		last: 'Rumpf',
		role: 'Chief Executive Officer',
		bio: 'Placeholder bio — to be provided. Sets the firm’s direction, strategy and partnerships.'
	},
	{
		first: 'Suman',
		last: '',
		surnamePending: true,
		role: 'Senior Quant Researcher',
		prev: ['PIMCO', 'Deutsche Bank'],
		bio: 'Brings institutional research experience from PIMCO and Deutsche Bank to systematic crypto strategy design — leading signal research across the firm.'
	},
	{
		first: 'Adi',
		last: '',
		surnamePending: true,
		role: 'Senior Quant Developer',
		bio: 'Placeholder bio — to be provided. Owns the research-to-production trading infrastructure.'
	},
	{
		first: 'Paolo',
		last: 'Del Piero',
		role: 'Junior Quant Researcher',
		bio: 'Placeholder bio — to be provided. Works on strategy research, backtesting and analysis.'
	}
];

/**
 * Initials for the avatar badge, derived from available name parts.
 * @param {Member} m
 * @returns {string}
 */
export function initials(m) {
	const a = m.first?.[0] ?? '';
	const b = m.last?.[0] ?? '';
	return (a + b || m.first?.slice(0, 2) || '?').toUpperCase();
}

/**
 * Full display name, with a subtle marker while a surname is pending.
 * @param {Member} m
 * @returns {string}
 */
export function fullName(m) {
	if (m.surnamePending) return `${m.first} —`;
	return `${m.first} ${m.last}`.trim();
}

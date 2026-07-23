/**
 * Team roster for AfterCoffee LTD.
 *
 * `bio` is the short card version; `bioFull` (optional) is the long profile shown
 * in the "See more" modal. `prev` lists notable prior firms (badges).
 * `surnamePending: true` marks a surname still to be confirmed.
 *
 * @typedef {Object} Member
 * @property {string} first
 * @property {string} last
 * @property {string} role
 * @property {string} bio          Short bio (card).
 * @property {string} [bioFull]    Long bio (modal). Omit to hide "See more".
 * @property {string[]} [prev]     Prior firms / background.
 * @property {boolean} [surnamePending]
 */

/** @type {Member[]} */
export const team = [
	{
		first: 'Daniel',
		last: 'Rumpf',
		role: 'Chief Executive Officer',
		bio: 'Entrepreneur and founder across the lending industry — from a peer-to-peer lending platform to a private lending firm. Builds and leads lean, high-performing teams, pairing strategic vision with hands-on execution.',
		bioFull:
			'With an entrepreneurial mindset at his core, Daniel has founded and built multiple businesses across the lending industry, ranging from a peer-to-peer lending platform to a private lending firm. He brings a strong passion for leadership and execution, having consistently assembled and guided lean, high-performing teams throughout his ventures. His experience combines strategic vision with a hands-on approach to building and scaling financial businesses.'
	},
	{
		first: 'Suman',
		last: 'Suarabh',
		role: 'Senior Quant Researcher',
		bio: 'Nearly 16 years in quantitative finance — six as a cross-asset trader at investment banks, then a decade as a quant researcher in crypto and futures. Covers the full research lifecycle, from data engineering to production.',
		bioFull:
			'With a foundation in Computer Science and Mathematics and nearly 16 years in quantitative finance, Suman began as a cross-asset trader at leading investment banks before spending the past decade as a quantitative researcher at cryptocurrency and futures hedge funds and proprietary trading firms. His work spans the full research lifecycle — data engineering, alpha discovery, statistical modeling and machine learning, signal validation, portfolio construction and risk — and pairs deep quantitative research with the software engineering to take models into production.'
	},
	{
		first: 'Adhish',
		last: 'Aggarwal',
		role: 'Senior Quant Developer',
		bio: 'Builds the high-performance infrastructure behind our systematic strategies. 7+ years architecting multi-exchange market-data stacks, low-latency order routing and OMS, and venue connectivity via FIX, ZeroMQ and custom TCP.',
		bioFull:
			'Adhish Aggarwal is a quantitative developer who builds the high-performance trading infrastructure that powers systematic strategies across crypto and global futures markets. Over more than seven years, he has architected end-to-end execution systems from the ground up — engineering multi-exchange market data stacks that ingest and normalize trades and order-book data at scale, low-latency order routing and OMS layers with idempotent order handling and real-time fill reconciliation, and connectivity to major venues via FIX, ZeroMQ, and custom TCP protocols.'
	},
	{
		first: 'Paolo',
		last: 'Del Piero',
		role: 'Junior Quant Researcher',
		bio: 'Software-engineering background spanning private banking, advisory, fintech and quant research. Certified financial advisor in Italy, fintech founder, and reading Economics & Financial Markets at the University of Trieste.',
		bioFull:
			'Paolo Del Piero is a Junior Quantitative Researcher with a strong software engineering background and practical expertise in financial markets. His experience spans private banking, financial advisory, fintech entrepreneurship, and quantitative research. He is a certified financial advisor in Italy and runs a fintech startup, where he combines technology, finance, and product development. He is currently pursuing a degree in Economics and Financial Markets at the University of Trieste. His multidisciplinary background enables him to approach quantitative research from both a technical and market-driven perspective.'
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

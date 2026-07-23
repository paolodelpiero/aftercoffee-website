/**
 * Execution venues and service providers for AfterCoffee LTD.
 *
 * Logos are imported so Vite fingerprints them and resolves correct URLs.
 * `wordmark: true` means the logo already contains the name (don't print it
 * again as text); `false` means the logo is an icon and the name is shown too.
 *
 * @typedef {Object} Partner
 * @property {string} name
 * @property {string} role
 * @property {string} note
 * @property {string} logo
 * @property {boolean} wordmark
 */

import binanceLogo from '$lib/assets/logos/binance.svg';
import treadfiLogo from '$lib/assets/logos/treadfi.svg';

/** Exchanges / execution venues. @type {Partner[]} */
export const venues = [
	{
		name: 'Binance',
		role: 'Primary exchange',
		note: 'Spot, perpetuals and futures execution.',
		logo: binanceLogo,
		wordmark: false
	}
];

/** Service providers. @type {Partner[]} */
export const providers = [
	{
		name: 'tread.fi',
		role: 'Execution & order management',
		note: 'Crypto-native OEMS and algorithmic trading terminal — smart order routing across centralized exchanges, perp DEXs and on-chain venues.',
		logo: treadfiLogo,
		wordmark: true
	}
];

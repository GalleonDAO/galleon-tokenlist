/**
 * This is the index of the project. Default export from this file
 * can be imported from the published npm package like so:
 *
 * ```js
 * import PackageName from '@galleondao/setswap-tokenlist';
 * ```
 *
 * And non-default exports can be imported like this:
 *
 * ```jss
 * import {functionName} from '@galleondao/setswap-tokenlist';
 * ```
 */

import ARBITRUM_TOKENS from './lists/arbitrum';
import AVALANCHE_TOKENS from './lists/avalanche';
import MAINNET_TOKENS from './lists/mainnet';
import MATIC_TOKENS from './lists/matic';
import OPTIMISM_TOKENS from './lists/optimism';

export interface TokenData {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
}

export const SetSwapArbitrumTokens = ARBITRUM_TOKENS;
export const SetSwapAvalancheTokens = AVALANCHE_TOKENS;
export const SetSwapMainnetTokens = MAINNET_TOKENS;
export const SetSwapMaticTokens = MATIC_TOKENS;
export const SetSwapOptimismTokens = OPTIMISM_TOKENS;

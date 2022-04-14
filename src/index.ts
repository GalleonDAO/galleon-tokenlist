/**
 * This is the index of the project. Default export from this file
 * can be imported from the published npm package like so:
 *
 * ```js
 * import PackageName from '@indexcoop/tokenlists';
 * ```
 *
 * And non-default exports can be imported like this:
 *
 * ```jss
 * import {functionName} from '@indexcoop/tokenlists';
 * ```
 */

import ARBITRUM_TOKENS, { GALLEON_ARBITRUM_TOKENS } from './lists/arbitrum'
import AVALANCHE_TOKENS, { GALLEON_AVALANCHE_TOKENS } from './lists/avalanche'
import MAINNET_TOKENS, { GALLEON_MAINNET_TOKENS } from './lists/mainnet'
import MATIC_TOKENS, { GALLEON_MATIC_TOKENS } from './lists/matic'
import OPTIMISM_TOKENS, { GALLEON_OPTIMISM_TOKENS } from './lists/optimism'

export interface TokenData {
  chainId: number
  address: string
  name: string
  symbol: string
  decimals: number
  logoURI: string
}

export const ArbitrumTokens = ARBITRUM_TOKENS
export const GalleonArbitrumTokens = GALLEON_ARBITRUM_TOKENS
export const AvalancheTokens = AVALANCHE_TOKENS
export const GalleonAvalancheTokens = GALLEON_AVALANCHE_TOKENS
export const MainnetTokens = MAINNET_TOKENS
export const GalleonMainnetTokens = GALLEON_MAINNET_TOKENS
export const MaticTokens = MATIC_TOKENS
export const GalleonMaticTokens = GALLEON_MATIC_TOKENS
export const OptimismTokens = OPTIMISM_TOKENS
export const GalleonOptimismTokens = GALLEON_OPTIMISM_TOKENS

import { TokenData } from '..'

const SETSWAP_MAINNET_TOKENS: TokenData[] = [
  {
    name: 'ETH Max Yield Index',
    address: '0x0FE20E0Fa9C78278702B05c333Cc000034bb69E2',
    symbol: 'ETHMAXY',
    decimals: 18,
    chainId: 1,
    logoURI:
      'https://github.com/GalleonDAO/setswap-tokenlist/blob/main/logos/ethmaxy.png?raw=true',
  },
]

const MAINNET_TOKENS: TokenData[] = [
  ...SETSWAP_MAINNET_TOKENS,
  {
    name: 'Aave interest bearing STETH',
    address: '0x1982b2F5814301d4e9a8b0201555376e62F82428',
    symbol: 'aSTETH',
    decimals: 18,
    chainId: 1,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8085.png',
  },
  {
    name: 'Aave variable debt bearing WETH',
    address: '0xF63B34710400CAd3e044cFfDcAb00a0f32E33eCf',
    symbol: 'variableDebtWETH',
    decimals: 18,
    chainId: 1,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2396.png',
  },
]

export { SETSWAP_MAINNET_TOKENS }
export default MAINNET_TOKENS

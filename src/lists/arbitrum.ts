import { TokenData } from '..'

const SETSWAP_ARBITRUM_TOKENS: TokenData[] = [
  {
    name: 'Doubloon Token',
    address: '0xd3f1da62cafb7e7bc6531ff1cef6f414291f03d3',
    symbol: 'DBL',
    decimals: 18,
    chainId: 42161,
    logoURI:
      'https://github.com/GalleonDAO/setswap-tokenlist/blob/main/logos/dbl.png?raw=true',
  },
]

const ARBITRUM_TOKENS: TokenData[] = [...SETSWAP_ARBITRUM_TOKENS]

export { SETSWAP_ARBITRUM_TOKENS }
export default ARBITRUM_TOKENS

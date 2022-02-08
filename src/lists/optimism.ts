import {TokenData} from '..';

const SETSWAP_OPTIMISM_TOKENS: TokenData[] = [
  {
    name: 'SOLUNAVAX Index',
    address: '0xbA6a2Fa321BB06D668c5192Be77428106c5C01E5',
    symbol: 'SOLUNAVAX',
    decimals: 18,
    chainId: 10,
    logoURI:
      'https://github.com/GalleonDAO/setswap-tokenlist/blob/main/logos/solunavax-200px.png?raw=true',
  },
  {
    name: 'SOL 1X',
    address: '0x95fffb13856d2be739a862f9b645573e5c838bdd',
    symbol: 'SOL1X',
    decimals: 18,
    chainId: 10,
    logoURI:
      'https://assets.coingecko.com/coins/images/23503/small/sol1x.png?1644296700',
  },
  {
    name: 'AVAX 1X',
    address: '0x522439fb1da6db24f18baab1782486b55fe3a7b6',
    symbol: 'AVAX1X',
    decimals: 18,
    chainId: 10,
    logoURI:
      'https://assets.coingecko.com/coins/images/23504/small/avax1x.png?1644296887',
  },
  {
    name: 'LUNA 1X',
    address: '0x19f0622903a977a24bb47521732e6291002a4ede',
    symbol: 'LUNA1X',
    decimals: 18,
    chainId: 10,
    logoURI:
      'https://assets.coingecko.com/coins/images/23506/small/luna1x.png?1644297421',
  },
];

const OPTIMISM_TOKENS: TokenData[] = [...SETSWAP_OPTIMISM_TOKENS];

export {SETSWAP_OPTIMISM_TOKENS};
export default OPTIMISM_TOKENS;

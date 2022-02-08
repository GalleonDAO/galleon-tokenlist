# tokenlists

npm: <https://www.npmjs.com/package/@galleondao/setswap-tokenlist>

github: <https://github.com/GalleonDAO/setswap-tokenlist>

---

## Install

```bash
yarn add @galleondao/setswap-tokenlist
```

---

## Usage

```typescript
import {
  MainnetTokens,
  MaticTokens,
  SetSwapMainnetTokens,
  SetSwapMaticTokens,
  TokenData,
} from '@galleondao/setswap-tokenlist';
```

- `SetSwapMainnetTokens`: Only SetSwap Mainnet tokens
- `SetSwapMaticTokens`: Only SetSwap Matic network tokens
- `SetSwapArbitrumTokens`: Only SetSwap Arbitrum roll-up tokens
- `SetSwapOptimismTokens`: Only SetSwap Optimism roll-up tokens
- `SetSwapAvalanceTokens`: Only SetSwap Avalanche network tokens
- `TokenData`: The token interface used by the lists

---

## Contributing

`npm run commit`

REQUIRED: Due to the use of [semantic-release](https://www.npmjs.com/package/semantic-release-cli) for deploying to npm's registry, we require commits to be formatted a specific way. This is made easy by the above npm script. If your commit doesn't use the above command for styling, it won't be picked up by semantic-release for publishing.

### Adding SetSwap Tokens

When adding SetSwap tokens, find the SetSwap specific array in the appropriate network file and append the SetSwap list at the top as shown below.

```typescript
const SETSWAP_MAINNET_TOKENS: TokenData[] = [
  {
    address: '0x47110d43175f7f2c2425e7d15792acc5817eb44f',
    chainId: 1,
    name: 'My New Index',
    symbol: 'MNI',
    decimals: 18,
    logoURI:
      'path-to-hosted-logo',
  },
  {...}
];
```

### Adding non-SetSwap Tokens

When adding any other token, find the generic array in the appropriate network file and append the second array at the bottom as shown below.

```typescript
const MAINNET_TOKENS: TokenData[] = [
  {
    address: '0x47110d43175f7f2c2425e7d15792acc5817eb44f',
    chainId: 1,
    name: 'My New Token',
    symbol: 'MNT',
    decimals: 18,
    logoURI:
      'path-to-hosted-logo',
  },
  {...}
];
```

### Adding a new network

When adding a new network, create a new file in `src/lists` named after the network, and copy the structure from any of the other lists.
File should include at a minimum:

- An exported `SETSWAP_NEW_NETWORK_TOKENS` TokenData array, containing only SetSwap tokens on that network.
- A default exported `NEW_NETWORK_TOKENS` TokenData array, containing all tokens on that network, with the last item appended being the aforementioned `SETSWAP_[NETWORK]_TOKENS` array.

After this, `index.ts` should be updated to export the newly created lists as shown below:

```typescript
export const NewNetworkTokens = NEW_NETWORK_TOKENS;
export const SetSwapNewNetworkTokens = SETSWAP_NEW_NETWORK_TOKENS;
```

When these are complete, update the `Usage` list above to show what lists are available to a user.

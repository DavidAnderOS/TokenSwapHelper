export interface Token {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  chainId: number;
}

export interface SwapQuote {
  fromToken: Token;
  toToken: Token;
  fromAmount: string;
  toAmount: string;
  price: string;
  gasEstimate: string;
  route: string[];
  dex: string;
}

export interface DexInfo {
  name: string;
  chainId: number;
  routerAddress: string;
  factoryAddress: string;
}

export enum Chain {
  ETHEREUM = 1,
  BSC = 56,
  POLYGON = 137
}
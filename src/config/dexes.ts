import { DexInfo, Chain } from '../types';

export const DEX_CONFIGS: Record<string, DexInfo[]> = {
  [Chain.ETHEREUM]: [
    {
      name: 'Uniswap V2',
      chainId: Chain.ETHEREUM,
      routerAddress: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
    },
    {
      name: 'Sushiswap',
      chainId: Chain.ETHEREUM,
      routerAddress: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F',
      factoryAddress: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac'
    }
  ],
  [Chain.BSC]: [
    {
      name: 'PancakeSwap',
      chainId: Chain.BSC,
      routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
      factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73'
    }
  ]
};
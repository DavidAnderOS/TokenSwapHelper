import { isAddress } from 'ethers';

export function validateAddress(address: string): boolean {
  return isAddress(address);
}

export function normalizeAddress(address: string): string {
  if (!validateAddress(address)) {
    throw new Error(`Invalid address: ${address}`);
  }
  return address.toLowerCase();
}

export function formatAddress(address: string, length: number = 6): string {
  if (!validateAddress(address)) {
    return 'Invalid Address';
  }
  
  if (address.length <= length * 2 + 2) {
    return address;
  }
  
  return `${address.slice(0, length + 2)}...${address.slice(-length)}`;
}
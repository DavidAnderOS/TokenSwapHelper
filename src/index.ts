#!/usr/bin/env node

import { Command } from 'commander';
import { Token } from './types';

const program = new Command();

program
  .name('token-swap-helper')
  .description('CLI tool for finding optimal token swap routes')
  .version('0.1.0');

program
  .command('quote')
  .description('Get swap quote between two tokens')
  .argument('<from-token>', 'Token to swap from')
  .argument('<to-token>', 'Token to swap to')
  .argument('<amount>', 'Amount to swap')
  .action(async (fromToken: string, toToken: string, amount: string) => {
    console.log(`Getting quote for ${amount} ${fromToken} → ${toToken}`);
    console.log('Feature coming soon...');
  });

program.parse();
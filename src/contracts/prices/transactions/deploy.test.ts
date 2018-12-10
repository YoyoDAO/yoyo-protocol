import { initTestEnvironment } from '~/utils/environment/initTestEnvironment';
import { deploy } from './deploy';

describe('deploy', () => {
  const shared: any = {};

  beforeAll(async () => {
    shared.env = await initTestEnvironment();
    shared.quoteToken = {
      address: '0xf9Df6AEc03A59503AD596B9AB68b77dc2937F69D',
      decimals: 18,
      symbol: 'ETH',
    };
  });

  it('deploy', async () => {
    const address = await deploy(shared.env, shared.quoteToken);
    expect(address).toBeTruthy();
  });

  it('deploy with wrong address', async () => {
    await expect(
      deploy(shared.env, { symbol: 'BADADDR', address: '0xqwer', decimals: 2 }),
    ).rejects.toThrow();
  });
});

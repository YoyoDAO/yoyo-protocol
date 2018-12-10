import { TokenInterface } from '@melonproject/token-math/token';
import { Environment } from '~/utils/environment/Environment';
import { getContract } from '~/utils/solidity/getContract';
import { Contracts } from '~/Contracts';

export const hasRecentPrice = async (
  environment: Environment,
  contractAddress: string,
  token: TokenInterface,
): Promise<boolean> => {
  const contract = await getContract(
    environment,
    Contracts.PriceSourceInterface,
    contractAddress,
  );

  return contract.methods.hasRecentPrice(token.address).call();
};

import { TokenInterface } from '@melonproject/token-math/token';
import { Environment } from '~/utils/environment/Environment';
import { getContract } from '~/utils/solidity/getContract';
import { Contracts } from '~/Contracts';
import { getToken } from '~/contracts/dependencies/token/calls/getToken';

export const getQuoteToken = async (
  environment: Environment,
  contractAddress: string,
): Promise<TokenInterface> => {
  const contract = await getContract(
    environment,
    Contracts.PriceSourceInterface,
    contractAddress,
  );
  const quoteTokenAddress = await contract.methods.getQuoteAsset().call();
  const token = await getToken(environment, quoteTokenAddress);
  return token;
};

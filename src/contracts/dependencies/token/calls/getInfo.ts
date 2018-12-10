import { getContract } from '~/utils/solidity/getContract';
import { Contracts } from '~/Contracts';
import { Environment } from '~/utils/environment/Environment';
import { Address } from '@melonproject/token-math/address';

export const getInfo = async (
  environment: Environment,
  contractAddress: Address,
) => {
  const contract = getContract(
    environment,
    Contracts.PreminedToken,
    contractAddress,
  );
  const symbol = await contract.methods.symbol().call();
  const name = await contract.methods.name().call();
  const decimals = parseInt(await contract.methods.decimals().call(), 10);
  const totalSupply = parseInt(await contract.methods.totalSupply().call(), 10);

  return {
    decimals,
    name,
    symbol,
    totalSupply,
  };
};

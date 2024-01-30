import { useContract } from "@thirdweb-dev/react";

export default function useNFTDropContract() {
  const { contract, isLoading } = useContract(
    "0xA338797dd5537d67cB40b2A7b77344ca352fbddA"
  );

  return { contract, isLoading };
}

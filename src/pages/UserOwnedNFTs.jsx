import React from "react";
import useNFTDropContract from "../hooks/useNFTDropContract";
import NFTCard from "./NFTCard";
import { useAddress, useOwnedNFTs } from "@thirdweb-dev/react";

export default function UserOwnedNFTs() {
  const address = useAddress();
  const { contract } = useNFTDropContract();

  const { data: nfts, isLoading } = useOwnedNFTs(contract, address);

  if (nfts?.length === 0 || !address) return <></>;

  return (
    <div className="px-16 py-16">
      <h2 className="text-2xl font-semibold text-white">My NFTs</h2>
      <br />
      {isLoading ? <h2>Please wait a moment...</h2> : null}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {nfts?.map((n) => (
          <NFTCard key={n.metadata.id} nft={n} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import useNFTDropContract from "../hooks/useNFTDropContract";
import { useClaimConditions } from "@thirdweb-dev/react";

export default function MintDetails() {
  const { contract } = useNFTDropContract();
  const { data: claimConditions = [], isLoading: isLoadingCC } =
    useClaimConditions(contract);

  const cc = claimConditions[0];

  return (
    <div className="flex flex-col md:flex-row  text-lg md:text-2xl px-4 md:px-16 gap-8 pb-16 ">
      {/* Minting Info */}
      <div className="basis-1/2 shadow-md bg-yellow-green rounded-lg p-4 md:p-8 text-white">
        <div className="flex justify-between border-b border-white pb-4">
          <div>Mint Price</div>
          <div>
            {cc?.currencyMetadata?.displayValue} {cc?.currencyMetadata?.symbol}
          </div>
        </div>

        <div className="flex justify-between border-b border-white py-4">
          <div>Mint Date</div>
          <div>February 19th</div>
        </div>

        <div className="flex justify-between border-b border-white py-4">
          <div>WormList</div>
          <div>12:00 PM</div>
        </div>
        <div className="flex justify-between border-b border-white py-4">
          <div>Public Sale</div>
          <div>12:30 PM</div>
        </div>
        <div className="flex justify-between border-b border-white py-4">
          <div>Payment In</div>
          <div> {cc?.currencyMetadata?.symbol} </div>
        </div>
      </div>
      {/* Project Info */}
      <div className="shadow-md basis-1/2 bg-yellow-green rounded-lg  space-y-4  p-4 md:p-8 text-lg md:text-2xl text-white">
        <div>
          <p>
            Wormies is a collection of 1,000 generated NFT's, bred to enter The
            Underground and stake their claim! Earn your share of $SOIL and use
            it to enter giveaways, earn whitelist access, generate income, and
            more! Join us on the adventure, and enjoy the perks that come with
            being an exclusive member of The Underground!
          </p>
        </div>
      </div>
    </div>
  );
}

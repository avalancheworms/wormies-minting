import React from "react";
import useNFTDropContract from "../hooks/useNFTDropContract";
import {
  useClaimConditions,
  useTotalCirculatingSupply,
  useTotalCount,
  useAddress,
  useClaimNFT,
  Web3Button,
} from "@thirdweb-dev/react";

// import SliderNFTs from "./SliderNFTs";

export default function MintSection() {
  const address = useAddress();
  const { contract } = useNFTDropContract();

  const { data: totalSupply, isLoading: loadingTotalSupply } =
    useTotalCount(contract);
  const { data: totalMinted, isLoading: loadingTotalMinted } =
    useTotalCirculatingSupply(contract);

  const { data: claimConditions, isLoading: isLoadingCC } =
    useClaimConditions(contract);

  const { mutate: claimNFT, isLoading: isMinting } = useClaimNFT(contract);

  return (
    <div>
      <div className="px-4 md:px-0">
        <img
          src={`./assets/WormiesNFT.gif`}
          className="w-full md:w-1/3 mx-auto rounded-lg shadow-md"
          alt=""
        />

        {/* <SliderNFTs /> */}
      </div>

      <div className="text-center uppercase text-yellow-green text-xl md:text-3xl space-y-4 py-8 ">
        <div className="space-y-2">
          <div className="space-x-2">
            <span> Total Supply: </span>
            <span className="text-white">
              {loadingTotalSupply || loadingTotalMinted
                ? "Loading..."
                : `${totalMinted?.toNumber()} / ${totalSupply?.toNumber()}`}
            </span>
          </div>
          <div className="space-x-2">
            <span>MINT PRICE: </span>
            <span className="text-white">
              {isLoadingCC
                ? "Loading..."
                : `${
                    claimConditions?.length &&
                    `${claimConditions[0]?.currencyMetadata?.displayValue} ${claimConditions[0]?.currencyMetadata?.symbol}`
                  }`}
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          {!address ? (
            <Web3Button>Mint</Web3Button>
          ) : isMinting ? (
            <button
              disabled={true}
              className="flex items-center gap-x-3 focus:ring focus:ring-offset-1 bg-yellow-green shadow-md text-white mr-8 px-12 py-4 rounded-lg"
            >
              Please wait
              <span className="block w-6 h-6 bg-transparent border-2 border-t-transparent border-white animate-spin transition-all rounded-full"></span>
            </button>
          ) : (
            <button
              onClick={() => claimNFT({ to: address, quantity: 1 })}
              className="focus:ring focus:ring-offset-1 bg-yellow-green shadow-md text-white mr-8 px-12 py-4 rounded-lg uppercase"
            >
              Mint Wormies
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

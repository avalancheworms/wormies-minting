import { ThirdwebNftMedia } from "@thirdweb-dev/react";

export default function NFTCard({ nft }) {
  if (!nft?.metadata) return <h2> NFT Not Found! </h2>;

  return (
    <div>
      <div className="max-w-fit bg-gray-50 rounded-lg shadow max-h-fit">
        <ThirdwebNftMedia
          className="rounded-lg"
          width="100%"
          height="fit"
          metadata={nft?.metadata}
        />

        <div className="max-w-[300px]">
          <div className="p-5 space-y-3">
            <h5 className="text-2xl font-bold tracking-tight text-black">
              {nft?.metadata?.name}
            </h5>

            {nft?.metadata?.description ? (
              <p className="font-normal text-gray-800">
                {nft?.metadata?.description}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

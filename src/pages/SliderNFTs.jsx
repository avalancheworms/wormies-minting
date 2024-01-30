import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useNFTs } from "@thirdweb-dev/react";
import useNFTDropContract from "../../hooks/useNFTDropContract";
export default function SliderNFTs() {
  const { contract } = useNFTDropContract();
  const { data: nfts, isLoading } = useNFTs(contract);

  if (isLoading)
    return (
      <h2 className="text-xl text-center font-semibold">Wait a moment...</h2>
    );

  return (
    <div className="w-full">
      <Splide
        options={{
          type: "loop",
          gap: "5px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 3,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            rewind: false,
            speed: 0.2,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {nfts
          ?.filter((_, i) => i < 12)
          ?.map((item, i) => (
            <SplideSlide key={i} className="max-w-[210px]">
              <img
                className="w-[190px] h-[190px] rounded"
                src={item?.metadata?.image}
                alt="Image 2"
              />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
}

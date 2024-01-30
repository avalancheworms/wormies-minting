import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

import { ConnectWallet } from "@thirdweb-dev/react";

export default function Header() {
  return (
    <div>
      {/* Social Links */}
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-8 text-xl md:text-3xl pt-8">
          <div>Follow us on:</div>
          <div className="flex gap-4">
            <a href="https://discord.gg/BX6vwjwrW8" target="_blank">
            <FaDiscord className="bg-[#4B6D56] text-white p-1 md:p-2 rounded-lg text-3xl md:text-5xl cursor-pointer" />
            </a>
            <a href="https://twitter.com/wormsonavax" target="_blank">
            <FaTwitter className="bg-[#4B6D56] text-white p-1 md:p-2 rounded-lg text-3xl md:text-5xl cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      {/* Header */}
      <div className="flex  items-center justify-between  text-white my-8 bg-[#4B6D56]">
      <div className="w-full md:w-fit text-center bg-white py-8 px-8">
          <img src={`./assets/logoWormies.png`} alt="" className="w-72 mx-auto" />
        </div>
        <div className="hidden md:block uppercase font-semibold text-4xl">WELCOME to the <span className="text-yellow-green">
           Underground
          </span>
          </div>
          <div className=" hidden md:block pr-8">
          <ConnectWallet
            dropdownPosition={{
              side: "bottom",
              align: "center",
            }}
          />
        </div>
      </div>
     ]
    </div>
  );
}

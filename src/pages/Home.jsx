import Header from "../components/Header";
import MintSection from "./MintSection";
import MintDetails from "./MintDetails";
import UserOwnedNFTs from "./UserOwnedNFTs";

function Home() {
  return (
    <div className="bg-[#89CB42] text-white">
      {/* Header */}
      <Header />

      {/* Mint Section */}
      <MintSection />

      {/* Minting Details */}
      <MintDetails />

      {/* User Owned NFTs */}
      {/* <UserOwnedNFTs /> */}
    </div>
  );
}

export default Home;

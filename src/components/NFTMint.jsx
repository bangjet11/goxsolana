import React from "react";
import { mintNFT } from "../utils/metaplex";

export default function NFTMint() {
  const handleMint = async () => {
    try {
      const pubkey = await mintNFT();
      alert("NFT minted! PublicKey: " + pubkey);
    } catch (err) {
      alert("Mint failed: " + err.message);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={handleMint}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Mint NFT
      </button>
    </div>
  );
}

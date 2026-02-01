import { useState } from "react";
import { metaplex } from "../utils/metaplex";

export default function NFTMint() {
  const [status, setStatus] = useState("");

  const mintNFT = async () => {
    try {
      setStatus("Minting...");
      // Contoh mint NFT dummy (replace dengan metadata asli)
      const { nft } = await metaplex.nfts().create({
        uri: "https://arweave.net/example-metadata.json",
        name: "GoxSolana NFT",
        sellerFeeBasisPoints: 500, // 5% royalty
      });
      setStatus(`Minted NFT: ${nft.address.toBase58()}`);
    } catch (err) {
      console.error(err);
      setStatus("Mint failed");
    }
  };

  return (
    <div className="text-center py-10">
      <h3 className="text-2xl font-bold">Mint NFT</h3>
      <button 
        onClick={mintNFT} 
        className="bg-green-600 px-4 py-2 rounded mt-4">
        Mint NFT
      </button>
      <p className="mt-2">{status}</p>
    </div>
  );
}

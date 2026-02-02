import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { generateSigner, keypairIdentity } from "@metaplex-foundation/umi";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";

// 1. Setup koneksi ke Solana (pakai devnet dulu untuk testing)
const umi = createUmi("https://api.devnet.solana.com");

// 2. Generate keypair lokal (bisa diganti dengan wallet connect Phantom/Solflare)
const keypair = generateSigner(umi);
umi.use(keypairIdentity(keypair));

// 3. Fungsi mint NFT
export async function mintNFT() {
  try {
    const nftSigner = generateSigner(umi);

    await createNft(umi, {
      mint: nftSigner,
      name: "GoxSolana NFT",
      uri: "https://arweave.net/example.json", // link metadata JSON
      sellerFeeBasisPoints: 500, // 5% royalty
    }).sendAndConfirm(umi);

    console.log("✅ NFT minted:", nftSigner.publicKey.toString());
    return nftSigner.publicKey.toString();
  } catch (err) {
    console.error("❌ Mint failed:", err);
    throw err;
  }
}

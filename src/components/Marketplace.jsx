export default function Marketplace() {
  const dummyNFTs = [
    { name: "GoxSolana #1", price: "0.5 SOL" },
    { name: "GoxSolana #2", price: "1 SOL" },
  ];

  return (
    <div className="text-center py-10">
      <h3 className="text-2xl font-bold">Marketplace</h3>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {dummyNFTs.map((nft, i) => (
          <div key={i} className="border p-4 rounded bg-gray-800">
            <p>{nft.name}</p>
            <p className="text-sm text-gray-400">{nft.price}</p>
            <button className="bg-blue-600 px-3 py-1 rounded mt-2">
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

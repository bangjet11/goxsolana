import { useState } from "react";

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.solana) {
      try {
        const response = await window.solana.connect();
        setWalletAddress(response.publicKey.toString());
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("Install Phantom Wallet!");
    }
  };

  return (
    <div className="text-center py-10">
      {walletAddress ? (
        <p>Connected: {walletAddress}</p>
      ) : (
        <button 
          onClick={connectWallet} 
          className="bg-blue-600 px-4 py-2 rounded">
          Connect Wallet
        </button>
      )}
    </div>
  );
}

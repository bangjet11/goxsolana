import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WalletConnect from "./components/WalletConnect";
import NFTMint from "./components/NFTMint";
import Staking from "./components/Staking";
import Airdrop from "./components/Airdrop";
import Marketplace from "./components/Marketplace";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <WalletConnect />
      <NFTMint />
      <Staking />
      <Airdrop />
      <Marketplace />
    </div>
  );
}

export default App;

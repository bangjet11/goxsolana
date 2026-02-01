import { useState } from "react";

export default function Staking() {
  const [staked, setStaked] = useState(false);

  const stakeToken = async () => {
    // Placeholder staking logic (replace dengan Anchor program)
    setStaked(true);
  };

  return (
    <div className="text-center py-10">
      <h3 className="text-2xl font-bold">Staking</h3>
      {staked ? (
        <p>✅ Token staked successfully!</p>
      ) : (
        <button 
          onClick={stakeToken} 
          className="bg-purple-600 px-4 py-2 rounded mt-4">
          Stake Token
        </button>
      )}
    </div>
  );
}

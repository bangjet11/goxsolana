import { useState, useEffect } from "react";

export default function Airdrop() {
  const [timeLeft, setTimeLeft] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    wallet: "",
  });
  const [status, setStatus] = useState("");

  // Countdown to Feb 14, 2026
  useEffect(() => {
    const targetDate = new Date("2026-02-14T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simpan data ke backend / Google Sheet / Supabase
    setStatus("✅ Registered! You’ll receive 6.000 GXS on Feb 14.");
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4">🎁 GoxSolana Airdrop</h2>

      <div className="text-center mb-6">
        <p className="text-sm text-gray-400">Registration Ends In</p>
        <p className="text-xl font-mono">
          {timeLeft.days} DAYS | {timeLeft.hours} HOURS | {timeLeft.minutes} MINUTES | {timeLeft.seconds} SECONDS
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          required 
          className="w-full p-2 rounded bg-gray-800"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          required 
          className="w-full p-2 rounded bg-gray-800"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Solana Wallet Address" 
          required 
          className="w-full p-2 rounded bg-gray-800"
          onChange={(e) => setFormData({ ...formData, wallet: e.target.value })}
        />
        <button 
          type="submit" 
          className="w-full bg-blue-600 py-2 rounded font-bold">
          Register for Airdrop →
        </button>
      </form>

      {status && <p className="mt-4 text-green-400 text-center">{status}</p>}

      <div className="mt-6 text-sm text-gray-400">
        <p>🎉 What you'll receive:</p>
        <ul className="list-disc ml-6">
          <li>6.000 GXS tokens on Solana</li>
          <li>Early access to GoxSolana ecosystem</li>
        </ul>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        <p>🔐 Secure & Verified:</p>
        <ul className="list-disc ml-6">
          <li>Limited to 10.000 participants</li>
          <li>First come, first served!</li>
        </ul>
      </div>
    </div>
  );
}

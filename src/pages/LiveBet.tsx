import { useState, useEffect } from "react";
import FooterNav from "../components/FooterNav.tsx";

const LiveBet = () => {
  const [profit, setProfit] = useState(0);

  // Simulate live profit updates
  useEffect(() => {
    const interval = setInterval(() => {
      const newProfit = profit + (Math.random() * 100 - 50); // random change
      setProfit(parseFloat(newProfit.toFixed(2)));
    }, 500);

    return () => clearInterval(interval);
  }, [profit]);

  return (
    <div className="text-white text-center mt-10 mx-auto animate-fade">
      <h2 className="text-xl font-bold mb-4">Live Bets</h2>
      <div className="text-4xl font-bold text-green-400">
        ₹ {profit > 0 ? "+" : ""}{profit}
      </div>
      <p className="text-sm text-gray-400 mt-2">Real-time Profit / Loss</p>
      <FooterNav />
    </div>
  );
};

export default LiveBet;

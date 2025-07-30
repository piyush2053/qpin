import { Button } from "antd";

const MatchDetails = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Match Details</h2>
        <span className="text-white text-xl">ℹ️</span>
      </div>

      <div className="bg-[#1a1a1a] p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Match Score</h3>
        <p>Team A: <span className="float-right">2</span></p>
        <p>Team B: <span className="float-right">3</span></p>
      </div>

      <div className="bg-[#1a1a1a] p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Player Statistics</h3>
        <p>Player 1 <span className="float-right">1 Goal</span></p>
        <p>Player 2 <span className="float-right">2 Assists</span></p>
        <p>Player 3 <span className="float-right">Yellow Card</span></p>
      </div>

      <div className="bg-[#1a1a1a] p-4 rounded-xl">
        <h3 className="text-lg font-semibold mb-2">Betting Odds</h3>
        <div className="flex justify-between items-center mb-2">
          <span>Team A</span>
          <Button className="bg-red-600 text-white rounded-full">Place Bet</Button>
        </div>
        <div className="flex justify-between items-center">
          <span>Team B</span>
          <Button className="bg-red-600 text-white rounded-full">Place Bet</Button>
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;

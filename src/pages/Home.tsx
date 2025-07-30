import { Button } from "antd";
import Card from "antd/es/card/Card";
import { useState } from "react";
import FooterNav from "./FooterNav.tsx";

const liveMatches = [
  { id: 1, teamA: "India", teamB: "Australia", score: "132/2 (15.3)", status: "Live" },
  { id: 2, teamA: "England", teamB: "Pakistan", score: "98/4 (13.0)", status: "Live" },
];

const upcomingMatches = [
  { id: 3, teamA: "India", teamB: "South Africa", time: "Today, 7:00 PM" },
  { id: 4, teamA: "Sri Lanka", teamB: "New Zealand", time: "Tomorrow, 3:30 PM" },
];

const Home = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="text-white mx-auto bg-bg1">
      <h2 className="text-white text-xl font-semibold mb-4 pt-3 px-4">🏏 Live Matches</h2>
      <div className="space-y-4 p-4">
        {liveMatches.map((match) => (
          <Card
            key={match.id}
            className="bg-[#1a1a1a] text-white rounded-xl"
            onClick={() => setSelectedMatch(match)}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-lg">{match.teamA} vs {match.teamB}</div>
                <div className="text-sm text-gray-400">{match.score}</div>
              </div>
              <div className="space-x-2">
                <Button type="primary" className="bg-green-500 rounded-full">Bet {match.teamA}</Button>
                <Button type="primary" className="bg-red-500 rounded-full">Bet {match.teamB}</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <h2 className="text-xl font-semibold my-6 px-4">📅 Upcoming Matches</h2>
      <div className="space-y-4 p-4">
        {upcomingMatches.map((match) => (
          <Card key={match.id} className="bg-[#1a1a1a] text-white rounded-xl">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-lg">{match.teamA} vs {match.teamB}</div>
                <div className="text-sm text-gray-400">{match.time}</div>
              </div>
              <Button type="default" className="rounded-full text-white border-white hover:bg-white hover:text-black">
                Set Reminder
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {selectedMatch && (
        <div className="mt-8 bg-[#111] p-4 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Match Details</h3>
          <p>{selectedMatch.teamA} vs {selectedMatch.teamB}</p>
          <p className="text-sm text-gray-400">Live Score: {selectedMatch.score}</p>
        </div>
      )}
      <FooterNav/>
    </div>
  );
};

export default Home;

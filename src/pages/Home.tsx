import React from "react";
import { Button, Row, Col, Divider } from "antd";
import Card from "antd/es/card/Card";

const Home: React.FC = () => {
  const upcomingMatches = [
    { id: 1, teams: "India vs Pakistan", time: "Aug 3, 7:00 PM IST" },
    { id: 2, teams: "India vs Australia", time: "Aug 6, 6:00 PM IST" },
    { id: 3, teams: "India vs Sri Lanka", time: "Aug 10, 6:30 PM IST" },
  ];

  const liveMatch = {
    teams: "India vs England",
    score: "India 152/3 (15.4 overs)",
    status: "Live Now",
  };

  return (
    <div className="p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">🏏 Live Cricket Betting</h1>

      {/* Current Live Match */}
      <Card
        title={<span className="text-xl font-semibold">{liveMatch.teams}</span>}
        bordered={false}
        className="rounded-2xl shadow-md bg-white"
      >
        <p className="text-lg font-medium">{liveMatch.score}</p>
        <p className="text-green-600 font-semibold">{liveMatch.status}</p>

        <Divider className="border-gray-300" />
        <div className="flex justify-around items-center">
          <Button type="primary" size="large" className="rounded-xl px-8">Bet on India</Button>
          <Button size="large" className="rounded-xl px-8">Bet on England</Button>
        </div>
      </Card>

      {/* Upcoming Matches */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">📅 Upcoming Matches</h2>
        <Row gutter={[16, 16]}>
          {upcomingMatches.map(match => (
            <Col xs={24} sm={12} md={8} key={match.id}>
              <Card className="rounded-xl shadow bg-gray-50 hover:shadow-lg cursor-pointer transition">
                <p className="font-bold text-lg">{match.teams}</p>
                <p className="text-gray-600">{match.time}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;

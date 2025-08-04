import { Button } from "antd";
import { motion } from "framer-motion";

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const modalVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 }
};

const BetPopup = ({ match, onClose }: { match: any, onClose: () => void }) => {
    if (!match) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={onClose}
        >
            <motion.div
                className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] p-6 rounded-t-2xl shadow-lg text-white"
                variants={modalVariants}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top bar with close icon */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-xl font-semibold">Place Bet</h2>
                        <p className="text-sm text-gray-400">{match.teamA} vs {match.teamB}</p>
                        <p className="text-xs text-gray-500">Match starts in 2 hours</p>
                    </div>
                    <button onClick={onClose} className="text-white p-1 hover:text-red-400">
                        X
                    </button>
                </div>

                {/* Betting options */}
                <div className="space-y-3">
                    {[{ team: match.teamA, odds: "1.85" }, { team: match.teamB, odds: "2.10" }].map(({ team, odds }) => (
                        <div key={team} className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                            <div>
                                <div className="font-semibold">{team}</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="bg-white/20 px-3 py-1 rounded-lg">{odds}</span>
                                <Button className="bg-pBlue text-white rounded-md border-none">Bet</Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Place Bet Button */}
                <Button
                    className="w-full mt-6 bg-pBlue text-white  text-md py-2 rounded-xl border-none"
                    onClick={onClose}
                >
                    Place Bet
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default BetPopup;

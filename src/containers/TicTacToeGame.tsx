import Board from "@/components/Board";
import GameHeader from "@/components/GameHeader";
import { GameProvider } from "@/context/GameContext";

const TicTacToeGame: React.FC = () => {
    return (
        <GameProvider>
            <GameHeader/>
            <Board/>
        </GameProvider>
    );
};

export default TicTacToeGame;
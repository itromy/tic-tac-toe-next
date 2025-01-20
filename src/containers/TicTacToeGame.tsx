import Board from "@/components/Board";
import { GameProvider } from "@/context/GameContext";

const TicTacToeGame: React.FC = () => {
    return (
        <GameProvider>
            <Board/>
        </GameProvider>
    );
};

export default TicTacToeGame;
import Board from "@/components/Board";
import GameHeader from "@/components/GameHeader";
import { GameProvider } from "@/context/GameContext";
import styles from "./TicTacToeGame.module.css";

const TicTacToeGame: React.FC = () => {
    return (
        <GameProvider>
            <div className={styles.wrapper}>
                <GameHeader />
                <Board />
            </div>
        </GameProvider>
    );
};

export default TicTacToeGame;
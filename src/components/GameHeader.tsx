import { useGame } from "@/context/GameContext";
import { Player } from "@/types/types";
import * as styles from './GameHeader.module.css';

const GameHeader = () => {
    const { player, winner, isGameOver, resetGame } = useGame();

    const getPlayerName = () => player === Player.Player1 ? 'Player 1 (X)' : 'Player 2 (O)';

    const renderCurrentPlayer = () => {
        if (isGameOver) return null;

        return (
            <p className={styles.text}>
                It is your turn
                <span className={player === Player.Player1 ? styles.player1 : styles.player2}>
                    {' ' + getPlayerName()}
                </span>
            </p>
        );
    };

    const renderWinner = () => {
        if (winner) {
            return (
                <p className={`${styles.blink} ${winner === Player.Player1 ? styles.player1 : styles.player2}`}>
                    Winner: {getPlayerName()}
                </p>
            );
        }

        if (isGameOver) {
            return <p className={styles.blink}>Game is over</p>;
        }

        return null;
    };

    const renderResetGame = () => {
        return <button className={styles.button} onClick={resetGame}>Reset Game</button>;
    };

    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <div>
                {renderWinner()}
                {renderResetGame()}
                {renderCurrentPlayer()}
            </div>
        </div>
    );
};

export default GameHeader;

import { useGame } from "@/context/GameContext";
import { Player } from "@/types/types";
import styles from './GameHeader.module.css';

const GameHeader = () => {
    const { player, winner, isGameOver, resetGame } = useGame();

    const render = () => {
        return (
            <div className={styles.header}>
                <h1 className={styles.headline}>Tic Tac Toe</h1>
                {renderResetGame()}
                {renderWinner()}
                {renderCurrentPlayer()}
            </div>
        )
    }

    const renderResetGame = () => {
        return <button className={styles.button} onClick={resetGame}>Reset Game</button>;
    };

    const renderWinner = () => {
        if (winner) {
            return (
                <p className={`${styles.text} ${styles.blink} ${winner === Player.Player1 ? styles.player1 : styles.player2}`}>
                    Winner: {getPlayerName()}
                </p>
            );
        }

        if (isGameOver) {
            return <p className={`${styles.text} ${styles.blink}`}>Game is over</p>;
        }

        return null;
    };

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

    const getPlayerName = () => player === Player.Player1 ? 'Player 1 (X)' : 'Player 2 (O)';

    return render();
};

export default GameHeader;

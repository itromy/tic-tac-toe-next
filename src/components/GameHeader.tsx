import { useGame } from "@/context/GameContext";
import { Player } from "@/types/types";

const GameHeader = () => {
    const { player, winner, isGameOver, resetGame} = useGame();
   
    function getPlayerName() {
        return player === Player.Player1 ? 'Player 1 (X)' : 'Player 2 (O)';
    }

    function renderCurrentPlayer() {
        if(isGameOver) {
            return;
        }
        
        return (
            <span>
                It is your turn {getPlayerName()}
            </span>
       )
    }

    function renderWinner() {
        if(!!winner) {
            return (<div>Winner: {getPlayerName()}</div>)
        }  
    }

    function renderResetGame() {
        if(!isGameOver) {
            return;
        }

        return <button onClick={resetGame}>Reset Game</button>
    }

    return (
        <div>
            {renderWinner()}
            {renderResetGame()}
            {renderCurrentPlayer()}
        </div>
    );
};

export default GameHeader;

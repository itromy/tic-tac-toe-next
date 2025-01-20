import { useGame } from "@/context/GameContext";
import { Player } from "@/types/types";

const GameHeader = () => {
    const { player, winner } = useGame();
   
    function getPlayerName() {
        return player === Player.Player1 ? 'Player 1 (X)' : 'Player 2 (O)';
    }

    function renderCurrentPlayer() {
        if(!!winner) {
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

    return (
        <div>
            {renderWinner()}
            {renderCurrentPlayer()}
        </div>
    );
};

export default GameHeader;

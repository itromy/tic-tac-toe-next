import { useGame } from "@/context/GameContext";
import { Player } from "@/types/types";
import { useEffect, useState } from "react";

const GameHeader = () => {
    const { player } = useGame();
    const [playerState, setPlayerState] = useState<Player>(player);

    useEffect(() => {
        setPlayerState(player); 
    }, [player]);

    return (
        <div>
            It is your turn {playerState === Player.Player1 ? 'Player 1 (X)' : 'Player 2 (O)'}
        </div>
    );
};

export default GameHeader;

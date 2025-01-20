import TicTacToe from '@/services/TicTacToe';
import { Board, Player } from '@/types/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type GameContextType = {
    board: Board;
    player: Player;
    makeMove: (index: number) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

const game = new TicTacToe();

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [board, setBoard] = useState<Board>([]);
    const [player, setPlayer] = useState<Player>(Player.Player1);
    const [winner, setWinner] = useState<Player | undefined>();

    useEffect(() => {
        setBoard(game.getBoard());
        setPlayer(game.getCurrentPlayer());
    }, []);

    return (
        <GameContext.Provider value={{ board, player, winner, makeMove}}>
            {children}
        </GameContext.Provider>
    );

    function makeMove(index: number) {
        game.makeMove(index);
        setBoard(game.getBoard());
        setPlayer(game.getCurrentPlayer());
        setWinner(game.getWinner());
    }
};

export const useGame = (): GameContextType => {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }

    return context;
};

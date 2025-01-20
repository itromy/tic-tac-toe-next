import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import TicTacToe from '@/services/TicTacToe';
import { Board, Player } from '@/types/types';

type GameContextType = {
    board: Board;
    player: Player;
    winner: Player | undefined;
    resetGame: () => void;
    makeMove: (index: number) => void;
    isGameOver: boolean;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

const game = new TicTacToe();

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [board, setBoard] = useState<Board>([]);
    const [player, setPlayer] = useState<Player>(Player.Player1);
    const [winner, setWinner] = useState<Player | undefined>();
    const [isGameOver, setIsGameOver] = useState<boolean>(false);

    useEffect(() => {
        updateGame();
    }, []);

    const makeMove = (index: number) => {
        game.makeMove(index);
        updateGame();
    };

    const resetGame = () => {
        game.resetGame();
        updateGame();
    };

    const updateGame = () => {
        setBoard(game.getBoard());
        setPlayer(game.getCurrentPlayer());
        setWinner(game.getWinner());
        setIsGameOver(game.getIsGameOver());
    };


    return (
        <GameContext.Provider value={{ board, player, winner, isGameOver, makeMove, resetGame }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = (): GameContextType => {
    const context = useContext(GameContext);

    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }

    return context;
};

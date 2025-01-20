import TicTacToe from '@/services/TicTacToe';
import { Board } from '@/types/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type GameContextType = {
    board: Board;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [board, setBoard] = useState<Board>([]); // Initialisiere als leeres Array

    useEffect(() => {
        const game = new TicTacToe();
        setBoard(game.getBoard());
    }, []);

    return (
        <GameContext.Provider value={{ board }}>
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

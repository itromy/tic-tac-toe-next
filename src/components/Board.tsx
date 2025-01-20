import React, { useEffect, useState } from 'react';
import BoardField from './BoardField';
import * as classes from './Board.module.css';
import { Board } from '@/types/types';
import { useGame } from '@/context/GameContext';

const Board: React.FC = () => {
    const { board } = useGame();
    const [boardState, setBoardState] = useState<Board>([]);

    useEffect(() => {
        setBoardState(board);
    }, [board]);

    return (
        <div className={classes.board}>
            {boardState.map((value, index) => (
                <BoardField key={index} index={index} type={value} />
            ))}
        </div>
    );
};

export default Board;

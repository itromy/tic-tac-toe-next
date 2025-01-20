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
        <div>
            <div className={classes.board}>
                {
                    boardState.map((value, index) =>  {
                        return  <BoardField index={ index}type={value} key={index} />;
                    })   
                }
            </div>
        </div>
    );
};

export default Board;

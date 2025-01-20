import React, { useEffect, useState } from 'react';
import BoardField from './BoardField';
import styles from './Board.module.css';
import { Board as BoardType } from '@/types/types';
import { useGame } from '@/context/GameContext';

const Board: React.FC = () => {
    const { board } = useGame();
    const [boardState, setBoardState] = useState<BoardType>([]);

    useEffect(() => {
        setBoardState(board);
    }, [board]);

    return (
        <div className={styles.board}>
            {boardState.map((value, index) => (
                <BoardField key={index} index={index} type={value} />
            ))}
        </div>
    );
};

export default Board;

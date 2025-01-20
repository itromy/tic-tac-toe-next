import React from 'react';
import BoardField from './BoardField';
import styles from './Board.module.css';
import { useGame } from '@/context/GameContext';

const Board: React.FC = () => {
    const { board } = useGame();

    return (
        <div className={styles.board}>
            {board.map((value, index) => (
                <BoardField key={index} index={index} type={value}/>
            ))}
        </div>
    );
};

export default Board;

import React from 'react';
import styles from './BoardField.module.css';
import { FieldSymbol } from '@/types/types';
import { useGame } from '@/context/GameContext';

export type BoardFieldProps = {
    type?: FieldSymbol;
    index: number;
}

const BoardField: React.FC<BoardFieldProps> = ({ type, index }) => {
    const { makeMove } = useGame();

    const handleOnClick = () => {
        makeMove(index);
    }

    return (
        <div className={styles.field}>
            <button 
                onClick={handleOnClick} 
                className={`${styles.button} ${type === FieldSymbol.Player1 ? styles.player1 : styles.player2}`}
            >
                {type}
            </button>
        </div>
    );
};

export default BoardField;

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

    const getAriaLabel = () => {
        if (type === FieldSymbol.Player1) {
            return "Field of Player 1"
        }

        if (type === FieldSymbol.Player2) {
            return "Field of Player 2"
        }

        return "Free to choose"
    }

    return (
        <div className={styles.field}>
            <button
                aria-label={getAriaLabel()}
                onClick={handleOnClick}
                className={`${styles.button} ${type === FieldSymbol.Player1 ? styles.player1 : styles.player2}`}
            >
                {type}
            </button>
        </div>
    );
};

export default BoardField;

import React from 'react';
import styles from './BoardField.module.css';
import { FieldSymbol } from '@/types/types';
import { useGame } from '@/context/GameContext';

export type BoardFieldProps = {
    type?: FieldSymbol;
    index: number;
}

const BoardField: React.FC<BoardFieldProps> = ({ type, index }) => {
    const { makeMove, winPattern } = useGame();

    const handleOnClick = () => {
        makeMove(index);
    }

    const getAriaLabel = () => {
        switch (type) {
            case FieldSymbol.Player1:
                return "Field of Player 1 (X)";
            case FieldSymbol.Player2:
                return "Field of Player 2 (O)";
            default:
                return "Free to choose";
        }
    }

    const getButtonClass = () => {
        let buttonClass = `${styles.button}`;
    
        if (type === FieldSymbol.Player1) {
            buttonClass += ` ${styles.player1}`;
        } else {
            buttonClass += ` ${styles.player2}`;
        }
    
        if (winPattern.includes(index)) {
            buttonClass += ` ${styles.winner}`;
        }
    
        return buttonClass;
    };

    return (
        <div className={styles.field}>
            <button
                aria-label={getAriaLabel()}
                onClick={handleOnClick}
                className={getButtonClass()}
            >
                {type}
            </button>
        </div>
    );
};

export default BoardField;

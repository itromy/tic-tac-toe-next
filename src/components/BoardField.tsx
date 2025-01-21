import React from 'react';
import styles from './BoardField.module.css';
import { FieldSymbol, Player } from '@/types/types';
import { useGame } from '@/context/GameContext';

export type BoardFieldProps = {
    type?: FieldSymbol;
    index: number;
}

const BoardField: React.FC<BoardFieldProps> = ({ type, index }) => {
    const { makeMove, winPattern, player } = useGame();

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
        }
        
        if (type === FieldSymbol.Player2) {
            buttonClass += ` ${styles.player2}`;
        }

        // hover effect classes
        if (type === FieldSymbol.None) {
            buttonClass += player === Player.Player1 ? ` ${styles.hoverPlayer1}` : player === Player.Player2 ? ` ${styles.hoverPlayer2}` : '';
        }

        // winner pattern marker
        if (winPattern.includes(index)) {
            buttonClass += ` ${styles.winner}`;
        }

        return buttonClass;
    };

    return (
        <div className={styles.field}>
            {
                /* by a button is navigable by keyboard */
            }
            <button
                aria-label={getAriaLabel()}
                onClick={handleOnClick}
                className={getButtonClass()}
            >
                <span aria-hidden="true">
                    {type}
                </span>
            </button>
        </div>
    );
};

export default BoardField;

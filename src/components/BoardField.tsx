import React from 'react';
import * as classes from './BoardField.module.css';
import { FieldSymbol } from '@/types/types';
import { useGame } from '@/context/GameContext';

export type BoardFieldProps = {
    type?: FieldSymbol;
    index: number;
}

const BoardField: React.FC<BoardFieldProps> = ({ type, index }) => {
    const { makeMove } = useGame();

    function renderSymbol() {
        return type;
    }

    function handleOnClick() {
        makeMove(index)
    }

    return (
        <button onClick={handleOnClick} className={classes.field}>
            {renderSymbol()}
        </button>
    );
};

export default BoardField;

import React from 'react';
import * as classes from './BoardField.module.css';
import { FieldSymbol } from '@/types/types';

export type BoardFieldProps = {
    type?: FieldSymbol;
}

const BoardField: React.FC<BoardFieldProps> = ({ type }) => {
    function renderSymbol() {

        if (type === FieldSymbol.Circle) {
            return 'O';
        }

        if (type === FieldSymbol.Cross) {
            return 'X';
        }

        return '';
    }

    return (
        <div className={classes.field}>
            {renderSymbol()}
        </div>
    );
};

export default BoardField;

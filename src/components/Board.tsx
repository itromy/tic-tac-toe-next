import React from 'react';
import BoardField from './BoardField';
import * as classes from './Board.module.css';

const Board: React.FC = () => {

    const numberFields = Array.from({ length: 9 }, (_, index) => index + 1);


    return (
        <div className={classes.board}>
             {numberFields.map((value, index) => (
                <BoardField key={index} value={value} />
            ))}
        </div>
    )
}

export default Board;
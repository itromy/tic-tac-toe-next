import TicTacToe from '@/services/TicTacToe';
import { FieldSymbol, Player } from '@/types/types';

describe('TicTacToe', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
    });

    test('initializes the game correctly', () => {
        expect(game.getBoard()).toEqual(Array(9).fill(FieldSymbol.None));
        expect(game.getCurrentPlayer()).toBe(Player.Player1);
        expect(game.getWinner()).toBeUndefined();
        expect(game.getIsGameOver()).toBe(false);
        expect(game.getWinPattern()).toEqual([]);
    });

    test('valid move of player 1 (set sign, switch player)', () => {
        game.makeMove(0);
        expect(game.getBoard()[0]).toBe(FieldSymbol.Player1);
        expect(game.getCurrentPlayer()).toBe(Player.Player2);
    });

    test('prevents setting a field  twice (no change of player)', () => {
        // player one choose field 0, player 2 choose same
        game.makeMove(0); // player 1
        game.makeMove(0); // player 2 -> not valid

        // field has still symbol of palyer 1, it is still player 2 turn
        expect(game.getBoard()[0]).toBe(FieldSymbol.Player1);
        expect(game.getCurrentPlayer()).toBe(Player.Player2);
    });

    test('detects a horizontal win for Player 1', () => {
        /*
            X    X    X
            
            O    O    -
            
            -    -    - 
        */

        game.makeMove(0); // X
        game.makeMove(3); // O
        game.makeMove(1); // X
        game.makeMove(4); // O
        game.makeMove(2); // X

        expect(game.getWinner()).toBe(Player.Player1);
        expect(game.getIsGameOver()).toBe(true);
        expect(game.getWinPattern()).toEqual([0,1,2]);
    });

    test('detects a vertical win for Player 2', () => {
       /*
            X    O    -
            
            X    O   X
            
            -    O    - 
        */

        game.makeMove(0); // X
        game.makeMove(1); // O
        game.makeMove(3); // X
        game.makeMove(4); // O
        game.makeMove(5); // X
        game.makeMove(7); // O

        expect(game.getWinner()).toBe(Player.Player2);
        expect(game.getIsGameOver()).toBe(true);
        expect(game.getWinPattern()).toEqual([1,4,7]);
    });

    test('detects a diagonal win for Player 1', () => {
        /*
            X    O    O
            
            -    X   -
            
            -    -    X 
        */

        game.makeMove(0); // X
        game.makeMove(1); // O
        game.makeMove(4); // X
        game.makeMove(2); // O
        game.makeMove(8); // X

        expect(game.getWinner()).toBe(Player.Player1);
        expect(game.getIsGameOver()).toBe(true);
        expect(game.getWinPattern()).toEqual([0,4,8]);
    });

    test('detects all fields are filled without a winner', () => {
        /*
            X    O    X
            
            X    O    O
            
            O    X    X
        */

        game.makeMove(0); // X
        game.makeMove(1); // 0
        game.makeMove(2); // X
        game.makeMove(4); // O
        game.makeMove(3); // X
        game.makeMove(5); // O
        game.makeMove(7); // X
        game.makeMove(6); // O
        game.makeMove(8); // X
        
        expect(game.getWinner()).toBeUndefined();
        expect(game.getIsGameOver()).toBe(true);
        expect(game.getWinPattern()).toEqual([]);
    });

    test('prevents further moves after the game is won', () => {
        /*
            X    X    X
            
            O    O    -
            
            -    -    -
        */
        game.makeMove(0); // X
        game.makeMove(3); // O
        game.makeMove(1); // X
        game.makeMove(4); // O
        game.makeMove(2); // X
        game.makeMove(5); // O --> not possible anymore, field stays empty

        expect(game.getBoard()[5]).toBe(FieldSymbol.None);
        expect(game.getIsGameOver()).toBe(true);
    });

    test('resets the game correctly', () => {
        game.makeMove(0);
        game.makeMove(3);
        game.makeMove(1);
        game.resetGame();

        
        expect(game.getBoard()).toEqual(Array(9).fill(FieldSymbol.None));
        expect(game.getCurrentPlayer()).toBe(Player.Player1);
        expect(game.getWinner()).toBeUndefined();
        expect(game.getIsGameOver()).toBe(false);
        expect(game.getWinPattern()).toEqual([]);
    });
});

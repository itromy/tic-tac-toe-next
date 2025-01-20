import { FieldSymbol, Player } from "@/types/types";
import TicTacToe from "./TicTacToe";

describe('Tic Tac Toe Game', () => {
    let game: TicTacToe;

    beforeEach(() => {
        game = new TicTacToe();
    });

    it('initializes the game correctly', () => {
        expect(game.getBoard()).toEqual(Array(9).fill(FieldSymbol.None));
        expect(game.getCurrentPlayer()).toBe(Player.Player1);
        expect(game.getWinner()).toBeUndefined();
        expect(game.getIsGameOver()).toBe(false);
    });
});
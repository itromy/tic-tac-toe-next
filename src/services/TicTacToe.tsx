import { Board, FieldSymbol, Player } from "@/types/types";

export default class TicTacToe {
    private board: Board;
    private currentPlayer: Player;

    constructor() {
        this.board = Array(9).fill(FieldSymbol.None);
        this.board[0] = FieldSymbol.Cross;
        this.board[3] = FieldSymbol.Circle;

        this.currentPlayer = Player.Player1;
    }

    getBoard(): Board {
        return this.board;
    }

    getCurrentPlayer(): Player {
        return this.currentPlayer;
    }
}
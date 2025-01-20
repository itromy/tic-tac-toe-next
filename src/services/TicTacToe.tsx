import { Board, FieldSymbol, Player } from "@/types/types";

export default class TicTacToe {
    private board: Board;
    private currentPlayer: Player;

    constructor() {
        this.board = Array(9).fill(FieldSymbol.None);
        this.board[0] = FieldSymbol.Player1;
        this.board[3] = FieldSymbol.Player2;

        this.currentPlayer = Player.Player1;
    }

    getBoard(): Board {
        return this.board;
    }

    getCurrentPlayer(): Player {
        return this.currentPlayer;
    }

    makeMove(index: number) {
        if(this.currentPlayer === Player.Player1) {
            this.board[index] = FieldSymbol.Player1
        }
        else {
            this.board[index] = FieldSymbol.Player2
        }

        this.currentPlayer = this.currentPlayer === Player.Player1 ? Player.Player2 : Player.Player1;
    }
}
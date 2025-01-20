import { Board, FieldSymbol, Player } from "@/types/types";

export default class TicTacToe {
    private board: Board;
    private currentPlayer: Player;
    private winner: Player | undefined;

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

    getWinner(): Player | undefined {
        return this.winner;
    }

    makeMove(index: number) {
        if(!!this.winner) {
            console.log('Game is over');
            return;
        }

        if(this.board[index] !== FieldSymbol.None) {
            console.log('Field already taken');
            return;
        }

        if(this.currentPlayer === Player.Player1) {
            this.board[index] = FieldSymbol.Player1
        }
        else {
            this.board[index] = FieldSymbol.Player2
        }

        if(this.checkForWinner()) {
            this.winner = this.currentPlayer;
            console.log('player won:', this.currentPlayer)
            return;
       }

       this.currentPlayer = this.currentPlayer === Player.Player1 ? Player.Player2 : Player.Player1;
       console.log('is your turn ' + this.currentPlayer);
    }

    private checkForWinner(): boolean {
        const winPatterns = [
            // horiziontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonal
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;

            if (this.board[a] !== FieldSymbol.None 
                && this.board[a] === this.board[b]
                && this.board[a] === this.board[c]) {
                return true;
            }
        }

        return false;
    }
}
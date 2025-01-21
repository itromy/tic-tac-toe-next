import { Board, FieldSymbol, Player, TicTacToeInterface } from "@/types/types";

export default class TicTacToe implements TicTacToeInterface {
    private board : Board = [];
    private currentPlayer = Player.Player1;
    private winner: Player | undefined;
    private isGameIsOver = false;
    private winPattern: number[] = [];
    
    constructor() {
        this.resetGame(); 
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

    getIsGameOver(): boolean {
        return this.isGameIsOver;
    }

    getWinPattern(): Array<number> {
        return this.winPattern;
    }

    makeMove(index: number) {
        if (this.isGameIsOver) {
            console.log('Game is over');
            return;
        }

        if (this.board[index] !== FieldSymbol.None) {
            console.log('Field already taken');
            return;
        }

        // Set the move
        this.board[index] = this.currentPlayer === Player.Player1 ? FieldSymbol.Player1 : FieldSymbol.Player2;

        // Check for winner
        if (this.checkForWinner()) {
            this.winner = this.currentPlayer;
            this.isGameIsOver = true;
            console.log(`Player ${this.currentPlayer} won the game!`);
            return;
        }

        // Game is over
        if (this.checkIsGameOver()) {
            this.isGameIsOver = true;
            console.log('Game is a over!');
            return;
        }

        // Switch to the other player
        this.currentPlayer = this.currentPlayer === Player.Player1 ? Player.Player2 : Player.Player1;
        console.log(`It's now Player ${this.currentPlayer}'s turn.`);
    }

    private checkForWinner(): boolean {
        const winPatterns = [
            // horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonal
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of winPatterns) {
            if (
                this.board[a] !== FieldSymbol.None &&
                this.board[a] === this.board[b] &&
                this.board[a] === this.board[c]
            ) {
                this.winPattern = [a, b, c];
                return true;
            }
        }

        return false;
    }

    private checkIsGameOver(): boolean {
        return this.board.every((field) => field !== FieldSymbol.None);
    }

    resetGame() {
        console.log('Resetting the game...');
        this.board = Array(9).fill(FieldSymbol.None);
        this.currentPlayer = Player.Player1;
        this.winner = undefined;
        this.isGameIsOver = false;
        this.winPattern = [];
    }
}

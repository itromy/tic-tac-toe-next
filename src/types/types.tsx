export enum Player {
    Player1 = 'player-1',
    Player2 = 'player-2',
}

export enum FieldSymbol {
    None = "",
    Player1 = "X",
    Player2 = "O",
}

export type Board = Array<FieldSymbol>
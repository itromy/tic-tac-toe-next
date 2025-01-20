export enum Player {
    Player1 = 'player-1',
    Player2 = 'player-2',
}

export enum FieldSymbol {
    None = "",
    Cross = "X",
    Circle = "O",
}

export type Board = Array<FieldSymbol>
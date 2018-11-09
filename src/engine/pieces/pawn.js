import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if(this.player === Player.WHITE) {
            let square = new Square(1, 0);
            return [square]; 
        } else if (this.player === Player.BLACK) {
            let square = new Square(6, 7);
            return [square]; 
        }
    }
}

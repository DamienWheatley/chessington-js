import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this);
        if (this.player === Player.WHITE) {
            if (currentSquare.equals(Square.at(2,0))) {
                let square = new Square(3,0);
                return [square];

            } else if (currentSquare.equals(Square.at(1, 7))) {
                let square = [];
                square.push(new Square(2, 7),new Square(3,7));
                return square;
            }
                    
        } else if (this.player === Player.BLACK) {
            if(currentSquare.equals(Square.at(5,0))){
                let square = new Square(4, 0);
                return [square];                 
            } else if (currentSquare.equals(Square.at(6, 7))){
                let square = [];
                square.push(new Square(4, 7),new Square(5,7));
                return square;
            }
        }
    }
}

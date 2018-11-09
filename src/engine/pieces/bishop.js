import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if(this.player === Player.WHITE){
            const currentSquare = board.findPiece(this);
            let square = [];
            for (let i = -7; i <=7; i++) {
                let newSquare = new Square(i + currentSquare.row, i + currentSquare.col)
                if(!newSquare.equals(currentSquare)&&newSquare.isOnBoard()) {
                    square.push(newSquare);
                }  
            }
            //backwards-diagonal
            for (let i = -7; i <=7; i++) {
                let newSquare = new Square(i + currentSquare.row, i + currentSquare.col - 2)
                if(!newSquare.equals(currentSquare) && newSquare.isOnBoard()) {
                    square.push(newSquare);
            return square;
                }
            }
        }
    }
}
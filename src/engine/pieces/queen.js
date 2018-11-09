import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if(this.player === Player.WHITE) {
            const currentSquare = board.findPiece(this);
            let square = [];
            square.push(new Square(2,0),new Square(2,1),new Square(2,2),new Square(2,4),new Square(2,5),new Square(2,6),new Square(2,7)
            // ,new Square(0,3),new Square(1,3),new Square(3,3),new Square(4,3),new Square(5,3),new Square(6,3),new Square(7,3)
            // ,new Square(0,1) ,new Square(1,2),new Square(3,4),new Square(4,5),new Square(5,6),new Square(6,7)
            ,new Square(0,5),new Square(1,4),new Square(3,2),new Square(4,1),new Square(5,0));
            //vertical
            for(let i = 0; i <= 7; i++) {
                if(!(new Square(i,currentSquare.col).equals(currentSquare))) {
                    square.push(new Square(i,currentSquare.col));
                }
            }
            //horizontal
            for(let i = 0; i <= 7; i++) {
                if(!(new Square(currentSquare.row,i).equals(currentSquare))) {
                    square.push(new Square(currentSquare.row,i));
                }
            }
            //diagonal
            for (let i = -7; i <=7; i++) {
                let newSquare = new Square(i + currentSquare.row, i + currentSquare.col)
                if(!newSquare.equals(currentSquare)&&newSquare.isOnBoard()) {
                    square.push(newSquare);
                }  
            }
            //backwards-diagonal
            for (let i = -7; i <=7; i++) {
                let newSquare = new Square(i + currentSquare.row, i - currentSquare.col)
                if(!newSquare.equals(currentSquare)&&newSquare.isOnBoard()) {
                    square.push(newSquare);
                }  
            }

            return square;
        }
    }
}

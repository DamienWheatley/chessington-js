import Piece from './piece';
import Square from '../square';
import Player from '../player';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }


    getAvailableMoves(board) {
        if(this.player === Player.WHITE){
            let square = [];
            square.push(new Square(1,0),new Square(1,1),new Square(1,3),new Square(1,4),new Square(1,5),new Square(1,6),new Square(1,7)
            ,new Square(0,2),new Square(2,2),new Square(3,2),new Square(4,2),new Square(5,2),new Square(6,2),new Square(7,2));
            return square;
        }
    }
}

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
            let vectors = [[0,1],[1,0],[1,1],[1,-1]];
            let singleMove = false;
            let max = (singleMove === false)? 7:1;
            for(let i = -max; i <= max; i++) {
                vectors.forEach(function(vector) {
                    let x = vector[0]
                    let y = vector[1];
                    let newSquare = (new Square(currentSquare.row + i * x, currentSquare.col + i * y))
                    if(!newSquare.equals(currentSquare) && newSquare.isOnBoard()) {
                        square.push(newSquare);
                    }        
                })
            }           
            return square;
        }
    }
}

//vertical
            // for (let i = -7; i <=7; i++) {
            //     let newSquare = new Square(currentSquare.row + i * 1, currentSquare.col + i * 0)
            //     if(!newSquare.equals(currentSquare) && newSquare.isOnBoard()) {
            //         square.push(newSquare);
            // }
            // //horizontal
            // for (let i = -7; i <=7; i++) {
            //     let newSquare = new Square(currentSquare.row + i * 0, currentSquare.col + i * 1)
            //     if(!newSquare.equals(currentSquare) && newSquare.isOnBoard()) {
            //         square.push(newSquare);
            //     }  
            // }
            // //diagonal
            // for (let i = -7; i <=7; i++) {
            //     let newSquare = new Square(currentSquare.row + i * 1, currentSquare.col + i * 1)
            //     if(!newSquare.equals(currentSquare) && newSquare.isOnBoard()) {
            //             square.push(newSquare);
            //     }  
            // }
            // //backwards-diagonal
            // for (let i = -7; i <=7; i++) {
            //     let newSquare = new Square(currentSquare.row + i * 1, currentSquare.col + i * -1)
            //     if(!newSquare.equals(currentSquare) && newSquare.isOnBoard()) {
            //             square.push(newSquare);
                    
            //     }  
            // }

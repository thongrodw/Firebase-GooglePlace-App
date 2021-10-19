const { NotExtended } = require("http-errors");

function XoGame(){

    var board = ["", "", "", "", "", "", "", "", ""]
    this.empthySlot = [0,1,2,3,4,5,6,7,8]
    this.gameActive = true
    var currentPlayer = 'X'

    winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function validationResult() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }
        if (roundWon) {
            // console.log('Game Finished '+ currentPlayer+ ' won')
            // return false
            let winner = currentPlayer+ ' won'
            let data = {
                status: false,
                result: winner
            }
            return data
        }
        else{
            let data = {
                status: true,
                result: ''
            }
            return data
        }
    }
    
    function playerTurnHandler(){
        if(currentPlayer === 'X') currentPlayer = 'O'
        else currentPlayer = 'X'
    }
    
    this.clickEvent = async function(index){
        //Check Game status
        if(this.gameActive == false){
            console.log('Game completed please restart the game')
        } 
        //Validate input
        else if(!board[index].length){
            board[index] = currentPlayer
            //Remove empthy slot
            this.empthySlot = this.empthySlot.filter(item => item !== index)
            // //Player Change
            // playerTurnHandler()
            //Check Board
            console.log(`${board[0]} | ${board[1]} | ${board[2]} \n${board[3]} | ${board[4]} | ${board[5]} \n${board[6]} | ${board[7]} | ${board[8]} `)
            console.log("-----------")
        }
        else{
            console.log('Please select another slot')
        }
        let validation = validationResult()
        if(validation.status == false){
            return {
                gameactive: false,
                result: validation.result,
                data: board
            }
        } 
        else if(validation.status == true && this.empthySlot.length==0){
            return {
                gameactive: false,
                result: 'Draw',
                data: board
            }
        } 
        else{
            playerTurnHandler()
            return {
                gamestatus: true,
                result: '',
                data: board
            }
        } 
    }
    
    this.restartGame = function(){
        board = ["", "", "", "", "", "", "", "", ""]
        this.empthySlot = [0,1,2,3,4,5,6,7,8]
        this.gameActive = true
        currentPlayer = 'X'
        console.log("Game restarted")
    }
    
    this.board = board
    // this.empthySlot = this.empthySlot
}

var board = ["", "", "", "", "", "", "", "", ""]
// var this.empthySlot = [0,1,2,3,4,5,6,7,8]
// var gameActive = true
var currentPlayer = 'X'


// clickEvent(1)
// clickEvent(3)
// clickEvent(2)
// clickEvent(1)
// clickEvent(6)
// clickEvent(7)
// clickEvent(0)
// clickEvent(4)
// clickEvent(4)
// clickEvent(4)
// clickEvent(4)

module.exports = {
    XoGame
}

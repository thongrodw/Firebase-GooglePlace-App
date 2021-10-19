const service = require('./service')
const {XoGame} = require('../../utils/xoGame')

async function testRoute(req,res){
    res.send("Test Success")
}

/**
 * 
 * @param {Array<number>} req.params.number 
 * @return {bool} return YES or No 
*/
async function theGame24(req,res){
    var number = JSON.parse(req.body.number)
    if(service.getAllCombinations(number).has(24)) res.send('YES')
    else res.send('NO')
}

async function theXoGame(req,res){
    var gameStatus = true
    const game = new XoGame()
    try {
        while(gameStatus == true){
            var selectEvent = await game.empthySlot[Math.floor(Math.random()*game.empthySlot.length)];
            let result = await game.clickEvent(selectEvent)  
            if(result.gameactive == false) {
                res.status(200).json(result)
                break
            }
            else{
                continue
            }
        }
    } catch (error) {
        res.json({error: error.message})    
    }
}

module.exports = {
    testRoute,
    theGame24,
    theXoGame
}
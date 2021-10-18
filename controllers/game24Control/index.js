const service = require('./service')

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

module.exports = {
    testRoute,
    theGame24
}
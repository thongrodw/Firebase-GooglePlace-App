const service = require('./service')

async function testRoute(req,res){
    res.send("Test Success")
}

/**
 * 
 * @param {STRING} req.params.input text search input
 * @return {JSON} res return result from Google Place API
*/
async function getRestaurant(req,res){
    try {
        let result = await service.googlePlaceAPI(req.params.input)
        res.json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


module.exports = {
    getRestaurant,
    testRoute
}
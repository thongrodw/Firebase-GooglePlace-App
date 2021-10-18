var axios = require('axios');
const request = require('request')
require('dotenv').config()

async function googlePlaceAPI(input){
    var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${input}&key=${process.env.GOOGLE_API_KEY}`,
        headers: { }
    };
    
    try {
        let result = await axios(config)
        return result.data
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {
    googlePlaceAPI
}
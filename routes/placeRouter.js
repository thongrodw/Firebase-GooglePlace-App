var express = require('express');
var router = express.Router();
const controller = require('../controllers/jenosizeControl')

/* GET place test */
router.get('/test', controller.testRoute)

/* GET place search */
router.get('/search/:input', controller.getRestaurant)

module.exports = router;
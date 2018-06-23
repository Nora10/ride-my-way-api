const express = require('express');

const router = express.Router();
// const path = require('path');
const checkController = require('../app/controllers/rides');

// GET users listing
router.get('/rides', checkController.getspecific_ride_offers);


/*
* GET /ride/:id route to retrieve a ride given its id.
*/
router.get('/rides/:rideid', checkController.checkId_ride_offers);


/*
 * POST /ride to save a new ride.
 */
router.post('/rides', checkController.posting_ride_offers);


// post specific request
router.post('/rides/:rideid/requests', checkController.posting_ride_offers);

/*
* DELETE  a ride given its id.
*/
router.delete('/rides/:rideid', checkController.deleting_ride_offers);


/*
* PUT /ride/:id to updatea a ride given its id
*/
router.put('/rides/:rideid', checkController.updating_ride_offers);

module.exports = router;

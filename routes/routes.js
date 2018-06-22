const express = require('express');

const router = express.Router();
const path = require('path');
const check_controller = require('../app/controllers/rides');

// GET users listing 
router.get('/rides', check_controller.getspecific_ride_offers)


/*
* GET /book/:id route to retrieve a book given its id.
*/
router.get('/rides/:rideid', check_controller.checkId_ride_offers)


/*
 * POST /book to save a new book.
 */
router.post('/rides', check_controller.posting_ride_offers)


// post specific request
router.post('/rides/:rideid/requests', (req, res) => {
  const result = validate_ride(req.body);
  if (result.error) {
    res.status(400).send('Error');
    return;
  }

  rides.push(ride);
  res.send(ride);
});

/*
* DELETE /book/:id to delete a book given its id.
*/
router.delete('/rides/:rideid', check_controller.deleting_ride_offers)


/*
* PUT /book/:id to updatea a book given its id
*/
router.put('/rides/:rideid', check_controller.updating_ride_offers)

module.exports = router;

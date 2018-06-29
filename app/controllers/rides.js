import utils from '../../utils';


function checkId_ride_offers(req, res) {
  const newLocal = parseInt(req.params.rideid, 10);
  const ride = utils.rides.find(c => c.rideid === newLocal);
  if (!ride) {
    res.status(404).send('The ride with that ID was not given');
    return;
  }
  res.send(ride);
}
function getspecific_ride_offers(req, res) {
  res.status(200).send(utils.rides);
}
function posting_ride_offers(req, res) {
  const ride = {
    rideid: utils.rides.length + 1,
    name: req.body.name,
    departure: req.body.departure,
    arrival: req.body.arrival,
    available_Seats: req.body.available_Seats,
    amount: req.body.amount,
    date: req.body.date,
    time: req.body.time
  };
  utils.rides.push(ride);
  res.status(200).json({ message: 'new ride added', rides: utils.rides });
}
function deleting_ride_offers(req, res) {
  const newLocal = parseInt(req.params.rideid, 10);
  const ride = utils.rides.find(c => c.rideid === newLocal);
  if (!ride)
    return res.status(404).send('The ride with that ID was not given');
  const index = utils.rides.indexOf(ride);
  utils.rides.splice(index, 1);
  return res.json({ message: 'Ride successfully deleted!', rides: utils.rides });
}

function updating_ride_offers(req, res) {
  const newLocal = parseInt(req.params.rideid, 10);
  const ride = utils.rides.find(c => c.rideid === newLocal);
  if (!ride) {
    res.status(404).send('The ride with that ID was not given');
    return;
  }
  const result = utils.validateRide(req.body);
  if (result.error) {
    res.status(400).send(result.error.details[1].message);
    return;
  }
  ride.name = req.body.name;
  ride.departure = req.body.departure;
  ride.arrival = req.body.arrival;
  ride.amount = req.body.amount;
  ride.available_Seats = req.body.available_Seats;
  ride.date = req.body.date;
  ride.time = req.body.time;
  res.json(`Ride ${ride.rideid} has been updated`);
}

export {
  checkId_ride_offers, getspecific_ride_offers, posting_ride_offers,
  deleting_ride_offers, updating_ride_offers
}

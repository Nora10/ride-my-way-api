const Joi = require('joi');

module.exports = {
    validateRide(_ride) {
        const schema = {
            name: Joi.string().min(3).required(),
            departure: Joi.string().required(),
            arrival: Joi.string().required(),
            amount: Joi.string().required(),
            available_Seats: Joi.number().integer().required(),
            date: Joi.date().required(),
            time: Joi.string().required()
        };
        return Joi.validate(_ride, schema);
    },
    rides: [
        {
            rideid: 1, name: 'Dan Onoja', departure: 'Lagos', arrival: 'Abuja', amount: 'N10,000', available_Seats: '2', date: '08-08-2018', time: '5:00pm'
        },
        {
            rideid: 2, name: 'Jeremy Hunt', departure: 'Lagos', arrival: 'Benin', amount: 'N7,000', available_Seats: '4', date: '08-08-2018', time: '5:00pm'
        },
        {
            rideid: 3, name: 'Erons Abumere', departure: 'Ekiti', arrival: 'Osun', amount: 'N3,000', available_Seats: '2', date: '08-08-2018', time: '5:00pm'
        },
        {
            rideid: 4, name: 'Dumebi Osu', departure: 'Lagos', arrival: 'Jigawa', amount: 'N11,000', available_Seats: '2', date: '08-08-2018', time: '5:00pm'
        },
        {
            rideid: 5, name: 'Mikel Obi', departure: 'Ogbomosho', arrival: 'Auchi', amount: 'N7,000', available_Seats: '4', date: '08-08-2018', time: '5:00pm'
        },
        {
            rideid: 6, name: 'Pelumi James', departure: 'Ebonyi', arrival: 'Delta', amount: 'N3,000', available_Seats: '2', date: '08-08-2018', time: '5:00pm'
        }
    ]
};
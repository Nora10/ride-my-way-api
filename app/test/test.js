import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('Task API Routes', () => {
  describe('Rides', () => {
    describe('/GET rides', () => {
      it('it should GET all the rides offered', (done) => {
        chai.request(app)
          .get('/api/v1/rides')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
    describe('/POST rides', () => {
      it('it should POST a ride when all fields are filled', (done) => {
        const ride = {
          name: 'janet jaxk',
          departure: 'Benin',
          arrival: 'Plateau',
          amount: 'N5,000',
          available_Seats: 1,
          date: '05-05-2018',
          time: '11:00 am'
        };
        chai.request(app)
          .post('/api/v1/rides')
          .send(ride)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    describe('/GET/:id ride', () => {
      it('it should GET a ride by the given id', (done) => {
        const ride = {
          rideid: 1,
          name: 'Dan Onoja',
          departure: 'Lagos',
          arrival: 'Abuja',
          amount: 'N10,000',
          available_Seats: '2',
          date: '08-08-2018',
          time: '5:00pm'
        };
        chai.request(app)
          .get(`/api/v1/rides/${ride.rideid}`)
          .send(ride)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
      it('it should GET a 404 by the given wrong id', (done) => {
        const ride = {
          rideid: 'hcvncbn',
          name: 'Dan Onoja',
          departure: 'Lagos',
          arrival: 'Abuja',
          amount: 'N10,000',
          available_Seats: '2',
          date: '08-08-2018',
          time: '5:00pm'
        };
        chai.request(app)
          .get(`/api/v1/rides/${ride.rideid}`)
          .send(ride)
          .end((err, res) => {
            res.should.have.status(404);
            done();
          });
      });
    });

    describe('/PUT/:id ride', () => {
      it('it should UPDATE a ride given the id', (done) => {
        const ride = {
          rideid: 5,
          name: 'janet jaxk',
          departure: 'Benin',
          arrival: 'Plateau',
          amount: 'N5,000',
          available_Seats: 1,
          date: '05-05-2018',
          time: '11:00 am'
        };
        chai.request(app)
          .put(`/api/v1/rides/${ride.rideid}`)
          .send({
            name: 'john jaxk',
            departure: 'Benin',
            arrival: 'Lagos',
            amount: 'N5,000',
            available_Seats: 1,
            date: '05-05-2018',
            time: '11:00 am'
          })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });


    describe('/DELETE/:id ride', () => {
      it('it should DELETE a ride given the id', (done) => {
        const ride = {
          rideid: 5,
          name: 'janet jaxk',
          departure: 'Benin',
          arrival: 'Plateau',
          amount: 'N5,000',
          available_Seats: 1,
          date: '05-05-2018',
          time: '11:00 am'
        };
        chai.request(app)
          .delete(`/api/v1/rides/${ride.rideid}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });
});
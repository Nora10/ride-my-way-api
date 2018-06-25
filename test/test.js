process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

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
    it('it should not POST a ride without all  fields filled', (done) => {
      let ride = {
        name: "The Lord of the Rings",
        departure: "Benin",
        arrival: 'Plateau',
        amount: "N5,000",
        available_Seats: 1,
        date: '05-05-2018',
        time: '11:00 am'
      }
      chai.request(app)
        .post('/api/v1/rides')
        .send(ride)
        .end((err, res) => {
          res.should.have.status(200);
          // res.body.errors.pages.should.have.property('kind').eql('required');
          done();
        });
    });

  }
  )
});